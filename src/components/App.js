import '../styles/App.scss';
import { useState } from 'react';
import initialData from '../services/data.json';
function App() {
  const [data, setData] = useState(initialData);
  const [newName, setNewName] = useState('');
  const [openWeekDays, setOpenWeekDays] = useState(false);
  const [openWeekendDays, setOpenWeekendDays] = useState(false);
  const [allClubs, setAllClubs] = useState('all');

  const handleNewName = (ev) => {
    setNewName(ev.target.value);
  };
  const handleOpenWeekDays = (ev) => {
    setOpenWeekDays(ev.target.checked);
  };
  const handleOpenWeekendDays = (ev) => {
    setOpenWeekendDays(ev.target.checked);
  };

  const handleSearchClubs = (ev) => {
    setAllClubs(ev.target.value);
  };

  const handleClickButton = (ev) => {
    ev.preventDefault();
    const newContact = {
      name: newName,
      openOnWeekdays: openWeekDays,
      openOnWeekend: openWeekendDays,
    };
    setData([...data, newContact]);
    setNewName('');
    setOpenWeekDays(false);
    setOpenWeekendDays(false);
  };
  const htmlClubList = () => {
    return data
      .filter((club) => {
        if (allClubs === 'openWeekDays') {
          return club.openOnWeekdays === true;
        } else if (allClubs === 'openOnWeekend') {
          return club.openOnWeekend === true;
        }
        return true;
      })

      .map((club, index) => {
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
      <header>
        <h1>Mis clubs</h1>
        <form action="">
          <select value={allClubs} onChange={handleSearchClubs}>
            <option value="all">Todos</option>
            <option value="openWeekDays">Los que abren entre semana</option>
            <option value="openOnWeekend">
              Los que abren el fin de semana
            </option>
          </select>
        </form>
      </header>
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
