"use client"
import React, { useState, useEffect } from "react";
import AddTasksForm from "@/components/addTasksForm/AddTasksForm";
import ShowTasks from "@/components/showTasks/ShowTasks";
import { getAllTareas } from "@/app/api/route";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getTasks = async () => {
        try {
            const data = await getAllTareas();
            setTasks(data);
            setLoaded(true);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    const updateTasks = (updatedTasks) => {
		
        setTasks(updatedTasks);
    };

    return (
        loaded && (
            <>
                <AddTasksForm
                    submitUpdatedTasks={updateTasks}
                    currentTasks={tasks}
                />
                <ShowTasks taskList={tasks} updateTasks={updateTasks} />
            </>
        )
    );
};

export default App;


/* "use client";
import { useState, useEffect } from "react";
import AddTasksForm from "@/components/addTasksForm/AddTasksForm";
import ShowTasks from "@/components/showTasks/ShowTasks";
import { getAllTareas } from "@/app/api/route";

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(async () => {
		try {
			const dataTasks = await getAllTareas();
			setTasks(dataTasks);
			setLoaded(true);
		} catch (error) {
			console.error(error);
		}
	}, []);

	const updateTasks = (updatedTasks) => {
		setTasks(updatedTasks);
	};

	return (
		loaded && (
			<>
				<AddTasksForm
					submitUpdatedTasks={updateTasks}
					currentTasks={tasks}
				/>
				<ShowTasks taskList={tasks} updateTasks={updateTasks} />
			</>
		)
	);
}; */
