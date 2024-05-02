import { useState } from "react";
import PropTypes from "prop-types";
export const AddTarea = ({ nuevaTarea }) => {
  
  const [inputValue, setinputValue] = useState("");

  // const onChange = ({ target }) => {
  //   setinputValue(target.value);
  // };

  const OnSubmit = (evento) => {
    evento.preventDefault();
    nuevaTarea(inputValue.trim());
    setinputValue("");
  };

  return (
    <>
      <form className="form-add-tarea" onSubmit={(evento) => OnSubmit(evento)}>
        <input
          className="input-addTarea"
          type="text"
          placeholder="Nuevo recordatorio"
          onChange={(e)=>{(setinputValue(e.target.value))}}
          value={inputValue}
          
        />
        <button className="btn-addTarea" type="sumbit">
          Agregar
        </button>
      </form>
    </>
  );
};

AddTarea.propTypes = {
  nuevaTarea: PropTypes.func.isRequired,
};
