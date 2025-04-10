import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";

export function CreateBookmark() {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-[120px] self-end cursor-pointer">
        <Button variant="default" size="default" className="gap-2">
          Criar bookmark
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-sans">Criar novo bookmark</DialogTitle>
          <DialogDescription>
            Adicione um novo bookmark à sua coleção
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Título
            </label>
            <input
              id="title"
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Digite o título"
            />
          </div>
          
          <div>
            <label htmlFor="url" className="block text-sm font-medium mb-1">
              URL
            </label>
            <input
              id="url"
              type="url"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="https://exemplo.com"
            />
          </div>

          <div>
            <label htmlFor="descricao" className="block text-sm font-medium mb-1">
              Descrição
            </label>
            <input
              id="descricao"
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Descrição"
            />
          </div>

        </div>
        
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}