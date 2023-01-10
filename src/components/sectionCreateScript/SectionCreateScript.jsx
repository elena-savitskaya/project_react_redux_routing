import React from "react";
import "./_sectionCreateScript.scss";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { addScript } from "../../store/scriptSlice";

const SectionCreateScript = () => {
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [link, setLink] = useState("");

  const dispatch = useDispatch();

  return (
    <section className="create-script">
      <div className="container">
        <h1 className="title">Create Script</h1>
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
            Link
            <input type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)} />
          </label>
          <button
            className="form-button"
            onClick={() => dispatch(addScript({
              name,
              source,
              link
            }))}>
            <Link to="/project_react_redux_routing/discovery">Submit</Link></button>
        </form>
      </div>
    </section>
  )
}

export { SectionCreateScript };
