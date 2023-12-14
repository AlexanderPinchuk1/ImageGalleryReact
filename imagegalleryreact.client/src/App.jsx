import { useEffect, useState } from 'react';
import './styles/App.css';
import Gallery from './Gallery';
import TermsOfUse from './TermsOfUse';


function App() {
    const REMOTE_HOST = "http://167.71.69.158";

    const [termsOfUse, setTermsOfUse] = useState({
        paragraphs: [],
        accepted: false
    });
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch(REMOTE_HOST + '/static/test.json');
        const data = await response.json();

        setTermsOfUse({
            paragraphs: data.terms_of_use.paragraphs,
            accepted: false
        });
        setImages(data.images);
    }

    function handleAcceptClick() {
        setTermsOfUse({ ...termsOfUse, accepted: true });
    }

    function renderContent() {
        if (termsOfUse.paragraphs == [] && images == []) {
            return;
        }
        
        if (termsOfUse.accepted == false) {
            return <TermsOfUse termsOfUse={termsOfUse} handleAcceptClick={handleAcceptClick} />
        } else {
            return <Gallery images={images} />;
        }
    }
    
    return (
        <div>
            {renderContent()}
        </div>
    );

}

export default App;