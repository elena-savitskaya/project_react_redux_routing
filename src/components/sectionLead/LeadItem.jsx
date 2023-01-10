import { useDispatch } from "react-redux";
import { removeLead } from "../../store/leadSlice";
import { Link } from "react-router-dom";

const LeadItem = ({ id, name, source, budget, nextTask, contacts }) => {

  const dispatch = useDispatch();

  return (
    <>
      <td className="text">
        {name}
        <span onClick={() => dispatch(removeLead({ id }))}>
          &times;
        </span>
      </td>
      <td className="text">{source}</td>
      <td className="text">{budget}</td>
      <td className="text"><Link className="text" to="/project_react_redux_routing/ChangeTasks">{nextTask}</Link></td>
      <td className="text">{contacts}</td>
    </>
  );
};

export { LeadItem };
