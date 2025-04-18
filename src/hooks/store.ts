import { create } from 'zustand';
import { AppState } from '@/types/interfaces';

export const useStore = create<AppState>((set) => ({
    folders: [
        { id: 'Pasta1', name: 'Pasta1' },
        { id: 'Pasta2', name: 'Pasta2' },
        { id: 'default', name: 'Geral' } 
      ],
      
      bookmarks: [
        {
          id: '1',
          title: 'Titulo',
          url: 'Conteúdo aqui',
          description: 'Descricao',
          folderId: 'Pasta1',
          lastModification: '2025-04-08T14:30:00.000Z'
        },
        {
          id: '2',
          title: 'Titulo2',
          url: 'Conteúdo aqui2',
          description: 'Descricao2',
          folderId: 'Pasta2',
          lastModification: '2025-04-01T14:30:00.000Z'
        },
        {
          id: '3',
          title: 'Titulo3',
          url: 'Conteúdo aqui2',
          description: 'Descricao2',
          folderId: 'Pasta1',
          lastModification: '2025-04-09T14:30:00.000Z'
        },
        {
          id: '4',
          title: 'Titulo4',
          url: 'Conteúdo aqui2',
          description: 'Descricao2',
          folderId: 'default', 
          lastModification: '2024-11-15T14:30:00.000Z'
        }
      ],

  // Actions
  addFolder: (folder) => set((state) => ({
    folders: [...state.folders, { ...folder, id: Date.now().toString() }]
  })),

  addBookmark: (bookmark) => set((state) => ({
    bookmarks: [
      ...state.bookmarks,
      {
        ...bookmark,
        id: Date.now().toString(),
        lastModification: new Date().toISOString()
      }
    ]
  })),

  deleteFolder: (id) => set((state) => ({
    folders: state.folders.filter(folder => folder.id !== id),
    bookmarks: state.bookmarks.filter(bookmark => bookmark.folderId !== id)
  })),

  deleteBookmark: (id) => set((state) => ({
    bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== id)
  }))
}));