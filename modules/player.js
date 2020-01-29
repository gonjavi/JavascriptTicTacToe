const Player = (name) => {
	const pname  = name;
	const sayName = () => console.log(`my name is ${name}`)
	return{ pname, sayName}
}

export { Player };