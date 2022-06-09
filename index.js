#! /usr/bin/env node

const { program } = require('commander')
const list = require('./commands/list')
const add = require('./commands/add')
const del = require('./commands/del')

program
  .command('list')
  .description('List all the TODO tasks')
  .action(list)

program
  .command('add <task>')
  .description('Add a new task to do')
  .action(add)

program
  .command('del <tasks>')
  .description('Delete chosen task')
  .action(del)

program.parse();