// 2022/2/22

class Node { // a node
	constructor(data) {
		this.data = data
		this.next = null
	}
}

// linked list stack
class Stack {
	constructor(head = null) {
		this.head = head
	}

	size() {
		let length = 0
		let node = this.head
		while(node){
			length ++
			node = node.next
		}
		return length
	}

	getLast() {
		let lastNode = this.head;
		if (lastNode) {
			while (lastNode.next) {
				lastNode = lastNode.next
			}
		}
		return lastNode
	}
  
	push(item) {
		let newNode = new Node(item)

		if(this.head === null) {
			this.head = newNode
		}else{
			let lastNode = this.getLast()
			lastNode.next = newNode
		}
	}

	pop() { //刪除串列中最後一筆 & return被刪掉的data
		let currentNode = this.head
		let size = this.size()
		let index = 0
		let previousNode

		if(currentNode && size > 0){
			while(size - 1 !== index){
				index ++
				previousNode = currentNode
				currentNode = currentNode.next
			}
			if(previousNode) previousNode.next = null
			else this.head = null //若已為第一筆，則無previousNode

			return currentNode ? currentNode.data : currentNode

		}else{ // 空list回傳undefined
			return undefined 
		}
	}
}

// result should be...
const myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)

console.log(myStack.pop()) // 3
console.log(myStack.size()) // 2