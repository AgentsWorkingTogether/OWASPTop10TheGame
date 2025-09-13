export interface Board {
  uuid: string;
  id: string;
  path: string;
  name: string;
  description?: string;
  difficulty?: number;
}

export interface BoardsList {
  boards: Board[];
}

export class MapService {
  private selectedBoardId: string = '';
  private selectedBoardName: string = '';

  async loadMaps(): Promise<Board[]> {
    try {
      // Fetch boards list from GitHub
      const response = await fetch('https://raw.githubusercontent.com/agentsworkingtogether/OWASPTop10TheGame/main/boards/list.json');
      
      if (!response.ok) {
        throw new Error('Failed to load maps from GitHub');
      }
      
      const boardsList: BoardsList = await response.json();
      return boardsList.boards || [];
    } catch (error) {
      console.error('Error loading maps from GitHub:', error);
      throw error;
    }
  }

  selectMap(boardUuid: string, boardName: string): void {
    this.selectedBoardId = boardUuid;
    this.selectedBoardName = boardName;
    console.log('Map selected:', boardUuid, boardName);
  }

  getSelectedMap(): { boardId: string; boardName: string } | null {
    if (this.selectedBoardId && this.selectedBoardName) {
      return {
        boardId: this.selectedBoardId,
        boardName: this.selectedBoardName
      };
    }
    return null;
  }

  clearSelection(): void {
    this.selectedBoardId = '';
    this.selectedBoardName = '';
  }

  isMapSelected(): boolean {
    return !!(this.selectedBoardId && this.selectedBoardName);
  }
}

// Export singleton instance
export const mapService = new MapService();
