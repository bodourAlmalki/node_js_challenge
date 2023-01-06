
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("----------************----------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {

  text = text.replace("\n", " ").trim().split(" ");
 // const first = text[0];
 if (text[0] === 'quit'|| text[0] === 'exit') {
  quit();
}
else if(text[0] === 'hello'){
  hello(text);
}
else if(text[0] === 'help'){
  help();
}
else if(text[0] === 'list'){
  list()
}
else if(text[0] === 'add'){
  
      text.shift();
      text.join(" ");
      add(text);
}
else if(text[0] === 'remove'){
  
  remove(text);
}
else if(text[0] === 'edit' || text[0] === 'Edit'){
  let i = text[1]
  text.shift()
  let newText = text.join(" ");
   edit(text,i, newText);
  
}



else{
  unknownCommand(text[0]);
 }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+ c.trim() +'"')
}

function hello(x){
  if(x[1]===undefined){
   console.log("hello!");}
  else {
     console.log('hello ' + x[1] + '!')}
}





// var lst=[];
var tasks=['woke up ','open laptop' ,'open VS code','work on your assignment '];


function list(){

tasks.forEach((task, index) => {
  console.log(`${index + 1}: ${task}`);
});

}

function add(task){
if (task) {
  tasks.push(task);
  console.log(`Added ${task} to the list`);
} else {
  console.error('Error! there is No task added ');
  
}
}


// function remove(index) {
//   if (index === undefined) {
//      return tasks.pop();
//     //  console.log(tasks);
//   } else if (index === tasks[1]) {
//             console.log()
//     //  console.log(tasks);
//   }else{


//   }
// }

function remove(x) {
  if (x == 'remove' ) {
     let num=tasks.pop();
     console.log(num);
    }
  else if(x[1] === "1"){
    let num1=tasks.slice(0,1);
     console.log(num1);
    }
  else if(x[1] === '2'){
    let num2=tasks.slice(1,2);
     console.log(num2);
    }
    else if(x[1] === '3'){
      let num3=tasks.slice(2,3);
       console.log(num3);
      }
  else{

      console.log(tasks);
    } 
  }



  function edit(tasks, index, newText) {
    if (index === undefined) {
      console.log("Error: No task index specified");
    } else if (index === -1) {
      tasks[tasks.length - 1] = newText;
    } else if (index < 0 || index >= tasks.length) {
      console.log("Error: Task index out of range");
    } else {
      tasks[index] = newText;
    }
  }

  // function edit(index, newText) {
  //   if (index === undefined) {
  //     console.log("Error: No task index specified");
  //   } else if (index >= tasks.length) {
  //     console.log("Error: Task index out of range");
  //   } else {
  //     tasks[index] = newText;
  //   }
  // }


  // function edit1(x,index ,newTask){
  //   if (x === 'edit') {
  //     console.log("Error: No task index specified");
  //    }else if(x === )

  // }


  /**
   * help Function => it lists all the possible commands 
   *
   * @returns {void}
   */

  function help(){
    console.log('\n-hello : hello!'+'\n-hello x : hello x! =>this command put "!"after the string containing two word'+'\n-quit or exit => it exit from the program'+'\n-help => help command ,this command lists the possible command in program'+'\n-list => it list all the task'+'\n-add => it add task to the list'+'\n-remove => remove the last element from the list '+ '\n-remove 1 => it remove the first item in the list'+'\n-remove 2 => it remove the second item in the list'+ '\n-remove 3 => it remove the third item in the list')
   
  }


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Bodour Almalki")
