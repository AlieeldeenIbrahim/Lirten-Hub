const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Creating the Schema 
const taskSchema = new Schema({
  //admin id that approved the task
  approved_by: {
    type: String,
  },
  //task description
  description: {
    type: String,
    required: true
  },
  //date the task was posted
  posted_on: {
    type: Date,
    default: Date.now,
    required: true
  },
  //id of partner that submitted the task
  posted_by: {
    type: String,
    required: true
  },
  //current status of task 
  status: {
    type: String,
    require: true
  },
  //estimated effort in time to complete the task
  estimated_effort: {
    type: String,
  },
  //actual time taken by the user to finish the task
  time_taken: {
    type: String,
  },
  //level of commitment this taks requires
  level_of_commitment: {
    type: String,
  },
  //experience level required by the task
  experience_level: {
    type: String,
  },
  //monetary compensation required by the task
  monetary_compensation: {
    type: Number,
  },
  //product owner
  Owner: {
    type: String,
  },
  //consultancy assigned to this task
  assigned_Consultancy: {
    type: String,
  },
  //is task reviewed
  reviewed: {
    type: Boolean,
  },
  //the set of skills needed as prerequistes to partake this task
  required_set_of_skills: {
    type: [String],
  },
  //list of objectives required to be finished
  task_list: {
    type: [String],
  },
  //list of users applied to task
  applicant_list: {
    type: [String]
  },
  //the one user assigned to the task
  assigned_user: {
    type: String
  }
});

module.exports = Task = mongoose.model('tasks', taskSchema)