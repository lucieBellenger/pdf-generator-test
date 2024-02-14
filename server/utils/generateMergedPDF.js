import puppeteer from "puppeteer";
import { generatePDF } from "./generatePDF";
import { PDFDocument } from "pdf-lib";
import fs from "fs";

export const base64ToUint8Array = (base64) => {
  const binaryString = atob(base64);
  const length = binaryString.length;
  const uint8Array = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }

  return uint8Array;
};

const mergePDFs = async (base64PDFs, outputPath) => {
  const mergedPDF = await PDFDocument.create();

  for (const base64PDF of base64PDFs) {
    const pdfBuffer = base64ToUint8Array(base64PDF);

    const externalPDF = await PDFDocument.load(pdfBuffer);
    const copiedPages = await mergedPDF.copyPages(
      externalPDF,
      externalPDF.getPageIndices()
    );
    copiedPages.forEach((page) => {
      mergedPDF.addPage(page);
    });
  }

  const pdf = await mergedPDF.save();
  fs.writeFileSync(outputPath, pdf);
};

export const generateMergedPDFs = async (options) => {
  const browser = await puppeteer.launch({ headless: true });
  let pdfs = [];
  let id;
  for (const urlOptions of options) {
    const page = await browser.newPage();

    try {
      const pdf = await generatePDF({
        ...urlOptions,
        page,
      });
      pdfs.push(pdf.body);
      id = urlOptions.id;

      console.log(`Generated PDF for ${urlOptions.urlToGo}`);
    } catch (error) {
      console.error(
        `Error generating PDF for ${urlOptions.urlToGo}:`,
        error.message
      );
    } finally {
      await page.close();
    }
  }
  await browser.close();

  if (pdfs.length) {
    const path = `pdfs/merged/result__${id}.pdf`;
    await mergePDFs(pdfs, path);
    return path;
  }
};
