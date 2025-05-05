import { create } from 'zustand';
import { AppState } from '@/types/interfaces';

export const useStore = create<AppState>((set) => ({
  folders: [
    { id: 'Pasta1', name: 'Pasta1' },
    { id: 'Pasta2', name: 'Pasta2' },
    { id: 'default', name: 'Geral' },
  ],

  bookmarks: [],

  // Actions
  addFolder: (folder) =>
    set((state) => ({
      folders: [...state.folders, { ...folder, id: Date.now().toString() }],
    })),


    setBookmarks: (apiBookmarks) => 
      set({ 
        bookmarks: apiBookmarks.map(bookmark => ({
          ...bookmark,
          id: String(bookmark.id),
          lastModification: new Date().toISOString(), 
          folderId: bookmark.folderId || 'default' 
        }))
      }),
  
  addBookmark: (bookmark) =>
    set((state) => ({
      bookmarks: [
        ...state.bookmarks,
        {
          ...bookmark,
          id: Date.now().toString(),
          lastModification: new Date().toISOString(),
        },
      ],
    })),

  deleteFolder: (id) =>
    set((state) => ({
      folders: state.folders.filter((folder) => folder.id !== id),
      bookmarks: state.bookmarks.filter((bookmark) => bookmark.folderId !== id),
    })),

  deleteBookmark: (id) =>
    set((state) => ({
      bookmarks: state.bookmarks.filter((bookmark) => bookmark.id !== id),
    })),
}));
