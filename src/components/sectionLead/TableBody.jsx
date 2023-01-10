import { Link } from "react-router-dom";

const TableBody = ({ table }) => {
  const { name, source, budget, nextTask, contact, id } = table;

  return (
    <tr key={id}>
      <td className="text">{name}</td>
      <td className="text">{source}</td>
      <td className="text">{budget}</td>
      <td className="text">
        <Link className="text" to="/project_react_redux_routing/ChangeTasks">
          {nextTask}
        </Link>
      </td>
      <td className="text">{contact}</td>
    </tr>
  );
};

export { TableBody };