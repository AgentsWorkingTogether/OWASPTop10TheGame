import React from 'react';

interface GameCreationProps {
  translations: any;
  onCreateGame: () => void;
}

export const GameCreation: React.FC<GameCreationProps> = ({
  translations,
  onCreateGame
}) => {
  return (
    <div id="game-setup" className="space-y-8">
      <div className="max-w-md mx-auto card-bg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 section-title">
          {translations.game.create_new_game}
        </h2>
        <p className="mb-6">
          {translations.game.create_new_game_desc}
        </p>
        <button 
          onClick={onCreateGame}
          className="btn-primary py-3 px-8 text-lg"
        >
          {translations.game.create_game}
        </button>
      </div>
    </div>
  );
};


