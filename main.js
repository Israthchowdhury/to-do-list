let addTodoButton = document.getElementById("addToDo");
let addToDoContainer =document.getElementById("todoContainer");
let inputFeild = document.getElementById("inputField");


addTodoButton.addEventListener('click',function(){

    var paragraph =document.createElement('p');

    paragraph.innerText = inputFeild.value ;
    paragraph.classList.add('paragraph-styling');
    addToDoContainer.appendChild(paragraph);
    inputFeild.value =""
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line=through';
    })

    paragraph.addEventListener('dblclick',function(){
        addToDoContainer.removeChild(paragraph);
    })

})