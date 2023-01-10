import { useDispatch } from 'react-redux';
import { deleteTask } from '../../store/tasksSlice';

function ButtonDelete({id}) {
    const dispatch = useDispatch();

    function taskDeleteHandler() {
        dispatch(deleteTask({id}));
    }

    return(
        <button className='delete' onClick={taskDeleteHandler}>
            Delete task
        </button>
    )
}

export { ButtonDelete }
