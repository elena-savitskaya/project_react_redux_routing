import React from "react";
import { Link } from "react-router-dom";
import './_sectionApp.scss';

class SectionApp extends React.Component {
  render() {
    return (
      <section className="section-app">
        <div className="container">
          <h1 className="title">Apps</h1>
          <ul className="section-app__nav">
            <li className="nav-item">
              <img src="./img/star.svg" className="nav-item__image" alt="app_img" />
              <Link to="/project_react_redux_routing/LeadTable" className="subtitle nav-item__link">Lead Table</Link>
            </li>
            <li className="nav-item">
              <img src="./img/polygon2.svg" className="nav-item__image" alt="app_img" />
              <Link to="/project_react_redux_routing/Tasks" className="subtitle nav-item__link">Tasks</Link>
            </li>
            <li className="nav-item">
              <img src="./img/ellipse.svg" className="nav-item__image" alt="app_img" />
              <Link to="/project_react_redux_routing/Discovery" className="subtitle nav-item__link">Discovery</Link>
            </li>
            <li className="nav-item">
              <img src="./img/rectangle.svg" className="nav-item__image" alt="app_img" />
              <Link to="/project_react_redux_routing/Analizer" className="subtitle nav-item__link">Analizer</Link>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export { SectionApp };