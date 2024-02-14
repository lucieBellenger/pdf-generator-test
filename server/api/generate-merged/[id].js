import { generateMergedPDFs } from "~/server/utils/generateMergedPDF.js";
export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params.id;

    if (!id) {
      throw new Error("ID not provided in the event context");
    }
    const options = [
      {
        urlToGo: "talent",
        filePath: "pdfs/cvs",
        id,
        idToTarget: ["talent-resume__", "emoji", "icon__"],
        templateName: `result_${id}`,
      },
      {
        urlToGo: "coverletter",
        filePath: "pdfs/coverLetters",
        id,
        idToTarget: ["talent-cover__", "icon__"],
        templateName: `result_${id}`,
      },
    ];
    const pdfPath = await generateMergedPDFs(options);
    return { statusCode: 200, data: pdfPath };
  } catch (error) {
    console.error("Error generating PDF:", error.message);
    return { statusCode: 500, body: "Internal Server Error" };
  }
});
