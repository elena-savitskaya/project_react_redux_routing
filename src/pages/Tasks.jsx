import React from "react";
import { HeaderBig } from "../components/header/HeaderBig";
import { SectionTasks } from "../components/sectionTasks/SectionTasks";

class Tasks extends React.Component {
    render() {
        return (
            <>
                <HeaderBig src="./img/polygon2.svg" to="/project_react_redux_routing/AppsPage" />
                <SectionTasks />
            </>
        )
    }
}

export { Tasks };