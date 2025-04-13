import { FolderArchiveIcon } from "lucide-react";
import { useState } from "react";
import Folder from "../folder/folder";
import { IFolder } from "@/types/interfaces";



export function Folders() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const folders: IFolder[] = [
    {
      id: "folder-1",
      name: "Pasta1"
    },
    {
      id: "folder-2",
      name: "Pasta2"
    }
  ];

  return (
    <div className="space-y-2"> 
      {folders.map((folder) => (
        <>
        <div 
          key={folder.id} 
          className="flex bg-secondary rounded cursor-pointer hover:bg-secondary/80 transition-colors"
          onClick={()=>setIsOpen(true)}
        >
          <div className="flex gap-2 items-center p-2 w-full">
            <FolderArchiveIcon className="h-5 w-5" />
            <p className="font-medium">{folder.name}</p>
          </div>
        </div>
        <Folder 
            open={isOpen}
            onOpenChange={setIsOpen}
        />        
        </>
      ))}

      {folders.length === 0 && (
        <div>
            <p>Crie uma pasta para visualizar ela aqui</p>
        </div>
      )}
    </div>
  );
}