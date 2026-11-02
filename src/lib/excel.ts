import * as XLSX from "xlsx";
import path from "path";

export function getWines() {
  const file = path.join(
    process.cwd(),
    "data",
    "wines.xlsx"
  );

  const workbook = XLSX.readFile(file);

  const wines: any[] = [];

  workbook.SheetNames.forEach((sheet) => {
    const worksheet =
      workbook.Sheets[sheet];

    const rows =
      XLSX.utils.sheet_to_json(
        worksheet
      );

    rows.forEach((row) => {
      wines.push({
        ...row,
        ubicacion: sheet,
      });
    });
  });

  return wines;
}
