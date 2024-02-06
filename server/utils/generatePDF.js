export const generatePDF = async (options) => {
  const { id, urlToGo, filePath, templateName, idToTarget, page } = options;

  try {
    await page.goto(`http://localhost:3000/${urlToGo}/${id}`);

    await page.emulateMediaType("screen");

    await page.waitForSelector(`[id^="${idToTarget}"]`, {
      visible: true,
    });

    const pdfPath = `${filePath}/${templateName}.pdf`;

    const pdfBuffer = await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
    });

    return {
      statusCode: 200,
      isBase64Encoded: true,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": pdfBuffer.length,
      },
      body: pdfBuffer.toString("base64"),
    };
  } catch (error) {
    console.error(`Error generating PDF for ${urlToGo}:`, error.message);
    throw error; // Rethrow the error to be caught in the calling function
  }
};
