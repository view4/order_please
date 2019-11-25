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
	console.log(allNames)
	return allNames;

}
export {activeTable, changeActiveTableValue, getAllTableMembers};
