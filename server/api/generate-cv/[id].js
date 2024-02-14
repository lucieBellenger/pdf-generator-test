import { generatePDF } from "~/server/utils/generatePDF";

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params.id;

    if (!id) {
      throw new Error("ID not provided in the event context");
    }
    const { browser, page } = await openBrowser();

    const options = {
      urlToGo: "talent",
      filePath: "pdfs/cvs",
      id,
      idToTarget: ["talent-resume__", "emoji", "icon__"],
      templateName: `result_${id}`,
      page,
    };

    const pdf = await generatePDF(options);
    await closeBrowser(browser);

    return pdf;
  } catch (error) {
    console.error("Error generating PDF:", error.message);
    return { statusCode: 500, body: "Internal Server Error" };
  }
});
