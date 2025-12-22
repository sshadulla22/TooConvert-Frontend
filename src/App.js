import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/Pages/Lander/LandingPage";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Pages/main/main";
import MockupTool from "./components/Converters/Image_Tools/ImageTools";
import ImageTools from "./components/Converters/Image_Tools/ImageTools";
import PdfCompressor from "./components/Converters/Documnet_converters/PdfTools";
import MergePdfs from "./components/Converters/Documnet_converters/PdfTools";
import SplitPdfs from "./components/Converters/Documnet_converters/PdfTools";
import ExtractText from "./components/Converters/Documnet_converters/PdfTools";
import PdfToDocx from "./components/Converters/Documnet_converters/FileConverter";
import DocxToPdf from "./components/Converters/Documnet_converters/FileConverter";
import PdfToImage from "./components/Converters/Documnet_converters/PdfTools";
import ImageToPdf from "./components/Converters/Documnet_converters/FileConverter";
import PptToPdf from "./components/Converters/Documnet_converters/PdfTools";
import ExcelToPdf from "./components/Converters/Documnet_converters/FileConverter";
import CodeCompiler from "./components/Converters/CodeCompiler/CodeCompiler";
import QrCodeGenerator from "./components/Converters/Qrcode/QrCodeGenerator";
import Base64Tools from "./components/Converters/Base64/Base64Tools";
import UtilityTools from "./components/Converters/Utility_Tools/UtilityTools";
import NotFound from "./components/Pages/Status/notFound";
import Login from  "./components/Pages/Authentication/Login";
import Signup from "./components/Pages/Authentication/Singup";

function App() {
 
  return (
    <>
   <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LandingPage/>} />
      <Route path="/main" element={<Main />} />
      <Route path="/pdf-compressor" element={<PdfCompressor />} />
      <Route path="/merge-pdfs" element={<MergePdfs />} />
      <Route path="/split-pdfs" element={<SplitPdfs />} />
      <Route path="/extract-text" element={<ExtractText />} />
      <Route path="/pdf-to-docx" element={<PdfToDocx />} />
      <Route path="/docx-to-pdf" element={<DocxToPdf />} />
      <Route path="/pdf-to-image" element={<PdfToImage />} />
      <Route path="/image-to-pdf" element={<ImageToPdf />} />
      <Route path="/ppt-to-pdf" element={<PptToPdf />} />
      <Route path="/excel-to-pdf" element={<ExcelToPdf />} />
      <Route path="/code-compiler" element={<CodeCompiler />} />
      <Route path="/qr-code-generator" element={<QrCodeGenerator />} />
      <Route path="/base64-tools" element={<Base64Tools />} />
      <Route path="/utility-tools" element={<UtilityTools />} />
      <Route path="/mockup-tool" element={<MockupTool />} />
      <Route path="/image-tools" element={<ImageTools />} />
  =   <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  );
}

export default App;
