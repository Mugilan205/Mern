var listOfDate = []; // Creating an array to store the list
var input = document.getElementById("input"); // DOM reference to the input field
var todo = document.getElementById("todo"); // DOM reference to the 'ul' element

// Attach click event to the button
document.getElementById("button").onclick = click;

// Function to handle button click
function click() {
    if (input.value.trim() !== "") { 
        listOfDate.push(input.value);
        console.log(listOfDate); 
        input.value = ""; 
        showList(); 
    }
}


function showList() {
    todo.innerHTML = ""; 
    listOfDate.forEach(function (n, i) {
      
        var listItem = `<li>${n} 
                            <a href="#" onclick="edit(${i})">Edit</a> | 
                            <a href="#" onclick="deleteItem(${i})">Delete</a>
                        </li>`;
        todo.innerHTML += listItem; 
    });
}


function edit(i) {
    var newVal = prompt("Please insert new value", listOfDate[i]);
    if (newVal !== null && newVal.trim() !== "") { 
        listOfDate[i] = newVal; 
        showList(); 
}


function deleteItem(i) {
    listOfDate.splice(i, 1); 
    showList(); 
}}