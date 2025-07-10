import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

export default function EditProfile () {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <div>Editar perfil</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle className="font-sans">Editar perfil</DialogTitle>
                <DialogDescription>
                Adicione um novo bookmark à sua coleção
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button id="close-dialog" type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}