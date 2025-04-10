import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";

interface FolderProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function Folder({ open, onOpenChange }: FolderProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-sans">Nome da pasta</DialogTitle>
          <DialogDescription>
            Conteúdo
          </DialogDescription>
        </DialogHeader>        
      </DialogContent>
    </Dialog>
  );
}