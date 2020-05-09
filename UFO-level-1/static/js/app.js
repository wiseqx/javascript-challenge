// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((aliensData) => {
    var row = tbody.append("tr");
    Object.entries(aliensData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
var form = d3.select("form");
var clear = d3.select("#clear-btn");


button.on("click", runEnter);
form.on("submit", runEnter);
clear.on("click", clearTable);

function runEnter(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(aliens => aliens.datetime === inputValue);

    //console.log(filteredData);

    tbody.html("");
    
    filteredData.forEach((alienData) => {
        var row = tbody.append("tr");
        Object.entries(alienData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function clearTable(){
    d3.event.preventDefault();

    //remove all of tr
    tbody.selectAll('tr').remove();
    tableData.forEach((aliensData) => {
        var row = tbody.append("tr");
        Object.entries(aliensData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}






