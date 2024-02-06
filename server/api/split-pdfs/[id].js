import { getPDF } from "~/server/utils/splitPDF";
import { base64ToUint8Array } from "~/server/utils/generateMergedPDF.js";

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params.id;

    if (!id) {
      throw new Error("ID not provided in the event context");
    }

    const fileName = `result__${id}.pdf`;
    const folderPath = "merged";

    const buffer = await getPDF(folderPath, fileName);
    const uint8Array = base64ToUint8Array(buffer);
    await splitPDF(uint8Array, 1, `pdfs/splitted/result__${id}.pdf`);

    return {
      statusCode: 200,
      data: `pdfs/split/result__${id}.pdf`
    }

  } catch (error) {
    console.error("Error generating PDF:", error.message);
    return { statusCode: 500, body: "Internal Server Error" };
  }
});
