import React from "react";
import { HeaderBig } from "../components/header/HeaderBig";
import { SectionLead } from "../components/sectionLead/SectionLead";

class LeadTable extends React.Component {
  render() {
    return (
      <>
        <HeaderBig src="./img/star.svg" to="/project_react_redux_routing/AppsPage" />
        <SectionLead />
      </>
    )
  }
}

export { LeadTable };