// Verify that app.js is loaded by index.html
console.log("JavaScript app file is loaded.");

// START OF CODE GIVEN IN CLASS OFFICE HOURS

// Create function to pull in data, populate dropdown menu, and call other functions based on user selection
function initialDashboard() {

    // Dropdown menu
    var selector = d3.select("#selDataset");

    // Use the D3 library to read in samples.json
    d3.json("samples.json").then(data => {

        // Verify data has been read in
        // console.log(data);

        // Declare variable to store sample IDs
        var sampleNames = data.names;

        // Populate dropdown menu with sample IDs
        sampleNames.forEach(sampleID => {
            selector.append("option")
            .text(sampleID)
            .property("value", sampleID);

        });

        // Declare variable to store data from object array
        var id = sampleNames[0];

        // Call each function onto dashboard
        drawBarGraph(id);
        drawBubbleChart(id);
        updateDemographicInfo(id);

        // Bonus
        // drawGauge(id);

    });
}

// Create stub for function to draw horizontal bar chart
function drawBarGraph(sampleID) {

    // Verify drawBarGraph function has been called
    console.log(`Draw bar graph plot(${sampleID}).`);

    // Read data to create bar graph plot
    d3.json("samples.json").then(data => {
        var samples = data.samples;
        var resultingArray = samples.filter(s => s.id == sampleID);

        // Verify resultingArray
        console.log(resultingArray);
    });
}

// Create stub for function to draw bubble chart
function drawBubbleChart(sampleID) {

    // Verify drawBubbleChart function has been called
    console.log(`Draw bubble chart plot(${sampleID}).`);
}

// Create stub for function to update demographic info panel
function updateDemographicInfo(sampleID) {

    // Verify updateDemographicInfo function has been called
    console.log(`Update demographic info panel(${sampleID}).`);
}

// Create event handler to call function on user selection
function optionChanged(newSampleID) {

    // Verify event handler
    console.log(`User selected ID (${newSampleID}).`);

    // Call functions to draw bar graph plot, bubble chart plot, and update demographic info panel
    drawBarGraph(newSampleID);
    drawBubbleChart(newSampleID);
    updateDemographicInfo(newSampleID);

    // Bonus
    // drawGauge(newSampleID);
}

// Call initialDashboard function
initialDashboard();

// Verify initialDashboard function has been called
console.log("initialDashboard() has been called.")