export const generatePDF = async (options) => {
  const { id, urlToGo, filePath, templateName, idToTarget, page } = options;

  try {
    await page.goto(`http://localhost:3000/${urlToGo}/${id}`);

    await page.emulateMediaType("print");

    for (const id of idToTarget) {
      await page.waitForSelector(`[id^="${id}"]`, {
        visible: true,
      });
    }

    await page.evaluateHandle("document.fonts.ready");

    const pdfPath = `${filePath}/${templateName}.pdf`;

    const pdfBuffer = await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      waitUntil: "loaded",
      preferCSSPageSize: true,
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
    throw error;
  }
};
