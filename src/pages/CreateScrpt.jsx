import React from "react";
import { HeaderBig } from "../components/header/HeaderBig"
import { SectionCreateScript } from "../components/sectionCreateScript/SectionCreateScript";

class CreateScript extends React.Component {
  render() {
    return (
      <>
        <HeaderBig src="./img/ellipse.svg" to="/project_react_redux_routing/Discovery" />
        <SectionCreateScript />
      </>
    );
  }
}
export { CreateScript };