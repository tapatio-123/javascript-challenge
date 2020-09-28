var tbody = d3.select("tbody");

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
button.on("click", runEnter);

function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  tbody.html("");

  var filteredData = data.filter(dates => dates.datetime === inputValue)
  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  console.log(filteredData);
}

var button = d3.select("#filter-btn");
button.on("click", runCity);

function runCity() {
  d3.event.preventDefault();
  var inputElement = d3.select("#city");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  tbody.html("");

  var filteredData = data.filter(cities => cities.city === inputValue)
  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  console.log(filteredData);
}