import { useStore } from '@/hooks/store';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog';
import Block from '../block/block';
import { useMemo } from 'react';
import { shallow } from 'zustand/shallow';

interface FolderProps {
  folder: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function Folder({ folder, open, onOpenChange }: FolderProps) {
  const allBookmarks = useStore((state) => state.bookmarks);
  const bookmarks = useMemo(
    () => allBookmarks.filter((item) => shallow(item.folderId, folder)),
    [allBookmarks, folder]
  );
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild></DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-sans">Nome da pasta</DialogTitle>
          <DialogDescription>
            {bookmarks.map((item) => (
              <Block
                key={item.id}
                title={item.title}
                url={item.url}
                description={item.description}
                lastModification={item.lastModification}
              />
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
