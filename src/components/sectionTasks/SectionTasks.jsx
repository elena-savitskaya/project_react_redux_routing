import React from "react";
import { ButtonDone } from "./ButtonDone";
import { useState } from 'react';
import "./_sectionTasks.scss"

function SectionTasks() {

    const [Tasks, setTasks] = useState([
        {
            'id': 1,
            'name': 'Send Bid',
            'done': 'Mark as Done',
            'delete': 'Delete task',
            'days': '0',
        },
        {
            'id': 2,
            'name': 'Make Offer',
            'done': 'Mark as Done',
            'delete': 'Delete task',
            'days': '1',
        },
        {
            'id': 3,
            'name': 'Estimate project',
            'done': 'Mark as Done',
            'delete': 'Delete task',
            'days': '2',
        },
    ]);

    const deleteTasks = (tasks) => {
        setTasks(Tasks.filter(task => task !== tasks));
    };

    return (
        <section className="section-tasks">
            <div className="container">
                <h1 className="title">Tasks</h1>
                <div className="scroll-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="subtitle">Task Name</th>
                                <th className="subtitle">Action</th>
                                <th className="subtitle">Action</th>
                                <th className="subtitle">Hold Days</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Tasks.map((task) =>
                                <tr key={task.id}>
                                    <td className="text">{task.name}</td>
                                    <td className="text"><ButtonDone>{task.done}</ButtonDone></td>
                                    <td className="text"><button className='delete' onClick={() => { deleteTasks(task) }}>Delete task</button></td>
                                    <td 
                                        className={
                                            task.days > 1
                                            ? "two text"
                                            : "one text" && task.days < 1
                                            ? "zero text"
                                            : "one text"
                                        }
                                    >{task.days}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}


export { SectionTasks };