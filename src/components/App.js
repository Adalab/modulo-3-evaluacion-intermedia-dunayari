import '../styles/App.scss';
import { useState } from 'react';
import initialData from '../services/data.json';
function App() {
  const [data, setData] = useState(initialData);
  const [newName, setNewName] = useState('');
  const [openWeekDays, setOpenWeekDays] = useState(false);
  const [openWeekendDays, setOpenWeekendDays] = useState(false);

  const handleNewName = (ev) => {
    setNewName(ev.target.value);
  };
  const handleOpenWeekDays = (ev) => {
    setOpenWeekDays(ev.target.checked);
  };
  const handleOpenWeekendDays = (ev) => {
    setOpenWeekendDays(ev.target.checked);
  };

  const handleClickButton = (ev) => {
    ev.preventDefault();
    const newContact = {
      name: newName,
      openOnWeekdays: openWeekDays,
      openOnWeekend: openWeekendDays,
    };
    setData([...data, newContact]);
  };
  const htmlClubList = () => {
    return data.map((club, index) => {
      return (
        <li key={index} className="clubs">
          <h2>
            #:{index} {club.name}
          </h2>
          <p>
            Abierto entre semana:
            {club.openOnWeekdays ? 'Sí' : 'No'}
          </p>

          <p>
            Abierto el fin de semana:
            {club.openOnWeekend ? 'Sí' : 'No'}
          </p>
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Mis clubs</h1>
      <ul class="main_list">{htmlClubList()}</ul>
      <h1>Añadir nuevo club</h1>
      <form className="form">
        <div className="first_club">
          <label htmlFor="">Nombre del club</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newName}
            onChange={handleNewName}
          />
        </div>
        <div className="first_club">
          <label htmlFor="">¿Abre entre semana?</label>
          <input
            type="checkbox"
            name="openOnWeekDays"
            id="openOnWeekDays"
            checked={openWeekDays}
            onChange={handleOpenWeekDays}
          />
        </div>

        <div className="first_club">
          <label>¿Abre los fines de semana?</label>
          <input
            type="checkbox"
            name="openOnWeekend"
            id="openOnWeekend"
            checked={openWeekendDays}
            onChange={handleOpenWeekendDays}
          />
        </div>

        <input
          type="button"
          name="btn"
          id="btn"
          className="button"
          value="Añadir nuevo club"
          onClick={handleClickButton}
        />
      </form>
    </div>
  );
}

export default App;
