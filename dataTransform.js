// 2022/2/21

// input data
const userIds = ['U01', 'U02', 'U03']
const orderIds = ['T01', 'T02', 'T03', 'T04']
const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' }
const userOrders = [
  { userId: 'U01', orderIds: ['T01', 'T02'] },
  { userId: 'U02', orderIds: [] },
  { userId: 'U03', orderIds: ['T03'] },
]
const orderData = {
  'T01': { name: 'A', price: 499 },
  'T02': { name: 'B', price: 599 },
  'T03': { name: 'C', price: 699 },
  'T04': { name: 'D', price: 799 },
}

// 實作
function transformData(){
  let result = []
    
	userOrders.forEach(item => {

		const user = {id: item.userId, name: userData[item.userId]}

		const orders = item.orderIds.map(oId => {
			return Object.assign({id: oId}, orderData[oId])
		})

		result.push({
			user: user,
			orders: orders
		})

	})
	
	return result
}

const result = transformData()

console.log(result)