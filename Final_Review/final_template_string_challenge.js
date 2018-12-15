// REFACTOR
// Make More OOPy


// function widget(options) {
// 	return 'Name:'+options.name+' Age:'+options.age+' id:'+options.id
// }


function widget(options) {
  const {name, age, id } = options;
	return `Name: ${name} Age: ${age} id: ${id}`;
}



console.log(widget({ name: 'Wegman', age: 33, id: 9348576 }))
