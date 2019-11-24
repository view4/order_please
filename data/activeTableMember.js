var activeTableMember = {};

function setActiveTableMember(member) {
	activeTableMember = member;
};

function addDishToTableMember (dish) {
	activeTableMember.orderedDishes = activeTableMember.orderedDishes || [];
	activeTableMember.orderedDishes.push(dish);
	//Perhaps do something to have a total for the person, but for now, this is not a major thing. 
};

export {activeTableMember, setActiveTableMember, addDishToTableMember}
