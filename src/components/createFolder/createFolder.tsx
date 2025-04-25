import React from 'react';
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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { useStore } from '@/hooks/store';

export default function CreateFolder() {
    const addFolder = useStore((state)=>state.addFolder);
    
    const [formData, setFormData] = useState({
        name: '',
    });

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault()
        addFolder({
            name: formData.name
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const name = e.target.value;

        setFormData((prev)=>({
            ...prev,
            name: name
        }))
    }
    return (
        <div>
        <Dialog>
            <DialogTrigger asChild className="w-[120px] self-end cursor-pointer">
            <Button variant={'default'} size={'icon'}>
                <PlusIcon />
            </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
            <form onSubmit={handleSubmit}>
                <DialogHeader>
                <DialogTitle className="font-sans">
                    Criar nova pasta
                </DialogTitle>
                <DialogDescription>
                    Adicione um nova pasta à sua coleção
                </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 mt-4">
                <div>
                    <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                    >
                    Nome
                    </label>
                    <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite o nome da pasta"
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
                <Button type="submit">Criar</Button>
                </DialogFooter>
            </form>
            </DialogContent>
        </Dialog>
        </div>
    );
}
