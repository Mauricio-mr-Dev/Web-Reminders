import PropTypes from 'prop-types';

export const Tareas = ({ tarea, isChecked, onToggle, removeTarea }) => {
 return (
    <article className="article-tareas">
      <ul className="ul-tareas">
        
        <input
          id='mycheck'
          type="checkbox"
          onChange={onToggle}
          checked={isChecked}
        />
        <li className={`li-tareas ${isChecked ? "check-Tareas" : ""}`}>
          {tarea}
        </li>
        <button className="btn-tareas" onClick={removeTarea}>
          X
        </button>
      </ul>
    </article>
  );
};

Tareas.propTypes={

  tarea : PropTypes.string.isRequired,
  isChecked : PropTypes.bool.isRequired,
  onToggle : PropTypes.func.isRequired,
  removeTarea: PropTypes.func.isRequired
  
}
