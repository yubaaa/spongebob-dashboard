// src/components/CharacterDashboard.js
import React, { useState } from 'react';
import CharacterPortrait from './CharacterPortrait';

const CharacterDashboard = () => {
  const initialCharacters = [
    {
      name: 'SpongeBob SquarePants',
      description: 'The main character of the show.',
      image: 'https://th.bing.com/th/id/OIP.7MSuzmiypqM3o7SMssDoQwHaIz?pid=ImgDet&rs=1',
    },
    {
      name: 'Patrick Star',
      description: 'SpongeBob\'s best friend who lives under a rock.',
      image: 'https://th.bing.com/th/id/OIP.pmNKpBVswmvHUvI_fFAS1AHaKm?pid=ImgDet&rs=1',
    },
    // Add more characters as needed
  ];

  const [characters, setCharacters] = useState(initialCharacters);

  const handleDelete = (index) => {
    const newCharacters = [...characters];
    newCharacters.splice(index, 1);
    setCharacters(newCharacters);
  };

  const handleEdit = (index, newData) => {
    const newCharacters = [...characters];
    newCharacters[index] = newData;
    setCharacters(newCharacters);
  };

  return (
    <div className="character-dashboard">
      {characters.map((character, index) => (
        <CharacterPortrait
          key={index}
          character={character}
          onDelete={() => handleDelete(index)}
          onEdit={(newData) => handleEdit(index, newData)}
        />
      ))}
    </div>
  );
};

export default CharacterDashboard;
