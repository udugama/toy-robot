import { place , move, report, left, right } from './lib/functions.js' // eslint-disable-line

console.log('A) ================')
console.log('Simulate Scenario A)')
place(0, 0, 'NORTH')
console.log(`PLACE 0, 0, NORTH`)
move()
console.log(`MOVE`)
const reportTest = report()
console.log(`${reportTest}`)

console.log('B) ================')
console.log('Simulate Scenario B)')
console.log(`PLACE 0, 0, NORTH`)
place(0, 0, 'NORTH')
console.log(`LEFT`)
left()
console.log('REPORT')
const reportTestB = report()
console.log(`${reportTestB}`)

console.log('c) ================')
console.log('Simulate Scenario C)')
console.log(`PLACE 1, 2, EAST`)
place(1, 2, 'EAST')
move()
console.log(`MOVE`)
move()
console.log(`MOVE`)
console.log(`LEFT`)
left()
console.log(`MOVE`)
move()
console.log('REPORT')
const reportTestC = report()
console.log(`${reportTestC}`)

console.log('d) ================')
console.log('Simulate Scenario D invalid boundary)')
console.log(`PLACE 3, 3, WEST`)
place(3, 3, 'WEST')
console.log(`RIGHT`)
right()
console.log(`RIGHT`)
right()
console.log(`MOVE`)
move()
console.log(`MOVE`)
move()
console.log('REPORT')
const reportTestD = report()
console.log(`${reportTestD}`)