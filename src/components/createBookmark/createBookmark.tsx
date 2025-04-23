import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useStore } from '@/hooks/store';
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem,
} from '../ui/select';

export function CreateBookmark() {
  const addBookmark = useStore((state) => state.addBookmark);
  const folders = useStore((state) => state.folders);

  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    folderId: 'default',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBookmark({
      title: formData.title,
      url: formData.url,
      description: formData.description,
      folderId: formData.folderId,
    });
    document.getElementById('close-dialog')?.click();
    setFormData({ title: '', url: '', description: '', folderId: 'default' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      folderId: value,
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="w-[120px] self-end cursor-pointer">
        <Button variant="default" size="default" className="gap-2">
          Criar bookmark
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="font-sans">Criar novo bookmark</DialogTitle>
            <DialogDescription>
              Adicione um novo bookmark à sua coleção
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Título*
              </label>
              <Input
                id="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Digite o título"
                required
              />
            </div>

            <div>
              <label htmlFor="url" className="block text-sm font-medium mb-1">
                URL*
              </label>
              <Input
                id="url"
                type="string"
                value={formData.url}
                onChange={handleChange}
                placeholder="https://exemplo.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
              >
                Descrição
              </label>
              <Input
                id="description"
                type="text"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descrição opcional"
              />
            </div>

            <div>
              <label
                htmlFor="folder"
                className="block text-sm font-medium mb-1"
              >
                Pasta
              </label>
              <Select
                value={formData.folderId}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma pasta"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {folders.map((folder) => (
                    <SelectItem value={folder.id}>{folder.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
  );
}
