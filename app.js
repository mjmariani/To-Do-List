
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))






data.forEach(item => {
  addTask(item)
})

function loadEvents(){
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click',clearList);
    document.querySelector('ul').addEventListener('click',deleteOrTick);
}


loadEvents();

function submit(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != ''){
        addTask(input.value);
        input.value ='';
    }


}


function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
    ul.appendChild(li);
    //document.querySelector('.taskBoard').getElementsByClassName.display = 'block';
    itemsArray.push(task);
    localStorage.setItem('items', JSON.stringify(itemsArray))

}

function clearList(event){
    
    let ul = document.querySelector('ul').innerHTML = '';
    localStorage.clear();
  }

  function deleteOrTick(event){
    if(event.target.className == 'delete'){
    deleteTask(event);}
    else {
        tickTask(event);}

  }

function deleteTask(event){
   let remove = event.target.parentNode;
   let parentNode = remove.parentNode;
   parentNode.removeChild(remove);


}

function tickTask(event){
    const task = event.target.nextSibling;
    if(event.target.checked){
        task.style.textDecoration = "line-through";
        task.style.color = "#A0A0A0";

    }else{
        task.style.textDecoration = "none";
        task.style.color = "black";
    }

}

