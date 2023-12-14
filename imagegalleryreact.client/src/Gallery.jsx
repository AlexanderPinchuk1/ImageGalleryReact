
function Gallery({ images }) {
    const REMOTE_HOST = "http://167.71.69.158";
    const PROXY = "https://api.codetabs.com/v1/proxy?quest=";

    async function handleDownloadClick(imageUrl) {
        const image = await fetch(PROXY + imageUrl);
        const imageBlob = await image.blob();
        const imageURL = URL.createObjectURL(imageBlob);

        const link = document.createElement('a');
        link.href = imageURL;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function createImageGallery() {
        const gallery = images.map((image) => {
            return (
                <div key={image.image_url}>
                    <img src={REMOTE_HOST + image.image_url}></img>
                    <button onClick={() => handleDownloadClick(REMOTE_HOST + image.image_url)}>Download</button>
                </div>
            );
        });

        return <div>{gallery}</div>;
    }

    return (
        <div>
            {createImageGallery()}
        </div>
    );
}

export default Gallery;