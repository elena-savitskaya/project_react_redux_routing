import React from "react";
import { HeaderBig } from "../components/header/HeaderBig";
import { SectionAnalizer } from "../components/sectionAnalizer/SectionAnalizer";

class Analizer extends React.Component {
    render() {
        return (
            <>
                <HeaderBig src="./img/rectangle.svg" to="/project_react_redux_routing/AppsPage" />
                <SectionAnalizer />
            </>
        )
    }
}

export { Analizer };