import React, { useState } from 'react';
import { GameCreation } from './GameCreation';
import { MapSelection } from './MapSelection';
import { PlayerSetup } from './PlayerSetup';
import { mapService } from '../services/MapService';

interface GameStateManagerProps {
  translations: any;
  lang: string;
}

export const GameStateManager: React.FC<GameStateManagerProps> = ({
  translations,
  lang
}) => {
  const [currentStep, setCurrentStep] = useState<'creation' | 'map-selection' | 'player-setup'>('creation');

  const handleCreateGame = () => {
    console.log('🎮 Creando nueva partida...');
    setCurrentStep('map-selection');
  };

  const handleMapSelected = (boardId: string, boardName: string) => {
    console.log('🗺️ Mapa seleccionado:', boardId, boardName);
  };

  const handleContinueToPlayerSetup = () => {
    console.log('👤 Continuando a configuración de jugador...');
    setCurrentStep('player-setup');
  };

  const handleGoToVirtualTable = () => {
    console.log('🃏 Redirigiendo a mesa virtual...');
    
    // Obtener el mapa seleccionado del servicio
    const selectedMap = mapService.getSelectedMap();
    if (!selectedMap) {
      console.error('❌ No hay mapa seleccionado');
      return;
    }
    
    // Redirigir a la mesa virtual con el mapa seleccionado
    const virtualTableUrl = `/OWASPTop10TheGame/${lang}/virtual-table/?boardid=${selectedMap.boardId}`;
    console.log('🔗 Redirigiendo a:', virtualTableUrl);
    window.location.href = virtualTableUrl;
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'creation':
        return (
          <GameCreation 
            translations={translations}
            onCreateGame={handleCreateGame}
          />
        );
      
      case 'map-selection':
        return (
          <MapSelection
            translations={translations}
            visible={true}
            onMapSelected={handleMapSelected}
            onContinueToPlayerSetup={handleContinueToPlayerSetup}
            onGoToVirtualTable={handleGoToVirtualTable}
          />
        );
      
      case 'player-setup':
        return (
          <PlayerSetup
            translations={translations}
            onPlayerSetupComplete={(playerName: string, playerPhone: string, countryCode: string) => {
              console.log('✅ Configuración de jugador completada:', { playerName, playerPhone, countryCode });
              // Aquí continuarías con la siguiente lógica del juego
            }}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {renderCurrentStep()}
    </div>
  );
};
