const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({

    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    
    id_user: {
        type: String,
        required: true,
    }
}, { timestamps: true, versionKey: false });

const Task = new mongoose.model("Task", TaskSchema);

module.exports = Task;