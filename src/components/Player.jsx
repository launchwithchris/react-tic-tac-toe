import { useState } from 'react';

export default function Player({ name, symbol, onEdit }) {
  const [ isEditing, setIsEditing ] = useState(false);

  function handleEditClick() {
    setIsEditing(prev => !prev);
    onEdit();
  }
  
  let playerName = <span className='player-name'>{name}</span>;
  
  if (isEditing) {
    playerName = <input defaultValue={name} type="text" required/>;
  }

  return (
    <li>
      <span className='player'>
        {playerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{ !isEditing ? 'Edit'   : 'Save' }</button>
    </li>
  );
}