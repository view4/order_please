var tables = {
	1: {
		'Doug':{
			name: 'Doug',
			total: 0,
		},
		'Sarah':{
			name: 'Sarah',			
			total: 0,

		},
		'Shammai':{
			name: 'Shammai',
			total: 0,

		},
		'Tanya':{
			total: 0,
			name: 'Tanya'
		},
		'Samantha':{
			total: 0,
			name: 'Samantha'
		},
	},
	2: {
		'James':{
			name: 'James',
			total: 0,

		},
		'Lizzie':{
			name: 'Lizzie',
			total: 0,
		},
		'Sam':{
			name: 'Sam',
			total: 0,

		},
		'Joe':{
			name: 'Joe',
			total: 0,
		},
	},
	3: {
		'Jackie':{
			name: 'Jackie',
			total: 0,
		},
		'Sam':{
			name: 'Sam',
			total: 0,
		},
	},
	4: {
		'Louis':{
			name: 'Louis',
			total: 0,
		},
		'James':{
			name: 'James',
			total: 0,
		},
		'Dan':{
			name: 'Dan',
			total: 0,
		},
		'Paul':{
			name: 'Paul',
			total: 0,
		},
	},
	5: {
		'Lynn':{
			name: 'Lynn',
			total: 0,
		},
		'Polly':{
			name: 'Polly',
			total: 0,
		},
		'John':{
			name: 'John',
			total: 0,
		},
	},
	6: {
		'Damian':{
			name: 'Damian',
			total: 0,
		},
		'Clark':{
			name: 'Clark',
			total: 0,
		},
		'Louise':{
			name: 'Louise',
			total: 0,
		},
		'Zoe':{
			name: 'Zoe',
			total: 0,
		},
	},
	7: {
		'Doug':{
			name: 'Doug',
			total: 0,
		},
		'Sarah':{
			name: 'Sarah',
			total: 0,
		},
		'Shammai':{
			name: 'Shammai',
			total: 0,
		},
		'Tanya':{
			name: 'Tanya',
			total: 0,
		},
		'Samantha':{
			name: 'Samatha',
			total: 0,
		},
	},
	8: {
		'Phil':{
			name: 'Phil',
			total: 0,
		},
		'Victoria':{
			name: 'Victoria',
			total: 0,
		},
	},
	9: {
		'Mel':{
			name: 'Mel',
			total: 0,
		},
		'Bronwyn':{
			name: 'Bronwyn',
			total: 0,
		},
		'Yaakov':{
			name: 'Yaakov',
			total: 0,
		},
		'Tal':{
			name: 'Tal',
			total: 0,
		},
	},
	10: {
		'Maggie':{
			name: 'Maggie',
			total: 0,
		},
		'Matt':{
			name: 'Matt',
			total: 0,
		},
		'Jen':{
			name: 'Jen',
			total: 0,
		},
		'Brad':{
			name: 'Brad',
			total: 0,
		},
	},
	11: {
		'Bob':{
			name: 'Bob',
			total: 0,

		},
		'Patrick':{
			name: 'Patrick',
			total: 0,
		},
		'Susie':{
			name: 'Susie',
			total: 0,
		},

	},
	12: {
		'Helen':{
			name: 'Helen',
			total: 0,
		},
		'Fran':{
			name: 'Fran',
			total: 0,

		},
		'James':{
			name: 'James',
			total: 0,

		},
		'Maayan':{
			name: 'Maayan',
			total: 0,
		},
	},
};

function updateTableMember(tableNumber, tableMemberData){
	tables[tableNumber][tableMemberData.name] = tableMemberData;
}

export {tables, updateTableMember};
