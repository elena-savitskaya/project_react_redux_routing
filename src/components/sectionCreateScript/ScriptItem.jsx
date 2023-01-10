import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeScript } from '../../store/scriptSlice';

const ScriptItem = ({ id, name }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className="subtitle">
        <span>{name}</span>
        <span onClick={() => dispatch(removeScript({ id }))}>&times;</span>
      </li>
      <li className="text">
        <span><Link className="text" to="">{'Upwork script 1'}</Link></span>
      </li>
      <li className="text">
        <span>{'Upwork script 2.'} <Link className="text" to="">{'Link to filtered jobs'}</Link></span>
      </li>
      <li className="text">
        <span>{'Upwork script 3.'} <Link className="text" to="">{'Check similar jobs'}</Link></span>
      </li>
    </>
  );
};

export { ScriptItem };