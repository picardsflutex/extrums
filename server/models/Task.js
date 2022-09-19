const {Schema, model} = require("mongoose")
const mongoose = require("mongoose")

const taskSchema = new Schema({
  number: {type: Number, required:true},
  name: {type: String, required:true},
  theme: {type: String, required:true},
  description: {type: String, required:true},
  term: {type: String, required:true},
  condition: {type: String, required:true}
})

const task = mongoose.model('task', taskSchema);

module.exports.task = task;