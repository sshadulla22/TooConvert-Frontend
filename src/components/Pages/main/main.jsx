import React, { useState } from "react";
import PdfToDocx from "../../Converters/Documnet_converters/PdfToDocx";
import PdfTools from "../../Converters/Documnet_converters/PdfTools";
import ImageTools from "../../Converters/Image_Tools/ImageTools";
import TextJsonTools from "../../Converters/TextJASON_Tool/TextJsonTools";
import Base64Tools from "../../Converters/Base64/Base64Tools";
import QrCode from "../../Converters/Qrcode/QrCodeGenerator";
import CodeCompiler from "../../Converters/CodeCompiler/CodeCompiler";
import UtilityTools from "../../Converters/Utility_Tools/UtilityTools";
import TopBar from "../../Global Components/Topbar/TopBar";
import logo from "../../../Group 16.png"
import LandingPage from "../Lander/LandingPage";
import Navbar from "../../Global Components/Navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFilePdf, faImage, faCode, faQrcode, faLaptopCode, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import "./main.css";
function App() {
    const [back, setBack] = useState(false);
    const [tool, setTool] = useState("PDF→DOCX/Conversion");
    // Initial state based on screen width
    const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.innerWidth > 768);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    const tools = [
        {
            name: "PDF→DOCX/Conversion",
            icon: faFile,
            description: "Convert PDF documents to editable Word files instantly."
        },
        {
            name: "PDF Tools",
            icon: faFilePdf,
            description: "Merge, split, compress, and organize your PDF files."
        },
        {
            name: "Image Tools",
            icon: faImage,
            description: "Convert, resize, and optimize images for web and print."
        },
        {
            name: "Text & JSON Tools",
            icon: faCode,
            description: "Format, validate, and convert JSON and text data."
        },
        {
            name: "Base64 Encoder/Decoder",
            icon: faCode,
            description: "Encode and decode data to and from Base64 format."
        },
        {
            name: "QR Code Generator",
            icon: faQrcode,
            description: "Generate custom QR codes for URLs, text, and more."
        },
        {
            name: "Code Compiler",
            icon: faLaptopCode,
            description: "Write, compile, and run code in multiple languages."
        },
        {
            name: "Utility Tools",
            icon: faScrewdriverWrench,
            description: "Various utility tools for everyday developer tasks."
        },
    ];

    const activeTool = tools.find((t) => t.name === tool);

    const handleBack = () => {
        setBack(true);
    }

    if (back) {
        return <LandingPage />
    }
    return (
        <div className="main-layout">
            {/* <TopBar /> */}
            <div className="content-wrapper">
                {/* Mobile Overlay */}
                {isSidebarOpen && (
                    <div
                        className="sidebar-overlay"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <aside className={`sidebar-container ${isSidebarOpen ? "open" : "closed"}`}>
                    <div className="brand-logo">
                        <img src={logo} height={"40px"} width={"40px"} alt="" />
                        <h2 style={{ color: "#2EB3B0", fontSize: "20px", fontWeight: "bold" }}>tooconvert.in</h2>
                    </div>
                    <div className="sidebar-menu">
                        {tools.map((t) => (
                            <button
                                key={t.name}
                                className={`sidebar-btn ${tool === t.name ? "active" : ""}`}
                                onClick={() => setTool(t.name)}
                            >
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={t.icon} />
                                </div>
                                <span className="btn-text">{t.name}</span>
                            </button>
                        ))}

                    </div>
                    {/* <div style={{width:"100%", marginTop:"125px"}} >
                         <Navbar />
                        </div> */}
                </aside>

                {/* Main Content */}
                <main className="main-content-area">
                    {activeTool && (
                        <header className="tool-header">
                            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                <button className="sidebar-toggle" onClick={toggleSidebar}>
                                    ☰
                                </button>
                                <div className="tool-title-wrapper">
                                    <div className="tool-icon-large">
                                        <FontAwesomeIcon icon={activeTool.icon} />
                                    </div>
                                    <div>
                                        <h1 className="tool-title">{activeTool.name}</h1>
                                        <p className="tool-description">{activeTool.description}</p>
                                    </div>

                                </div>
                            </div>
                            <button onClick={handleBack} className="back-button">Back</button>
                        </header>
                    )}

                    <div className="tool-view-container" key={tool}>
                        {tool === "PDF→DOCX/Conversion" && <PdfToDocx />}
                        {tool === "PDF Tools" && <PdfTools />}
                        {tool === "Image Tools" && <ImageTools />}
                        {tool === "Text & JSON Tools" && <TextJsonTools />}
                        {tool === "Base64 Encoder/Decoder" && <Base64Tools />}
                        {tool === "QR Code Generator" && <QrCode />}
                        {tool === "Code Compiler" && <CodeCompiler />}
                        {tool === "Utility Tools" && <UtilityTools />}
                    </div>
                </main>

            </div>

        </div>
    );
}

export default App;