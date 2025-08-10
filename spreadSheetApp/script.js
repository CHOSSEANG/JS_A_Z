const spreadSheetContainer = document.getElementById('spreadsheet-container');
const ROWS = 10;
const COLS = 10;

const spreadsheet= [];
const alphabets = [
  "A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U",
  "V", "W", "X", "Y", "Z"
];

class Cell{
    constructor(isHeader, disabled, data,rowName,colName, row, column, active = false) {
         this.isHeader = isHeader;
         this.disabled = disabled;
         this.data = data;
         this.rowName = rowName;
         this.colName = colName;
         this.row = row;
         this.column = column;
         this.active = active;
    }
}

function createCellEl(cell){
    const cellEl = document.createElement('input');
    cellEl.className = "cell";
    cellEl.id = "cell_" + cell.row + cell.column;
    cellEl.value = cell.data;
    cellEl.disabled = cell.disabled;

    if(cell.isHeader){
        cellEl.classList.add('header');
    }

    return cellEl;
}

function drawSheet(){
    for(let i = 0; i < spreadsheet.length; i++){
        const rowContainerEl = document.createElement('div');
        rowContainerEl.className="cell-row";

        for(let j = 0; j < spreadsheet[i].length;j++){
            const cell = spreadsheet[i][j];
            rowContainerEl.append(createCellEl(cell))
        }
        spreadSheetContainer.append(rowContainerEl);
    }
}

function initSpreadSheet(){
    for(let i =0; i < ROWS; i++){
        let spreadsheetRow = [];
        for(let j = 0; j < COLS; j++){
            let cellData="";
            let isHeader = false;
            let isDisabled = false;
            
            // 모든 row의 첫번째 column에 숮자 넣기
            if( j ===0 ){
                cellData = i;
                isHeader = true;
                isDisabled = true;
            }

            // 모든 column의 첫번째 row에 알파벳
            if( i===0 ){
                cellData = alphabets[j-1];
                isHeader = true;
                isDisabled = true;
            }

            if( !cellData ){
                cellData="";
            }

            // 첫 번째 row의 column은 빈 칸으로 설정
            if(cellData<=0){
                cellData="";
            }

            let rowName = i;
            let colName = alphabets[j-1];

            const cell = new Cell(isHeader, isDisabled, cellData,rowName,colName, i, j, false)
            spreadsheetRow.push(cell);
        }
        spreadsheet.push(spreadsheetRow);
    }
    drawSheet();
    console.log(spreadsheet);
}

initSpreadSheet();
