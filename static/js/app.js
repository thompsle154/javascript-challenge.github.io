// Use the UFO dataset in the form of an array, append a table to the web page and add new rows for each UFO sighting

// Get a reference to the table body
var tbody = d3.select("tbody");

console.log(data);

// Use d3 to update each cell with report values
data.forEach(function (sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function ([key, value]) {
        console.log(key, value);

        //Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

//Use a date form in your HTML document and write JavaScript code
//to search the date/time column to find rows that match

//Assign the data from data.js to a descriptive variable
var tableData = data;

//Select the button
var button = d3.select("#filter-btn");
var resetbtn = d3.select('reset-btn');

//Select the form
var form = d3.select('form');

//Create event handlers
button.on("click", submitForm);
form.on("submit", submitForm);

//Complete the function for the form
function submitForm() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var inputElement = d3.select('#datetime');
    
    //Get the value of the input element
    var inputValue = inputElement.property('value');

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    console.log(filteredData);

    //Clear current table body
    d3.select('tbody').text('');

    //Get a reference and save to new variable
    var filterTbody = d3.select("tbody");

    //Create table pulling information matching the filter
    filteredData.forEach(function (sighting) {
    console.log(sighting);
    var row = filterTbody.append("tr");
    Object.entries(sighting).forEach(function ([key, value]) {
      console.log(key, value);

      var cell = row.append("td");
      cell.text(value);
    });
   });
resetbtn.on('click',() => {
  tbody.html('');
  tableData(data)
});
};