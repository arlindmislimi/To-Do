var addButon = document.getElementById("add");
var inputField = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return inputField.value.length;
} 

function createListElement(){
    var li = document.createElement("li"); //krijon nje element "li"
    li.appendChild(document.createTextNode(inputField.value)); //tekstin e shkruar e shtojm ne "li"
    ul.appendChild(li); // shton "li" ne "ul"
    inputField.value = "";//reset tekstin ne input


    var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("X"));
	li.appendChild(deleteButton);
	deleteButton.addEventListener("click", deleteListItem);

    function deleteListItem(){
		li.classList.add("delete")
	}

    
}

function addListAfterClick(){
    if(inputLength() > 0 ){ // mundeson qe input field nese eshte empty te mos krijoj li
        createListElement();
    }
}

addButon.addEventListener("click",addListAfterClick);