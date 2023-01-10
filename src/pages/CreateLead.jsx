import React from "react";
import { HeaderBig } from "../components/header/HeaderBig"
import { SectionCreateLead } from "../components/sectionCreateLead/SectionCreateLead";

class CreateLead extends React.Component {
  render() {
    return (
      <>
        <HeaderBig src="./img/ellipse.svg" to="/project_react_redux_routing/LeadTable" />
        <SectionCreateLead />
      </>
    );
  }
}
export { CreateLead };