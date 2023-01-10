import React from "react";
import { HeaderBig } from "../components/header/HeaderBig";
import { SectionDiscovery } from "../components/sectionDiscovery/SectionDiscovery";
class Discovery extends React.Component {
  render() {
    return (
      <>
        <HeaderBig src="./img/ellipse.svg" to="/project_react_redux_routing/AppsPage" />
        <SectionDiscovery />
      </>
    )
  }
}

export { Discovery };