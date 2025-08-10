const spreadSheetContainer = document.getElementById('spreadsheet-container');
const exportBtn = document.getElementById('export-btn');
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

    cellEl.onclick = () => {onclickhandler(cell)};
    cellEl.onchange= (e) => {changeHanlder(e.target.value,cell)}

    return cellEl;
}

function changeHanlder(value,cell){
    cell.data = value;
}

function onclickhandler(cell){
    clearHeaderActiveStatus();
    const columnHeader = spreadsheet[0][cell.column];
    const rowHeader = spreadsheet[cell.row][0];
    const columnHeaderEl = getHeaderCell(columnHeader.row,columnHeader.column);
    const rowHeaderEl = getHeaderCell(rowHeader.row,rowHeader.column);
    columnHeaderEl.classList.add('active');
    rowHeaderEl.classList.add('active');
    // console.log('clicked cell',columnHeaderEl,rowHeaderEl);
}

function getHeaderCell(row, col) {
    return document.querySelector("#cell_"+row+col);
}

function clearHeaderActiveStatus(){
    const headers = document.querySelectorAll('.header');

    headers.forEach((header)=>{
        header.classList.remove('active');
    })
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
    // console.log(spreadsheet);
}

exportBtn.onclick = () => {
    let csv = "";

    for(let i =0;i<spreadsheet.length;i++){
        if (i===0) continue;
        csv += spreadsheet[i]
                .filter(item => !item.isHeader)
                .map(item => item.data)
                .join(',')+"\r\n";
    }

    const csvObj = new Blob([csv]);
    const csvUrl = URL.createObjectURL(csvObj);
    console.log('csvUrl :',csvUrl);

    const a = document.createElement('a');
    a.href = csvUrl;
    a.download = 'spreadsheet name.csv';
    a.click();
}


initSpreadSheet();
