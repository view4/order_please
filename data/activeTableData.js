var activeTable = {};
var activeTableNumber = 0;


function changeActiveTableValue(value) {
	activeTable = value;
}

function getAllTableMembers() {
	var tableMembers = Object.values(activeTable);
	var allNames = [];
	for (var i = 0; i< tableMembers.length; i++) {
		allNames.push(tableMembers[i].name);
	};
	return allNames;
};


function setActiveTableNumber(num) {
	activeTableNumber = num;
};
export {activeTable, changeActiveTableValue, getAllTableMembers, activeTableNumber, setActiveTableNumber};
