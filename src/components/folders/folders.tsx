import { FolderArchiveIcon } from 'lucide-react';
import { useState } from 'react';
import Folder from '../folder/folder';
import { useStore } from '@/hooks/store';
import CreateFolder from '../createFolder/createFolder';

export function Folders() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [folderId, setFolderId] = useState('');
  const folders = useStore((state) => state.folders);

  return (
    <>
      <div className="flex flex-col space-y-2">
        {folders.map((folder) => (
            <div
              key={folder.id}
              className="flex bg-secondary rounded cursor-pointer hover:bg-secondary/80 transition-colors"
              onClick={() => {setIsOpen(true); setFolderId(folder.id)}}
            >
              <div className="flex gap-2 items-center p-2 w-full">
                <FolderArchiveIcon className="h-5 w-5" />
                <p className="font-medium">{folder.name}</p>
              </div>
            </div>
        ))}
        <Folder open={isOpen} onOpenChange={setIsOpen} folder={folderId} />
        {folders.length === 0 && (
          <div>
            <p>Crie uma pasta para visualizar ela aqui</p>
          </div>
        )}
        <div className="flex self-end">
          <CreateFolder />
        </div>
      </div>
    </>
  );
}
