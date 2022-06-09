const Conf = require('conf');
const conf = new Conf();

function add(task) {
  let todosList = conf.get('todo-list')

  if (!todosList) {
    todosList = []
  }

  todosList.push({
    text: task,
    done: false
  })

  conf.set('todo-list', todosList)

  console.log('Task has been added successfully')
}

module.exports = add