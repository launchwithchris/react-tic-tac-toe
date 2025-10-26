import { useState } from 'react';

export default function Player({ initialName, symbol, onEdit }) {
  const [ playerName, setPlayerName ] = useState(initialName);
  const [ isEditing, setIsEditing ] = useState(false);

  function handleEditClick() {
    setIsEditing(prev => !prev);
    onEdit();
  }

  function handleChange(event) {
    console.log(event.target.value);
    setPlayerName(event.target.value);
  }
  
  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  // let btnCaption = 'Edit';
   
  if (isEditing) {
    editablePlayerName = <input value={playerName} type="text" required onChange={handleChange}/>;
    // btnCaption = 'Save';
  }

  return (
    <li>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{ !isEditing ? 'Edit'   : 'Save' }</button>
    </li>
  );
}