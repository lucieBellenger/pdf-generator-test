import fs from "fs";
import { PDFDocument } from "pdf-lib";
import path from "path";

export const getPDF = async (folderPath, fileName) => {
  const filePath = path.join(process.cwd(), "pdfs", folderPath, fileName);

  const fileContent = await fs.promises.readFile(`${filePath}`);
  console.log(`File content: ${fileContent}`);
  return fileContent.toString("base64");
};

export const splitPDF = async (Uint8Array, pageNumber, outputPath) => {
  const pdfDoc = await PDFDocument.load(Uint8Array);
  console.log(`File numbers: ${pdfDoc.getPageCount()}`);
  pdfDoc.removePage(pageNumber);

  const modifiedPdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, modifiedPdfBytes);
};

export const getFullPath = (folderNames, fileName) => {
  return path.join(process.cwd(), ...folderNames, fileName);
};
