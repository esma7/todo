

const input = document.querySelector("#input");

const todobtn = document.querySelector("#add");

const ul = document.querySelector(".taskList ul");



let todos = [];

todobtn.addEventListener("click", (e) =>{
    e.preventDefault()

    const value = input.value;

    if(!value) return;

    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos))
    display(); 

    input.value = "";
})

function display(){
    ul.innerHTML = "";
    todos.forEach((item,index) =>{
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.textContent = item;
        button.textContent = 'Delete';

        button.classList = 'btn';
        button.addEventListener("click", ()=>{
            deleteItem(index);
        });

        li.append(span, button);
        ul.append(li);

    })
}

function getFromTodos(){

    const localTodos = JSON.parse(localStorage.getItem("todos"))

    if(!localTodos) return;

    todos = localTodos;
    display();
}

getFromTodos(); 


const deleteItem = (index) =>{
todos.splice(index, 1);
display();
localStorage.setItem("todos", JSON.stringify(todos));


}




























// todobtn.addEventListener("click", (e)=>{
//     e.preventDefault() //sehife yenilenmesini onleyir renderin qarsini alir 

//     let value = input.value;
   

//     const btn = document.createElement("button");
//     const span = document.createElement("span");
//     const li = document.createElement('li');

    
//     span.textContent = value;
//     btn.textContent = "Delete";
    
//     li.append(span,btn);
//     ul.append(li)


// })


