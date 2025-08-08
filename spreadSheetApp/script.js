const spreadSheetContainer = document.getElementById('spreadsheet-container');
const ROWS = 10;
const COLS = 10;

const spreadsheet= [];

function initSpreadSheet(){
    for(let i =0; i < ROWS; i++){
        let spreadsheetRow = [];
        for(let j = 0; j < COLS; j++){
            spreadsheetRow.push(i + "-" + j);
        }
        spreadsheet.push(spreadsheetRow);
    }
    console.log(spreadsheet);
}

initSpreadSheet();