const movieNames = [];
let i = 0;

//document.getElementById("btn").addEventListener("click", addMovies());
//document.getElementById("btn").addEventListener("click", displayMovies());

function addMovies() {
     let inputField = document.getElementById("data");
     let value = inputField.value;

     if (value === "") {
        alert("Please enter a value before adding.");
        return;
    }

    movieNames.push(value);
    inputField.value = "";
}

function displayMovies() {
  let k = `<ul> Movies are:`;
  
  for(let j=0;j<movieNames.length;j++)
    k += `<li>` + movieNames[j] + `</li>` ;
  document.getElementById("display").innerHTML = k + `</ul>`;
  
  

}

/* 
Here’s a complete, runnable example showing how to take values from HTML input fields, store them in a JavaScript array, and print them.
This example handles multiple inputs, validates them, and prints the array to both the console and the page.

HTML + JavaScript
Html<!DOCTYPE html>
<html>
<head>
    <title>Input to Array Example</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        input { margin: 5px; }
        #output { margin-top: 15px; font-weight: bold; }
    </style>
</head>
<body>

<h3>Enter values and add to array</h3>

<!-- Input field -->
<input type="text" id="valueInput" placeholder="Enter a value">
<button onclick="addValue()">Add</button>
<button onclick="printArray()">Print Array</button>

<!-- Output display -->
<div id="output"></div>

<script>
    // Array to store input values
    let valuesArray = [];

    // Function to add value to array
    function addValue() {
        const inputField = document.getElementById("valueInput");
        const value = inputField.value.trim();

        // Validate input
        if (value === "") {
            alert("Please enter a value before adding.");
            return;
        }

        // Add to array
        valuesArray.push(value);

        // Clear input field
        inputField.value = "";
        inputField.focus();
    }

    // Function to print array
    function printArray() {
        if (valuesArray.length === 0) {
            document.getElementById("output").innerText = "Array is empty.";
            return;
        }

        // Print to console
        console.log("Array values:", valuesArray);

        // Print to page
        document.getElementById("output").innerText = "Array: " + valuesArray.join(", ");
    }
</script>

</body>
</html>

*/