// Verify that app.js is loaded by index.html
console.log("JavaScript app file is loaded.");

// START OF CODE GIVEN IN CLASS

// Create function
function initialDashboard() {

    // Populate dropdown menu
    var selector = d3.select("#selDataset");

    // Use the D3 library to read in samples.json
    d3.json("samples.json").then(function(data) {

        // Verify data has been read in
        console.log(data);

    });

    // Update bar chart plot with selected info from dropdown
    // Update bubble chart plot with selected info from dropdown
    // Update demographic info panel with selected info from dropdown

}

// Call function
initialDashboard();

// Verify function has been called
console.log("initialDashboard() has been called.")

