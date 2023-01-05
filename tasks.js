
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
     let var1=tasks.pop();
     console.log(var1);
    }
  else if(x[1] === "1"){
    let var2=tasks.slice(0,1);
     console.log(var2);
    }
  else if(x[1] === '2'){
    let var3=tasks.slice(1,2);
     console.log(var3);
    }
    else if(x[1] === '3'){
      let var3=tasks.slice(2,3);
       console.log(var3);
      }
  else{

      console.log(tasks);
    } 
  }




  /**
   * help Function => it lists all the possible commands 
   *
   * @returns {void}
   */

  function help(){
    console.log('\n-hello : hello!'+'\n-hello x : hello x! =>this command put "!"after the string containing two word'+'\n-quit or exit => it exit from the program'+'\n-help => help command ,this command lists the possible command in program\n')
   
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
