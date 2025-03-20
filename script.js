function createTable() {
    // Get the number of rows from user
    let rn = prompt("Input number of rows");
    
    // Check if input is valid (numeric and positive)
    if (!isValidInput(rn)) {
        return;
    }
    
    // Get the number of columns from user
    let cn = prompt("Input number of columns");
    
    // Check if input is valid (numeric and positive)
    if (!isValidInput(cn)) {
        return;
    }
    
    // Convert inputs to integers
    rn = parseInt(rn);
    cn = parseInt(cn);
    
    // Get the table element
    let table = document.getElementById("myTable");
    
    // Clear existing table content
    table.innerHTML = "";
    
    // Create table rows and cells
    for (let i = 0; i < rn; i++) {
        // Create a new row
        let row = table.insertRow();
        
        // Create cells for each column
        for (let j = 0; j < cn; j++) {
            // Create a new cell
            let cell = row.insertCell();
            
            // Set cell content to "Row-i Column-j"
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}

// Helper function to validate user input
function isValidInput(input) {
    // Check if input is not a number
    if (isNaN(input) || input === "") {
        return false;
    }
    
    // Convert to number and check if it's less than or equal to 0
    let num = parseInt(input);
    if (num <= 0) {
        alert("Please enter a positive number");
        return false;
    }
    
    return true;
}