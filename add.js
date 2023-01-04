const tasks = []; // this is our list of tasks

// the list command simply logs the tasks to the console
const listCommand = () => {
  console.log('Tasks:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`);
  });
};

// the add command adds a task to the list
const addCommand = (task) => {
  if (task) {
    tasks.push(task);
    console.log(`Added "${task}" to the list`);
  } else {
    console.log('Error: no task provided');
  }
};

// you can test the commands like this:
listCommand();
addCommand('Learn Node.js');
addCommand('Write code');
listCommand();
addCommand();