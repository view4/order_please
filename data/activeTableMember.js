
var activeTableMember = {}; // Initialised as blank, it is set when a person is clicked on from the table page. 

function setActiveTableMember(member) { // Sets the active table member. 
	activeTableMember = member;
};

function addDishToTableMember (dish) { // Adds dish to the active table member
	activeTableMember.orderedDishes = activeTableMember.orderedDishes || [];
	activeTableMember.orderedDishes.push(dish);
	activeTableMember.total += dish.price;
};


export {activeTableMember, setActiveTableMember, addDishToTableMember}
