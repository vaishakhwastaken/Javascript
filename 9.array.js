//array - several piece of data in one place

var ourArray = ["John",23]

// multi dimensional array

var mArray = [["Luke",1],["Vega",2]]

//indexing of array

console.log(ourArray)
console.log(ourArray[1])
console.log(mArray[1])

//accessing multi dimensional array
console.log(mArray[0][0])

//modify array with indexes yes you can do that 

ourArray[0] = "David"

console.log(ourArray)


//push() - to add element to next position of last element
ourArray.push(22)
mArray.push(["Pjilo",29])

console.log(ourArray)
console.log(mArray)

//pop() - to remove an element in the array and print the removed element if console.log() 

console.log(mArray.pop())
console.log(mArray)

//shift() - removes the first element and store it
console.log(mArray.shift())
console.log(mArray)

//unshift() - add elements to the beginning of an array
mArray.unshift(['davi b',21])
console.log(mArray)

