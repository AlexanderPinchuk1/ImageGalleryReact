
function TermsOfUse({ termsOfUse, handleAcceptClick }) {
    function createTermOfUse() {
        const content = termsOfUse.paragraphs
            .sort((a, b) => a.index > b.index ? 1 : -1)
            .map((paragraph) => {
                return (
                    <div key={paragraph.index}>
                        <h2>{paragraph.title}</h2>
                        <p>{paragraph.content}</p>
                    </div>
                );
            })

        return (
            <div>
                {content}
                <button onClick={handleAcceptClick}>Click!</button>
            </div>
        );
    }

    return (
        <div>
            {createTermOfUse()}
        </div>
    );
}

export default TermsOfUse;