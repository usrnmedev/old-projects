/////////////////////////// forEach /////////////////////////
let students = ['Bob', 'Amy', 'Rocky', 'Chao', 'Jax', 'Jane', 'Chris']
students.unshift('Mario')
students.pop()
students.forEach(x => document.getElementById('show').innerHTML +=  `<h1> Hello ${x} </h1>` )

// let numbers = [100, 200, 45, 6, -100, 220]
// numbers.forEach( x => console.log(x))

// method 1 
// numbers.forEach(x => sum = sum + x)

// method 2
// for (let i=0; i<numbers.length; i++) {
//   sum = sum + numbers[i]
// }
// console.log(sum)

/////////////////////////// map /////////////////////////
// let numbers = [100, 200, 45, 6, -100, 220]
// numbers = numbers.map(x => x * 3)
// console.log(numbers)

/////////////////////////// filter /////////////////////////
// let numbers = [100, 200, 45, 6, -100, 220]
// numbers = numbers.filter(x => x > 50)
// console.log(numbers)
// exercise: filter people whos age is between 18 and 60 

//////////////////////////////////////////
//Basic Operations for the array
// Add an element at the end:
// students.push('Chris')

// Add an element at the front
// students.unshift('Qi')

// Remove an element at the end
// students.pop()

// Remove an elemnent at the front
// students.shift()
////////////////////////////////////////////



