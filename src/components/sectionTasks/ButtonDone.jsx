import { useState } from 'react';

function ButtonDone() {
    const [isTaskDone, setTaskDone] = useState(false);

    return (
        <button onClick={() => setTaskDone((prevDone) => !prevDone)} className={isTaskDone ? 'done' : 'notDone'}>
            Mark as Done
        </button>
    )
}

export { ButtonDone }
