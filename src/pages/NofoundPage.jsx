import { Link } from "react-router-dom";
import { Header } from "../components/header/Header";

const NofoundPage = () => {
  return (
    <>
      <Header />
      <div className="container">Page not found<Link to="/project_react_redux_routing">Go Home</Link></div>
    </>
  );
};

export { NofoundPage };
