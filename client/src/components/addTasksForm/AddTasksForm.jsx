"use client"
import { useState } from "react";
import styles from "./AddTasksForm.module.css";
import { createTarea } from "@/app/api/route";

const AddTasksForm = ({ submitUpdatedTasks, currentTasks }) => {
	const [newHomework, setNewHomework] = useState("");

	const handleTaskEntry = ({ target }) => {
		setNewHomework(target.value);
	};

	const addTask = () => {
		return [...currentTasks, { task: newHomework, completed: false }];
	};

	const createTask = async (data) => {
		try {
            const data = { task: newHomework, completed: false }
			await createTarea(data);
			setNewHomework("");
		} catch (error) {
			console.error(error);
		}
	};

	const handlerOnSubmit = (e) => {
		e.preventDefault();
		if (newHomework) {
			const updatedTasks = addTask();

			createTask();
            
			submitUpdatedTasks(updatedTasks);
		}
	};

	return (
		<form onSubmit={handlerOnSubmit} className={styles.form}>
			<input type="text" value={newHomework} onChange={handleTaskEntry} />
			<input type="submit" value="Add" />
		</form>
	);
};

export default AddTasksForm;
