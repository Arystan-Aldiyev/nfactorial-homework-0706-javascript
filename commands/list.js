const Conf = require('conf');
const conf = new Conf();


function list() {
  const todoList = conf.get('todo-list')
  if (todoList && todoList.length) {
    //user has tasks in todoList
    console.log("Green --> Done \n Yellow --> not done yet")
    // Work on colors
    todoList.forEach((task, index) => {
      if (task.done) {
        console.log(`${index}. ${task.text}`)
      }
      else {
        console.log(`${index}. ${task.text}`)
      }
    })
  } else {
    //user does not have tasks in todoList
    console.log("You don\'t have any tasks yet. Go on and add them :)")
  }
}

module.exports = list