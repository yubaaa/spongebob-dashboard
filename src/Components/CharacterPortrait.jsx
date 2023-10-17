// src/components/CharacterPortrait.js
import React, { useState } from 'react';

const CharacterPortrait = ({ character, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description);
  const [image, setImage] = useState(character.image);

  const handleDelete = () => {
    onDelete();
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSaveChanges = () => {
    onEdit({ name, description, image });
    setEditing(false);
  };

  return (
    <div className="character-portrait">
      {editing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
      ) : (
        <div>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <p>{description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default CharacterPortrait;
