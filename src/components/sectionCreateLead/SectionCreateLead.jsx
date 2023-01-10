import React from "react";
import "./_sectionCreateLead.scss"
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { addLead } from "../../store/leadSlice";

const SectionCreateLead = () => {
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [budget, setBudget] = useState("");
  const [nextTask, setNextTask] = useState("");
  const [contacts, setContacts] = useState("");

  const dispatch = useDispatch();

  return (
    <section className="create-lead">
      <div className="container">
        <h1 className="title">Create lead</h1>
        <form>
          <label className="subtitle">
            Name
            <input type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </label>
          <label className="subtitle">
            Source
            <input type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)} />
          </label>
          <label className="subtitle">
            Budget
            <input type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)} />
          </label>
          <label className="subtitle">
            Next Task
            <input type="text"
              value={nextTask}
              onChange={(e) => setNextTask(e.target.value)} />
          </label>
          <label className="subtitle">
            Contact
            <input type="text"
              value={contacts}
              onChange={(e) => setContacts(e.target.value)} />
          </label>
          <button
            className="form-button"
            onClick={() => dispatch(addLead({
              name,
              source,
              budget,
              nextTask,
              contacts
            }))}>
            <Link to="/project_react_redux_routing/LeadTable">Submit</Link></button>
        </form>
      </div>
    </section>
  )
}

export { SectionCreateLead };


