const fs = require('fs');
const filePath = "./todo.json";

const command = process.argv[2]; // access the command from the command line arguments like add 
const argument = process.argv[3];
if(command === "add"){
    addTask(argument);
}else if(command === "list"){
    listTasks()
}else if(command === "delete"){
    deleteTask(parseInt(argument));
}else{
    console.log("Unknown command. Please use 'add', 'list', or 'delete'.");
}
