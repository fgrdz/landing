import { useStore } from '@/hooks/store';
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContentMax,
} from '../ui/dialog';
import Block from '../block/block';
import { useMemo } from 'react';

interface FolderProps {
  folder: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function Folder({ folder, open, onOpenChange }: FolderProps) {
  const allBookmarks = useStore((state) => state.bookmarks);
  const bookmarks = useMemo(
    () => allBookmarks.filter((item) => item.folderId === folder),
    [allBookmarks, folder]
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContentMax className="max-w-7xl">
        <DialogHeader>
          <DialogTitle className="font-sans">{folder}</DialogTitle>
          <DialogDescription>
          <div className="grid grid-cols-2 gap-4 py-4">
              {bookmarks.map((item) => (
                <Block
                  key={item.id}
                  title={item.title}
                  url={item.url}
                  description={item.description}
                  lastModification={item.lastModification}
                />
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContentMax>
    </Dialog>
  );
}
