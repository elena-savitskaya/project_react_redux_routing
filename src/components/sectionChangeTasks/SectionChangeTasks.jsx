import React from "react";
import { Arrow } from "./Arrow";
import "./_sectionChangeTasks.scss"
import { chooseTasks } from "../../store/changeTasksSlice";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from "react-router-dom";

const SectionChangeTasks = () => {
  const tasksTitle = [
    {
      id: '',
      firstTask: 'Bid',
      secondTask: 'Invite to First Call',
      thirdTask: 'Schedule First Call',
      fourthTask: 'Make Offer',
      fifthTask: 'Close Deal',
    }
  ]
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  return (
    <section className="change-tasks">
      <div className="container">
        <h1 className="title">Change Tasks</h1>
        {tasksTitle.map((taskTitle) => (
          <form className="change-tasks_list" key={taskTitle.id} onChange={(e) => setTask(e.target.value)}>
            <input type="radio" name="field" id="mc1"
              value={taskTitle.firstTask} />
            <label for="mc1" className="first-task">
              {taskTitle.firstTask}
            </label>
            <Arrow className="list-image" />
            <input type="radio" name="field" id="mc2"
              value={taskTitle.secondTask} />
            <label for="mc2" className="second-task">
              {taskTitle.secondTask}
            </label>
            <Arrow className="list-image" />
            <input type="radio" name="field" id="mc3"
              value={taskTitle.thirdTask} />
            <label for="mc3" className="third-task">
              {taskTitle.thirdTask}
            </label>
            <Arrow className="list-image" />
            <input type="radio" name="field" id="mc4"
              value={taskTitle.fourthTask} />
            <label for="mc4" className="fourth-task">
              {taskTitle.fourthTask}
            </label>
            <Arrow className="list-image" />
            <input type="radio" name="field" id="mc5"
              value={taskTitle.fifthTask} />
            <label for="mc5" className="fifth-task">
              {taskTitle.fifthTask}
            </label>
            <button
              className="form-button"
              onClick={() => dispatch(chooseTasks({ task }))}>
              <Link to="/project_react_redux_routing/LeadTable">Submit</Link>
            </button>
          </form>
        ))}
      </div>
    </section>
  )
}

export { SectionChangeTasks };


