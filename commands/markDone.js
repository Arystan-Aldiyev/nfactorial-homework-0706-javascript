const Conf = require('conf');
const conf = new Conf();

function markDone({ tasks }) {
  let todosList = conf.get('todo-list')

  if (todosList) {
    todosList = todosList.map((task, index) => {
      if (tasks) {
        if (tasks.indexOf(index.toString()) != -1) {
          task.done = true
        }
      } else {
        task.done = true
      }
      return task
    })
    conf.set('todo-list', todosList)
  }
  console.log('You are great!')
}

module.exports = markDone