const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos=[];

createBtn.addEventListener('click',createNewTodo);

function createNewTodo(){
    // 새로운 객체 생성하기
    const item = {
        id: new Date().getTime(),
        text: '',
        complete: false,
    }

    // todos 배열 처음에 item 추가
    todos.unshift(item);

    // 요소 생성하기
     const {itemEl, inputEl, editBtnEl, removeBtnEl} = createTodoElement(item);
    
     //list 요소 안에 방금 생성한 item 요소 추가
     list.prepend(itemEl);

     inputEl.removeAttribute('disabled');

     inputEl.focus();
}

function createTodoElement(item){
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');

    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';

     if(item.complete) {
        itemEl.classList.add('complete');
     }

     const inputEl = document.createElement('input');
     inputEl.type ='text'; 
     inputEl.value=item.text;
     inputEl.setAttribute('disabled','');

     const actionsEl = document.createElement('div');
     actionsEl.classList.add('actions');

     const editBtnEl = document.createElement('button');
     editBtnEl.classList.add('material-icons'); 
     editBtnEl.innerText='edit';

     const removeBtnEl = document.createElement('button');
     removeBtnEl.classList.add('material-icons','remove-btn');
     removeBtnEl.innerText='remove_circles';

     actionsEl.append(editBtnEl);
     actionsEl.append(removeBtnEl);

     itemEl.append(checkboxEl);
     itemEl.append(inputEl);
     itemEl.append(actionsEl);

     return {itemEl, inputEl, editBtnEl, removeBtnEl};
    }