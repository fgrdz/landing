import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";

export default function EditProfile () {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <div>Editar perfil</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <form>
              <DialogHeader>
                  <DialogTitle className="font-sans">Editar perfil</DialogTitle>
                  <DialogDescription>
                    Edite as informações do seu perfil abaixo:
                  </DialogDescription>
              </DialogHeader>
            <div className="flex flex-col gap-6 mt-4">  
            <div>
              <label htmlFor="nome" className="block text-sm font-medium mb-1">
                Nome
              </label>
              <Input
                id="nome"
                type="text"
                //value={formData.nome}
                //onChange={handleChange}
                placeholder="Nome"
                required
              />
            </div>
            <div>
              <label htmlFor="nome" className="block text-sm font-medium mb-1">
                E-mail
              </label>
              <Input
                id="email"
                type="text"
                //value={formData.nome}
                //onChange={handleChange}
                placeholder="E-mail"
                required
              />
            </div>               
            <div>
              <label htmlFor="nome" className="block text-sm font-medium mb-1">
                Senha
              </label>
              <Input
                id="senha"
                type="password"
                //value={formData.nome}
                //onChange={handleChange}
                placeholder="Senha"
                required
              />
            </div>
            </div>                           
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button id="close-dialog" type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
    )
}