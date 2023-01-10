import React from "react";
import "./_sectionDiscovery.scss"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { ScriptItem } from "../sectionCreateScript/ScriptItem";

const SectionDiscovery = () => {
  const lists = [
    {
      id: 1,
      name: 'Upwork',
      upwork: 'Upwork script 1',
      link: 'Upwork script 2. Link to filtered jobs',
      check: 'Upwork script 3. Check similar jobs'
    },
    {
      id: 2,
      name: 'Telegram',
      upwork: 'Upwork script 1',
      link: 'Upwork script 2. Link to filtered jobs',
      check: 'Upwork script 3. Check similar jobs'
    },
    {
      id: 3,
      name: 'Linkedin',
      upwork: 'Upwork script 1',
      link: 'Upwork script 2. Link to filtered jobs',
      check: 'Upwork script 3. Check similar jobs'
    }
  ]

  const scripts = useSelector(state => state.scripts.scripts);

  return (
    <section className="section-discovery">
      <div className="container">
        <div className="section-discovery__title">
          <h1 className="title">Discovery</h1>
          <div className="title-image">
            <Link to="/project_react_redux_routing/CreateScript"><img src="./img/plus.png" alt="table-lead_img" /></Link>
          </div>
        </div>
        <div className="section-discovery__list">
          {lists.map((list) => (
            <ul className="list-items" key={list.id} >
              <li className="subtitle">{list.name}</li>
              <li className="text">{list.upwork}</li>
              <li className="text">{list.link}</li>
              <li className="text">{list.check}</li>
            </ul>))}
          <ul className="list-items">
            {scripts.map((script) => (
              <ScriptItem
                key={script.id}
                {...script}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export { SectionDiscovery };