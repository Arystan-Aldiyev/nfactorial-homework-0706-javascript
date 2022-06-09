const Conf = require('conf');
const conf = new Conf();

function del() {
  let todosList = conf.get('todo-list')

  if (todosList) {
    if (task) {
      console.log(todosList)
      todosList = todosList.splice(task, task + 1)
      console.log(todosList)
    }
    conf.set('todo-list', todosList)
    todosList = []

  }
  console.log("Task has been removed successfully")
}

module.exports = del









//  return !tasks.includes(index.toString());
//  })
//  }
//  conf.set(‘todo-list’, todoList);
//  }
//  }