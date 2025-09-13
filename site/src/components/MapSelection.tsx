import React, { useEffect, useState } from 'react';
import { mapService } from '../services/MapService';
import type { Board } from '../services/MapService';

interface MapSelectionProps {
  translations: any;
  visible: boolean;
  onMapSelected: (boardId: string, boardName: string) => void;
  onContinueToPlayerSetup: () => void;
  onGoToVirtualTable: () => void;
}

export const MapSelection: React.FC<MapSelectionProps> = ({
  translations,
  visible,
  onMapSelected,
  onContinueToPlayerSetup,
  onGoToVirtualTable
}) => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMap, setSelectedMap] = useState<Board | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>('Componente inicializado');

  useEffect(() => {
    console.log('🚀 MapSelection montado, iniciando carga de mapas...');
    loadMaps();
  }, []);

  const loadMaps = async () => {
    try {
      console.log('🔄 Iniciando carga de mapas...');
      setDebugInfo('Iniciando carga...');
      setLoading(true);
      setError(null);
      
      const maps = await mapService.loadMaps();
      console.log('✅ Mapas cargados exitosamente:', maps);
      setBoards(maps);
      setDebugInfo(`Mapas cargados: ${maps.length}`);
    } catch (err) {
      console.error('❌ Error cargando mapas:', err);
      setError('Error al cargar los mapas');
      setDebugInfo(`Error: ${err instanceof Error ? err.message : 'Desconocido'}`);
    } finally {
      setLoading(false);
      console.log('🏁 Estado de carga finalizado');
    }
  };

  const handleMapSelect = (board: Board) => {
    setSelectedMap(board);
    mapService.selectMap(board.uuid, board.name);
  };

  const handleContinue = () => {
    if (selectedMap) {
      onMapSelected(selectedMap.uuid, selectedMap.name);
      onContinueToPlayerSetup();
    }
  };

  const handleGoToVirtualTable = () => {
    if (selectedMap) {
      onMapSelected(selectedMap.uuid, selectedMap.name);
      onGoToVirtualTable();
    }
  };

  console.log('🎨 Renderizando MapSelection:', { visible, loading, error, boardsCount: boards.length, selectedMap });
  
  // Si no es visible, no renderizar nada
  if (!visible) {
    return null;
  }
  
  if (loading) {
    console.log('⏳ Mostrando estado de carga...');
    return (
      <div id="map-selection" className="space-y-8 mt-12">
        <div className="max-w-4xl mx-auto card-bg rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-4 section-title">
            {translations.game.select_map}
          </h3>
          <p className="mb-6">
            {translations.game.select_map_desc}
          </p>
          
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>{translations.game.loading_maps}</p>
            <p className="text-xs text-gray-500 mt-2">{debugInfo}</p>
            <button 
              onClick={loadMaps}
              className="btn-primary py-2 px-4 mt-4"
            >
              Reintentar carga
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="map-selection" className="space-y-8 mt-12">
        <div className="max-w-4xl mx-auto card-bg rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-4 section-title">
            {translations.game.select_map}
          </h3>
          <p className="mb-6">
            {translations.game.select_map_desc}
          </p>
          
          <div className="text-center py-8">
            <p className="text-red-400 mb-4">{error}</p>
            <button 
              onClick={loadMaps}
              className="btn-primary py-2 px-4"
            >
              {translations.game.retry}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="map-selection" className="space-y-8 mt-12">
      <div className="max-w-4xl mx-auto card-bg rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4 section-title">
          {translations.game.select_map}
        </h3>
        <p className="mb-6">
          {translations.game.select_map_desc}
        </p>
        
        {/* Map Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {boards.map(board => (
            <div
              key={board.uuid}
              className={`bg-white/90 rounded-lg p-4 border-2 border-black shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                selectedMap?.uuid === board.uuid ? 'ring-4 ring-blue-500' : ''
              }`}
              onClick={() => handleMapSelect(board)}
            >
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  {board.name}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {board.description || 'Sin descripción'}
                </p>
                <div className="w-full h-32 bg-gray-200 rounded border-2 border-black flex items-center justify-center">
                  <span className="text-gray-500">{board.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        {selectedMap && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleContinue}
                className="btn-primary py-3 px-8 text-lg"
              >
                {translations.game.play_full_digital}
              </button>
              <button 
                onClick={handleGoToVirtualTable}
                className="btn-primary py-3 px-8 text-lg"
              >
                {translations.game.view_digital_map}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
