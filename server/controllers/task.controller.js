const Task = require("../models/task.model");

//! Crear Tarea para cada user
module.exports.createTask = async (req, res) => {
    try {
        const userId = req.userId;

        const newTask = await Task.create({ ...req.body, id_user: userId });

        res.status(200).json(newTask);
    } catch (error) {
        res.status(500).json(error); 
    }
};

//! Obtener todas las Tareas para cada Usuario
module.exports.getTaskPerUser = async (req, res) => {
    try {
        const userId = req.userId;
    
        const tasks = await Task.find({ id_user: userId });

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json(error);
    }
};

//* Obtener una Tarea especifico por su id
module.exports.findTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findOne({ _id: id });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error)
    }
}

//* Actualizar una Tarea especifica por su id
module.exports.updateTask = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTask = await Task.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json(error);
    }
};

//* Eliminar una Tarea especifico por su id
module.exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.deleteOne({ _id: id });
        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(500).json(error);
    }
};