
var activeTableMember = {};

function setActiveTableMember(member) {
	activeTableMember = member;
};

function addDishToTableMember (dish) {
	activeTableMember.orderedDishes = activeTableMember.orderedDishes || [];
	activeTableMember.orderedDishes.push(dish);
	activeTableMember.total += dish.price;
};


export {activeTableMember, setActiveTableMember, addDishToTableMember}
