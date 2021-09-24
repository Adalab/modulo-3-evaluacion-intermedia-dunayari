import '../styles/App.scss';
import { useEffect, useState } from 'react';
import initialData from '../services/data.json';
function App() {
  const [data, setData] = useState(initialData);
  /*  const [newClub, setNewClub] = useState(''); */

  const [newName, setNewName] = useState('');
  const [openWeekDays, setOpenWeekDays] = useState('');
  const [openWeekendDays, setOpenWeekendDays] = useState('');

  const handleNewName = (ev) => {
    setNewName(ev.currentTarget.value);
  };
  const handleOpenWeekDays = (ev) => {
    setOpenWeekDays(ev.currentTarget.value);
  };
  const handleOpenWeekendDays = (ev) => {
    setOpenWeekendDays(ev.currentTarget.value);
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

  return (
    <div>
      <h1>Mis clubs</h1>
      <ul class="main_list">
        {data.map((club, index) => {
          return (
            <li key={index} className="clubs">
              #:{index} {club.name}
              <br />
              Abierto entre semana:
              {club.openOnWeekdays ? 'Sí' : 'No'}
              <br />
              Abierto el fin de semana:
              {club.openOnWeekend ? 'Sí' : 'No'}
            </li>
          );
        })}
      </ul>
      <h1>Añadir nuevo club</h1>
      <form className="form">
        <div className="first_club">
          <label>Nombre del club</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newName}
            onChange={handleNewName}
          />
        </div>
        <div className="first_club">
          <label>¿Abre entre semana?</label>
          <input
            type="checkbox"
            name="weekend"
            id="weekend"
            value={openWeekDays}
            onChange={handleOpenWeekDays}
          />
        </div>

        <div className="first_club">
          <label>¿Abre los fines de semana?</label>
          <input
            type="checkbox"
            name="daily"
            id="daily"
            value={openWeekendDays}
            onChange={handleOpenWeekendDays}
          />
        </div>

        <input
          type="button"
          className="button"
          value="Añadir nuevo club"
          onClick={handleClickButton}
        />
      </form>
    </div>
  );
}

export default App;
