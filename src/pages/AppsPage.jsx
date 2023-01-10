import React from "react";
import { Header } from "../components/header/Header";
import { SectionApp } from "../components/sectionApp/SectionApp";

class AppsPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SectionApp />
      </>
    )
  }
}

export { AppsPage };
