let GetTextDatat = document.querySelector('.todoPlaceholder');
let BtnSubmitList = document.querySelector('.submitList');
let ContandBlock = document.querySelector('.inputPlaceForlist');
let BtnDeleteBtn = document.querySelector('.AllDelete');
let DeleteLocalData = document.querySelector('.DeleteLocalData');
let arrAllData = [];


DeleteLocalData.addEventListener('click', ()=> {
    localStorage.clear();
    arrAllData = [];
    BasketToApp();
    allEventFordel();
    Description();
    let a = document.querySelectorAll('.AllToDo');
    a.forEach(item=>item.remove());
})
if (localStorage.getItem('arr')!= undefined) {
    arrAllData = JSON.parse(localStorage.getItem('arr'));
    BasketToApp();
    allEventFordel();
    Description();
    console.log('work');
}

BtnSubmitList.addEventListener('click', addNewToDo)

function addNewToDo () {
    localStorage.clear();
    arrAllData.push(GetTextDatat.value);
    GetTextDatat.value= '';
    let AllToDo = document.querySelectorAll('.AllToDo');
    AllToDo.forEach((e)=> {
        e.remove();
    })
    localStorage.setItem('arr', JSON.stringify(arrAllData));
    BasketToApp();
    allEventFordel();
    Description();
}

function BasketToApp() {
    for (let i = 0; i<=arrAllData.length-1 ;i++) {
        let orderBlock = document.createElement('div');
        orderBlock.className = 'AllToDo';
        let someDo = document.createElement('p');
        someDo.className = 'ToDoData';
        someDo.innerHTML = `${i+1}. ${arrAllData[i]}`;
        orderBlock.appendChild(someDo);
        let DeleteAndChack = document.createElement('div')
        DeleteAndChack.className = 'DeleteAndChack';
        let cheked = document.createElement('input');
        cheked.type = 'checkbox';
        cheked.className = 'chekedItetm';
        let DeleteImg = document.createElement('input');
        DeleteImg.type ='image';
        DeleteImg.src = 'basket.svg';
        DeleteImg.className = 'basket';
        DeleteAndChack.appendChild(cheked);
        DeleteAndChack.appendChild(DeleteImg);
        orderBlock.appendChild(DeleteAndChack);
        ContandBlock.appendChild(orderBlock);
     } 
}
function Description() {
    let chekedItetm = document.querySelectorAll('.chekedItetm');
    chekedItetm.forEach(item=> item.addEventListener('click', (event)=> {
        if (event.target.checked) {
            event.target.closest('.AllToDo').querySelector('.ToDoData').style.textDecoration = 'line-through';
        } else {
            event.target.closest('.AllToDo').querySelector('.ToDoData').style.textDecoration = 'none';
        }
    }))
}

function allEventFordel() {
    let AllBAsket = document.querySelectorAll('.basket');
    AllBAsket.forEach(item => item.addEventListener('click',  deleteItem))
}

function deleteItem(event) {
    let e = event.target;
    let Dataz = e.closest('.AllToDo').querySelector('.ToDoData').textContent.slice(2).trim();
    let zIndex = arrAllData.findIndex(item=> item == Dataz);
    arrAllData.splice(zIndex,1);
    e.closest('.AllToDo').remove();

}
