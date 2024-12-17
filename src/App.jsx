import './AppStyles.css';
import { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

const App =()=> {
  // Keep track of the character that's clicked on. 
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Handling when a character gets clicked on we need to receive the information from 'Character List' 
  // and relay the information to 'Character Detail'
  const handleCharacterSelect = (characterId) => {
    setSelectedCharacter(characterId);
  }

  return (
    <>    
      <CharacterList selectedCharacter={selectedCharacter} onCharacterSelect={handleCharacterSelect}/>
      {/* Only display the Character Detail section if there's a selected character */}
      {selectedCharacter && (<CharacterDetail selectedCharacter={selectedCharacter} />)}
    </>
  )
}

export default App;
