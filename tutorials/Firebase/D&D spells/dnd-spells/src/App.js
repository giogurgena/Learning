import React from 'react';
import './App.css';
import firebase from './fireBase';
import SpellInput from './SpellInput';

function App() {
  const [spells, setSpells] = React.useState([]);
  const [newSpellName, setNewSpellName] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('spells').get();
      setSpells(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection('spells').add({ name: newSpellName });
  };

  return (
    <ul>
      <input value={newSpellName} />
      <button
        onClick={onCreate}
        onChange={(e) => setNewSpellName(e.target.value)}
      >
        Create
      </button>
      {spells.map((spell) => (
        <li key={spell.name}>
          <SpellInput spell={spell} />
        </li>
      ))}
    </ul>
  );
}

export default App;
