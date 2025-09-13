import React, { useState } from 'react';

interface PlayerSetupProps {
  translations: any;
  onPlayerSetupComplete: (playerName: string, playerPhone: string, countryCode: string) => void;
}

export const PlayerSetup: React.FC<PlayerSetupProps> = ({
  translations,
  onPlayerSetupComplete
}) => {
  const [playerName, setPlayerName] = useState('');
  const [playerPhone, setPlayerPhone] = useState('');
  const [currentCountry, setCurrentCountry] = useState('es');

  const handleSubmit = () => {
    if (!playerName.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }

    onPlayerSetupComplete(playerName.trim(), playerPhone.trim(), currentCountry);
  };

  return (
    <div id="player-name-setup" className="space-y-8 mt-12">
      <div className="max-w-md mx-auto card-bg rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4 section-title">
          {translations.game.player_setup}
        </h3>
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2">
            {translations.game.player_setup_desc}
          </p>
          <p>
            {translations.game.player_setup_desc2}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder={translations.game.enter_name}
            className="w-full bg-white/90 border-2 border-black rounded-lg px-4 py-2 placeholder-gray-600 focus:outline-none focus:border-blue-400"
            style={{ color: 'var(--color-text)', fontFamily: "'Special Elite', monospace" }}
          />
          
          <input 
            type="tel" 
            value={playerPhone}
            onChange={(e) => setPlayerPhone(e.target.value)}
            placeholder={translations.game.enter_phone}
            className="w-full bg-white/90 border-2 border-black rounded-lg px-4 py-2 placeholder-gray-600 focus:outline-none focus:border-blue-400"
            style={{ color: 'var(--color-text)', fontFamily: "'Special Elite', monospace" }}
          />
          
          <button 
            onClick={handleSubmit}
            className="btn-primary py-3 px-8 text-lg"
          >
            {translations.game.continue}
          </button>
        </div>
      </div>
    </div>
  );
};


