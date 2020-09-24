// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// console.log(data);
// YOUR CODE HERE!
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
function handleClick() {
    console.log("A button was clicked!");
console.log(d3.event.target);
}
button.on("click", handleClick);

d3.event.preventDefault();

var inputElement = d3.select("#datetime");

var inputValue = inputElement.property("value");

console.log(inputValue);
console.log(tableData);

var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)

console.log(filteredData);