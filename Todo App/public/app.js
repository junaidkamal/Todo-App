function addItem()
{
    var input = document.getElementById("inputField");
    
    var liElement = document.createElement("li");
    var liText = document.createTextNode(input.value);
    liElement.appendChild(liText);


    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    delBtn.setAttribute("onclick","delItem(this)");
    liElement.appendChild(delBtn);


    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editItem(this)");
    liElement.appendChild(editBtn);



    var list = document.getElementById("list");
    list.appendChild(liElement);
    console.log(liElement)
    input.value="";

}

function deletAll(){
    var list = document.getElementById("list");
    list.innerHTML="";
}

function delItem(d) {
    console.log(d.parentNode.remove());
}

function editItem(e){
    var input=prompt("Enter your's Updated value");
    e.parentNode.firstChild.nodeValue= input;
}