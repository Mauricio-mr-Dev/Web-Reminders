import { useState, useEffect } from "react";
import { AddTarea } from "./components/AddTarea";
import { Tareas } from "./components/Tareas";
import "./App.css";

function App() {
  // Obtener tareas del almacenamiento local al cargar la aplicación
  const initialTareas = JSON.parse(localStorage.getItem("tareas")) || [];
  const [tareas, setTareas] = useState(initialTareas);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const addTarea = (tareanueva) => {
    if (tareanueva.trim().length < 1) return;
    setTareas([...tareas, { tarea: tareanueva, isChecked: false }]);
  };

  const removeTarea = (index) => {
    const updatedTareas = [...tareas];
    updatedTareas.splice(index, 1);
    setTareas(updatedTareas);
  };

  const handleToggle = (index) => {
    setTareas((prevTareas) => {
      const updatedTareas = [...prevTareas];
      updatedTareas[index] = {
        ...updatedTareas[index],
        isChecked: !updatedTareas[index].isChecked,
      };
      return updatedTareas;
    });
  };

  return (
    <article className="table-article">
      <h1>RECORDATORIOS</h1>
      <hr /> <br />

      <section className="TableList">
        {tareas.length === 0 ? (
          <p>
            <strong>NO HAY RECORDATORIOS</strong>
          </p>
        ) : (
          tareas.map((tarea, index) => (
            <Tareas
              key={index}
              tarea={tarea.tarea}
              isChecked={tarea.isChecked}
              removeTarea={() => removeTarea(index)}
              onToggle={() => handleToggle(index)}
            />
          ))
        )}
      </section>
      <AddTarea nuevaTarea={addTarea} />
    </article>
  );
}

export default App;
