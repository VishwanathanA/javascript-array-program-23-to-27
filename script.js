// 1.implement queue with array 
const queue = [];
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
console.log("queue : "+queue)
const dequeuedItem = queue.shift(); 
console.log("dequeued item : "+dequeuedItem)
console.log(queue);

// 2.implement stack with array
const stack = [];
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
console.log("stack : "+stack)
const poppedItem = stack.pop();
console.log("popped item : "+poppedItem)
console.log(stack);

//3.array of object sorting with multiple properties
const arr = [
    { name: 'ajay', age: 20},
    { name: 'tom', age: 30},
    { name: 'sam', age: 18},
    { name: 'ram', age: 30 }
];
console.log("array of object : ",arr);
arr.sort((a, b) => {
    if (a.age < b.age)
        return -1;
    if (a.age > b.age)
        return 1;
});
console.log("array of object sorted by age : ",arr);
//4.creating array of arrays
const arrayOfArrays = [];
arrayOfArrays.push([1, 2, 3]);
arrayOfArrays.push([4, 5, 6]);
arrayOfArrays.push([7, 8, 9]);
console.log("array of arrays : "+arrayOfArrays);

//5.comparing two array of equality
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 4];
console.log("arr1 : "+arr1);
console.log("arr2 : "+arr2);
console.log("arr3 : "+arr3);
function check(a1,a2){
    c=0;
    if(a1.length!==a2.length){
        return false
    }
    for(let i=0;i<a1.length;i++){
        if(a1[i]==a2[i]){
            c++;
        }
    }
    if(c==a1.length)
        return true;
    else
        return false;
}
console.log("arr1 == arr2 : "+check(arr1,arr2));
console.log("arr1 == arr3 : "+check(arr1,arr3));
