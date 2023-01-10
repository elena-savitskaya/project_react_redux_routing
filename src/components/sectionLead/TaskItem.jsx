import { useDispatch } from "react-redux";
import { removeTasks } from "../../store/changeTasksSlice";

const TaskItem = ({ id, task }) => {

  const dispatch = useDispatch();

  return (
    <>
      {task}
      <span onClick={() => dispatch(removeTasks({ id }))}>&times;</span>
    </>
  );
};

export { TaskItem };