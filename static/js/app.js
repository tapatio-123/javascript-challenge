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

var button = d3.select("#filter-btn");
button.on("click", runState);

function runState() {
  d3.event.preventDefault();
  var inputElement = d3.select("#state");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  tbody.html("");

  var filteredData = data.filter(states => states.state === inputValue)
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
button.on("click", runCountry);

function runCountry() {
  d3.event.preventDefault();
  var inputElement = d3.select("#country");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  tbody.html("");

  var filteredData = data.filter(countries => countries.country === inputValue)
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
button.on("click", runShape);

function runShape() {
  d3.event.preventDefault();
  var inputElement = d3.select("#shape");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  tbody.html("");

  var filteredData = data.filter(shapes => shapes.shape === inputValue)
  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  console.log(filteredData);
}