var activeTable = {}; // Initialised as blank, set when a table is clicked on from the table plan page.
var activeTableNumber = 0;


function changeActiveTableValue(value) {
	// Sets new active table.
	activeTable = value;
}

function getAllTableMembers() {
	// returns names of all members on the active table.
	var tableMembers = Object.values(activeTable);
	var allNames = [];
	for (var i = 0; i< tableMembers.length; i++) {
		allNames.push(tableMembers[i].name);
	};
	return allNames;
};


function setActiveTableNumber(num) { // Sets the number of the active table
	activeTableNumber = num;
};
export {activeTable, changeActiveTableValue, getAllTableMembers, activeTableNumber, setActiveTableNumber};
