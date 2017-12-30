const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result)
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '5a47d3fc04a3a7b9c9b34dc1'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5a47d3fc04a3a7b9c9b34dc1').then((todo) => {
  console.log(todo);
});