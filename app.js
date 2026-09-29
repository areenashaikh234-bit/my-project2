const tasks = [];

function addTask(title) {
  tasks.push({ id: tasks.length + 1, title: title, done: false });
  console.log("Added: " + title);
}

function completeTask(id) {
  const task = tasks.find(function (t) {
    return t.id === id;
  });
  if (task) {
    task.done = true;
    console.log("Completed: " + task.title);
  } else {
    console.log("Task not found");
  }
}

function showTasks() {
  console.log("\n--- Task List ---");
  tasks.forEach(function (t) {
    const status = t.done ? "[x]" : "[ ]";
    console.log(status + " " + t.id + ". " + t.title);
  });
  console.log("-----------------\n");
}

addTask("Install Git");
addTask("Create local repository");
addTask("Push code to GitHub");

completeTask(1);
completeTask(2);

showTasks();