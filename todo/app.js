const inputTask = document.querySelector('#inputTask');
const btnAdd =  document.querySelector('#btnAdd');
const containerCards = document.querySelector('#containerCards');
const btnCancel =  document.querySelector('#btnCancel');
const btnSave =  document.querySelector('#btnSave');

let allTask=[];
let idEditCard=0;

const addTask = () => {
    const nameTask=inputTask.value;
    if(nameTask){
        objTask={
            id:allTask.length + 1,
            name:nameTask,
            date:new Date().toISOString().slice(0, 10) 
        }
        allTask.push(objTask);
        addCard(objTask);
    }else{
        alert('Name is required')
    }
    inputTask.value='';
}

const addCard = (objTask) => {
    const cardElement = document.createElement("div");
    cardElement.className = "col-lg-3 col-md-4 col-xs-6 card";
    const templateCard = `
    <div class="card-body">
        ${objTask.name}
    </div>
    <div class="card-footer d-flex justify-content-between">
        <span class="text-secondary">${objTask.date}</span>
        <div class="d-flex justify-content-between gap-3">
            <i class="fa-solid fa-copy text-secondary" id="copy-${objTask.id}"></i>
            <i class="fa-regular fa-pen-to-square text-primary edit" id="edit-${objTask.id}"></i>
            <i class="fa-solid fa-trash text-danger delete" id="delete-${objTask.id}"></i>
        </div>
    </div>
    `
    cardElement.innerHTML = templateCard;
    containerCards.appendChild(cardElement);
    addEvents(objTask.id);
}


const addEvents=(id)=>{
    const iconCopy = document.getElementById('copy-'+id);
    const iconEdit = document.getElementById('edit-'+id);
    const iconDelete = document.getElementById('delete-'+id);
    iconCopy.addEventListener('click',()=>{
        copyTask(id)
    })

    iconEdit.addEventListener('click',()=>{
        editCard(id)
    })

    iconDelete.addEventListener('click',()=>{
        deleteTask(id);
    })
}


const copyTask=(id) => {
    objTask={
        id:allTask.length + 1,
        name:allTask[id-1].name,
        date:new Date().toISOString().slice(0, 10)
    }
    allTask.push(objTask);
    addCard(objTask);
}


const deleteTask = (id)  => {
    allTask=allTask.filter(item => item.id != id);
    refreshCards();
}

const  refreshCards = ()  => {
    containerCards.innerHTML='';
    allTask.forEach(objTask => {
       addCard(objTask);
    });
}


const editCard = (id) => {
    inputTask.value=allTask[id-1].name;
    btnAdd.style.display='none';
    btnCancel.style.display='block';
    btnSave.style.display='block';
    idEditCard=id;
}

btnSave.addEventListener('click',()=>{
    objTask={
        id:idEditCard,
        name:inputTask.value,
        date:new Date().toISOString().slice(0, 10)
    }
    allTask[idEditCard-1]=objTask;  
    idEditCard=0;
    inputTask.value='';
    refreshCards(); 
    resetInput();
}) 

btnCancel.addEventListener('click',()=>{
    resetInput();
})

function resetInput(){
    inputTask.value='';
    btnAdd.style.display='block';
    btnSave.style.display='none';
    btnCancel.style.display='none';
    idEditCard=0;
}


btnAdd.addEventListener('click',()=>addTask())
