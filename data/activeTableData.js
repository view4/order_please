var activeTable = {};

function changeActiveTableValue(value) {
	activeTable = value;
	/*activeTable.members = [];
	for (person in value ){
		
		
	}*/
}

function getAllTableMembers() {
	var tableMembers = Object.values(activeTable);
	var allNames = [];
	for (var i = 0; i< tableMembers.length; i++) {
		allNames.push(tableMembers[i].name);
	};
	return allNames;
}
var activeTableNumber = 0;

function setActiveTableNumber(num) {
	activeTableNumber = num;
}
export {activeTable, changeActiveTableValue, getAllTableMembers, activeTableNumber, setActiveTableNumber};
