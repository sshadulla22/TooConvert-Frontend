import { useNavigate } from "react-router-dom";
import "./notFound.css";
import animation from "../../../../src/assets/anim_404/22k2W3PT3E1R3619Xf.mp4";
const NotFound = () => {
    const navigate = useNavigate();

    const onBackToHome = () => {
        navigate("/");
    };

    const onBackToImageTools = () => {
        navigate("/image-tools");
    };

    const sendtopdfTools = () => {
        navigate("/pdf-tools");
    }

    
    const sendtopdfToDocx = () => {
        navigate("/pdf-to-docx");
    }

    const sendtoUtils = () => {
        navigate("/utility-tools");
    }

    const sendtoCodeCompiler = () => {
        navigate("/code-compiler");
    }

    const sendtoQrCodeGenerator = () => {
        navigate("/qr-code-generator");
    }

    const sendtobase64 = () => {
        navigate("/base64-tools");
    }

    return (
        <>
            <div className="notfound-container">
                    <video
                    className="notfound-video"
                    src={animation}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <h1 className="notfound-title">404 Not Found</h1>
                <p className="notfound-text">
                    Sorry, the page you are looking for does not exist.
                </p>
                <button className="back-home-btn" onClick={onBackToHome}>
                    Back to Home
                </button>
            </div>

            <div className="tools-grid">
                <button className="tool-btn" onClick={sendtopdfTools}>pdfTools</button>
                <button className="tool-btn" onClick={sendtopdfToDocx}>pdfToDocx</button>
                <button className="tool-btn" onClick={sendtopdfToDocx}>docxToPdf</button>
                <button className="tool-btn" onClick={sendtopdfToDocx} >pdfToImage</button>
                <button className="tool-btn" onClick={sendtopdfToDocx}>imageToPdf</button>
                <button className="tool-btn" onClick={sendtopdfToDocx}>pptToPdf</button>
                <button className="tool-btn" onClick={sendtopdfToDocx}>excelToPdf</button>
                <button className="tool-btn" onClick={sendtoCodeCompiler}>codeCompiler</button>
                <button className="tool-btn" onClick={sendtoQrCodeGenerator}>qrCodeGenerator</button>
                <button className="tool-btn" onClick={sendtobase64}>base64Tools</button>
                <button className="tool-btn" onClick={onBackToImageTools}>imageTools</button>
                <button className="tool-btn" onClick={sendtoUtils}>utilityTools</button>
            </div>
        </>
    );
};

export default NotFound;
