// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");


// YOUR CODE HERE!
// Display the dataset as default

tableData.forEach(function(ufosighting){
	console.log(ufosighting);
	var row = tbody.append("tr");

	Object.entries(ufosighting).forEach(function([key, value]){
		console.log(key, value);
		var cell = row.append("td");
		cell.text(value);
	});
});

// Select the Submit button
var Submit = d3.select("#filter-btn");

Submit.on("click", function(event){
	d3.event.preventDefault();
	tbody.html("");

var inputElement = d3.select("#datetime")
var inputValue = inputElement.property("value");
console.log(inputValue);

var filteredData = tableData.filter(tableData => tableData.datetime == inputValue);
filteredData.forEach(function(dateData){
	var row=tbody.append("tr");
	Object.entries(dateData).forEach(function([key,value]){
	var cell=tbody.append("td");
	cell.text(value);
});

	});

});
	
