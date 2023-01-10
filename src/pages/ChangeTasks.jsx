import React from "react";
import { HeaderBig } from "../components/header/HeaderBig";
import { SectionChangeTasks } from "../components/sectionChangeTasks/SectionChangeTasks";

function ChangeTasks() {
  return (
    <>
      <HeaderBig src="./img/star.svg" to="/project_react_redux_routing/LeadTable" />
      <SectionChangeTasks />
    </>
  );
}

export { ChangeTasks };
