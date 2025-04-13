export interface Bookmark {
    id: number;
    cardTitle: string;
    cardDescription?: string;
    cardContent: string;
    lastModification: string;
    folder?: string;
}

export interface IFolder {
    id: string; 
    name: string;
}

export interface AppState {
    folders: IFolder[];
    bookmarks: Bookmark[];
    addFolder: (folder: Omit<IFolder, 'id'>) => void;
    addBookmark: (bookmark: Omit<Bookmark, 'id' | 'lastModification'>) => void;
    deleteFolder: (id: string) => void;
    deleteBookmark: (id: string) => void;
  }
  