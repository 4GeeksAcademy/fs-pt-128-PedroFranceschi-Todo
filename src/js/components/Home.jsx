import React, { useState } from "react";

//create your first component
const Home = () => {
	// we define the state for a single task and a task list
	const [task, setTask] = useState("")
	const [taskList, setTaskList] = useState([])

	const handleChange = (e) => {
		if (task.trim() == "") {
			return
		}
		setTaskList([...taskList, task])
		setTask("")
	}

	const handleKey = (e) => {
		if (e.key == "Enter") {
			handleChange();
		}
	};

	const deleteTask = (indexTask) => {
		setTaskList(
			taskList.filter((task, index) => index !== indexTask)
		)
	}


	return (
		<section className="vh-100">
			<div className="container py-5">
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="New Task"
						value={task}
						name="inputTask"
						onChange={(e) => setTask(e.target.value)}
						onKeyDown={handleKey}
					/>

					<button
						className="btn btn-outline-secondary"
						type="button"
						onClick={handleChange}
					>
						Add
					</button>
				</div>

				<div className="container py-3">
					{taskList.map((task, index) => (
						<div
							key={index}
							className="container d-flex justify-content-between align-items-center mb-2"
						>
							<p className="m-0">{task}</p>
							<button 
								type="button" 
								className="btn btn-warning"
								onClick={()=> deleteTask(index)}
							>
								X
							</button>
						</div>
					))}
				</div>

			</div>
		</section>
	);
};

export default Home;