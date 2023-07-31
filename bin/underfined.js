



let num

console.log(typeof num)
console.log(typeof typeof num)
console.log(typeof(num) == 'undefined')

//num = 100
num = typeof(num) != 'undefined' ? num : 0;
console.log(num)

function xxx(a, b) {
	console.log(`a = [${a}], b = [${b}],`)
	console.log(arguments)
}

xxx(10, 20);
xxx(10);
xxx();
xxx(10, 20, 30, 40);

console.log(Math.pow(10, 3))
console.log(Math.pow(10, 3, 3, 4, 5,10, 1000, "Hello"))
console.log(Math.pow(10))

function sum(a, b) {
	let sum = 0;
	for (let i=0; i<arguments.length; i++)
	   sum += arguments[i]
	   
	return sum;
}

console.log(sum())
console.log(sum(10))
console.log(sum(10, 20, 30))
console.log(sum(10, 20, 30, 50, 60, 1))

prompt("age>>")



