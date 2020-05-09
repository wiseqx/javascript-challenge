// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//init
tableData.forEach((aliensData) => {
    var row = tbody.append("tr");
    Object.entries(aliensData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

//button
add_criteria_btn = d3.select("#add-condition-btn")
filter_btn = d3.select("#filter-btn")

var filter_condition = [];
var filter_input = [];


// add criteria
add_criteria_btn.on("click", function(){
    d3.event.preventDefault();
    //dropdown
    var dropdownMenu = d3.select("#d3-dropdown");
    var dropdownValue = dropdownMenu.property("value");

    //search bar
    var inputElement = d3.select("#input-value");
    var inputValue = inputElement.property("value");
    
    add_criteria_btn.append("br").text(dropdownValue + ": " + inputValue);
    add_criteria_btn.append("p").text(dropdownValue + ": " + inputValue);

    filter_condition.push(dropdownValue);
    filter_input.push(inputValue);

    // console.log(filter_condition);
    // console.log(filter_input);

});



// filter button
filter_btn.on("click", function(){
    var filtered_data = [];
    d3.event.preventDefault();
    //dropdown
    var dropdownMenu = d3.select("#d3-dropdown");
    var dropdownValue = dropdownMenu.property("value");

    //search bar
    var inputElement = d3.select("#input-value");
    var inputValue = inputElement.property("value");


    filter_condition.push(dropdownValue);
    filter_input.push(inputValue);

    console.log(filter_condition);
    console.log(filter_input);

    filter_array={}
    filter_condition.forEach((value, index) => filter_array[value] = filter_input[index]);
    console.log(filter_array);

    filtered_data = tableData.filter(function(item) {
        for (var key in filter_array) {
            if (item[key] === undefined || item[key] != filter_array[key])
                return false;
            }
        return true;
    });

    console.log(filtered_data);

    tbody.html("");
    
    filtered_data.forEach((alienData) => {
        var row = tbody.append("tr");
        Object.entries(alienData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    clear_form()

});

function clear_form(){
    d3.event.preventDefault();
    d3.select("#add-condition-btn").selectAll("p").remove();
    d3.select("#input-value").property("value"," ");
    filter_condition = [];
    filter_input = [];
}


