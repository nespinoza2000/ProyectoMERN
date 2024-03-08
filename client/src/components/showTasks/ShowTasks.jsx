"use client"

import React from "react";
import styles from "./showTasks.module.css";
import generateKey from "@/util/generateKey";
import { deleteTarea } from "@/app/api/route";

const ShowTasks = ({ taskList, updateTasks }) => {
	const handlerOnChange = (checked, index) => {
		const updatedListTasks = taskList.map((task, idx) =>
			idx === index ? { ...task, completed: checked } : task
		);

		updateTasks(updatedListTasks);
	};

	const deleteTask = async (index, id) => {
		try {
			await deleteTarea(id);
			const updatedListTasks = taskList.filter((_, idx) => idx !== index);
			updateTasks(updatedListTasks);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={styles.task_container}>
			{taskList.map((item, index) => {
				const key = generateKey(`${item.task}_${index}`);

				return (
					<div key={key}>
						<label
							style={{
								textDecoration: item.completed ? "line-through" : "none",
								color: item.completed ? "red" : "none",
							}}
						>
							<input
								type="checkbox"
								checked={item.completed}
								onChange={(e) => handlerOnChange(e.target.checked, index)}
							/>
							{item.task}
						</label>
						<button type="button" onClick={() => deleteTask(index, item._id)}>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default ShowTasks;
