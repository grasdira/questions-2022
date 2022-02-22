// 2022/2/21

/**
 * get fibonacci number
 * @param {number} position 
 * @returns the specific position value of fibonacci number
 */
function fibonacci(position) {
	let F = []
	F[0] = 0
	F[1] = 1

	let end = position + 1
	for(let i = 2; i < end; i++){ 
		F[i] = F[i - 1] + F[i - 2]
	}

	return F[position]
}

console.log(fibonacci(0), fibonacci(1), fibonacci(2), fibonacci(3), fibonacci(4)) // 0 1 1 2 3
console.log(fibonacci(6), fibonacci(7), fibonacci(8), fibonacci(9), fibonacci(10)) // 8 13 21 34 55