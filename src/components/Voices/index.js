import React, { useState } from 'react';
import './index.css';

const voices = [
  { name: 'Aaliyah', gender: 'female', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_in-flag.gif', isSelected: true },
  { name: 'Ada', gender: 'male', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_kn-flag.gif', isSelected: false },
  { name: 'Adelaide', gender: 'female', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_pm-flag.gif', isSelected: false },
  { name: 'Alessandro', gender: 'male', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_pe-flag.gif', isSelected: false },
  { name: 'Amelia', gender: 'female', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_sz-flag.gif', isSelected: false },
  { name: 'Archie', gender: 'male', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_uk-flag.gif', isSelected: false },
  { name: 'Achjia', gender: 'male', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_us-flag.gif', isSelected: false },
  { name: 'Bdakkle', gender: 'male', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_ym-flag.gif', isSelected: false },
  { name: 'Agadam', gender: 'male', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_zi-flag.gif', isSelected: false },
  { name: 'Abkkam', gender: 'male', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_fr-flag.gif', isSelected: false },
  { name: 'Hihhew', gender: 'male', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_af-flag.gif', isSelected: false },
  { name: 'Jowden', gender: 'male', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_co-flag.gif', isSelected: false },
  { name: 'Katram', gender: 'male', type: 'Conversational', flag: 'https://www.worldometers.info//img/flags/small/tn_ga-flag.gif', isSelected: false },
];

const Voices = () => {
  const [selectedVoice, setSelectedVoice] = useState(voices.find(voice => voice.isSelected));

  return (
    <div className="pop-up-contianer">
      <div className="voices-container">
        <h2 className="title">Choose Agent Voice</h2>
        <ul className="voice-list">
          {voices.map((voice, index) => (
            <li key={index} className={`voice-item ${selectedVoice.name === voice.name ? 'selected' : ''}`}>
              <img src={voice.flag} alt={voice.name} className="flag-icon" />
              <div className="voice-info">
                <div className="voice-name">{voice.name}</div>
                <div className="voice-meta">{voice.gender} • {voice.type}</div>
              </div>
              <button className="play-button">▶️</button>
              <button className="use-voice-button" onClick={() => setSelectedVoice(voice)}>Use Voice</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Voices;