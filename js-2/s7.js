console.log("sum: ");
function sum (arr) {
    let suma=0;
    for (let i=0;i<arr.length;i++) {
        suma+=arr[i];
    }
    return suma;
}
console.log(sum([1, 2, 3]));// 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0

// escribe la función max acá
console.log("max: ");
function max (arr) {
    let val=0;
    let len=arr.length;
    if (len===0) {
        return undefined;
    }
    if (len===1) {
        val=arr[0];
        return val;
    }        
    else {
        for (let i=0;i<len;i++) {
            if (arr[i]>val) { //2>3
                val=arr[i]; //val=3
            }
        }
        return val;
    }
    
}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([4])) // undefined

// escribe la función maxIndex acá
console.log("ind: ");
function maxIndex(arr) {
    let ind=0;
    val=0;
    let len=arr.length;
    if (len===0) {
        return -1;
    }
    if (len===1) {
        return 0;
    }        
    else {
        for (let i=0;i<len;i++) {
            if (arr[i]>val) {
                val=arr[i];
                ind=i;
            }
        }
        return ind;
    }
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1


//join 

console.log("join: ");
function joinf(arr) {
    valor="";
    for (let i=0;i<arr.length;i++) {
        valor=valor+String(arr[i])+" ";//(1 3 2 )
    }
    return val;
}
console.log(joinf([1, 3, 2])); // 1
console.log(joinf(["", "ha", 8, "h", 6, 5, 4])); // 0
console.log(joinf([])); // -1