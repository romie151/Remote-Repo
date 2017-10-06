var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function (input) {
    var inputArr = input.split(" ")
    var emptyArr = []
    var completed = false
    
    for(var i = 1; i < inputArr.length; i++) {
        if (inputArr[0].toLowerCase() === "add") {
           emptyArr.push(inputArr[i])
        } else if (inputArr[0].toLowerCase() !== "add") {
            console.log('"Add" needs to be your first word before your task.')
        }
    }

    var newString = emptyArr.join(" ")
    console.log("Your task is: ")
    console.log(createTask(newString, completed))
})

console.log("Add your task.")

function createTask(title, completed) {
    var task = {
        title: title,
        completed: completed
    }
    return task
}

function listTask(callback) {
    for(var key in callback) {
        return  key + callback[key]
    }
}


// function forEachElem(arr, callback) {
//     for (var i = 0; i < arr.length; i++) {
//         callback(arr[i], i)
//     }
// }



// var tasks = []
// tasks.push(createTask("buy milk", false))
// tasks.push(createTask("walk dog", true))
