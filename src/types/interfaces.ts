export interface IFolder {
    id: string;
    name: string;
  }
  
  export interface IBookmark {
    id?: string; 
    title: string; 
    url: string;   
    description?: string; 
    folderId?: string; 
    lastModification?: string;
  }
  
  export interface AppState {
    folders: IFolder[];
    bookmarks: IBookmark[];
    addFolder: (folder: Omit<IFolder, 'id'>) => void;
    addBookmark: (bookmark: Omit<IBookmark, 'id' | 'lastModification'>) => void;
    deleteFolder: (id: string) => void;
    deleteBookmark: (id: string) => void;
  }