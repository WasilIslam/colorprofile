const { cmyk2rgb, rgbToHex } = require("./conversion")
const Excel = require('exceljs');
const workbook = new Excel.Workbook();



//CONSTANTS
const input_file_name = "cmyk_rgb_colors.xlsx",
    input_worksheet_name = "cmyk_rgb_colors",
    output_file_name = "converted.xlsx",
    input_column_number = 4;


async function main() {
    await workbook.xlsx.readFile(input_file_name);
    var worksheet = workbook.getWorksheet(input_worksheet_name);
    //loop 
    const rows = worksheet.getColumn(input_column_number).values;
    for (let i = 1; i < rows.length; i++) {
        //input
        const [c, m, y, k] = rows[i].split("-")
        const { r, g, b } = cmyk2rgb(c, m, y, k)
        const hex = rgbToHex(r, g, b);
        //save rgb value in columnn "E"
        worksheet.getCell("E" + (i + 1)).value = `rgb(${r} ,${g} ,${b})`;//Change the cell number here
        //save hex value in column "F"
        worksheet.getCell("F" + (i + 1)).value = hex;//Change the cell number here
    }
    return await workbook.xlsx.writeFile(output_file_name)//Change file name here or give     file path
}

main()


