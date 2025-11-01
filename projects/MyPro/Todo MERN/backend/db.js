//thisis the file for mongo db
const mongoose = require('mongoose');
const { string, boolean } = require('zod');

mongoose.connect("mongodb+srv://admin:ECIBC0gwp4pLvE0M@cluster0.xyrqpuu.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}