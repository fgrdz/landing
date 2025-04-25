import { IBookmark } from '@/types/interfaces';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { CheckIcon, CopyIcon, TrashIcon } from 'lucide-react';
import { useStore } from '@/hooks/store';
import { useState } from 'react';
import { cn } from '@/lib/utils'; 
import { LinkPreview } from '../preview/preview';

export default function Block({ id, title, description, url }: IBookmark) {
  const deleteBookmark = useStore((state)=> state.deleteBookmark);
  const [isCopied, setIsCopied] = useState(false);

  const handleDelete = () =>{
    deleteBookmark(id)
  }

  const handleCopy = async () => {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); 
  };

  return (
    <Card className="mb-3 w-xl h-[280px] bg-transparent">
      <CardHeader className='flex flex-col'>
        <p className="text-lg">{title}</p>
        <CardDescription>
          <p> {description} </p>
        </CardDescription>
      </CardHeader>
      <div className="p-2 pb-0">
        <CardContent className="h-[90px] border-2 border-dashed border-border rounded-md flex items-center hover:bg-secondary">
          <LinkPreview url={url}/>
        </CardContent>
      </div>
      <CardFooter className='flex items-center justify-center gap-2'>
      <Button
        variant={isCopied ? 'ghost' : 'outline'}
        size="icon"
        onClick={!isCopied ? handleCopy : undefined}
        className={cn(
          'relative overflow-hidden transition-all duration-300',
          'hover:scale-105 active:scale-95',
          isCopied ? 'bg-green-100 text-green-600' : ''
        )}
        aria-label={isCopied ? 'Copiado' : 'Copiar'}
      >
        <div className="relative w-4 h-4">
          <CopyIcon className={cn(
            'absolute inset-0 transition-all duration-300',
            isCopied ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
          )} />
          
          <CheckIcon className={cn(
            'absolute inset-0 transition-all duration-300 text-green-500',
            isCopied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )} />
        </div>
      
        {isCopied && (
          <span className="absolute inset-0 bg-opacity-10 animate-ping rounded-full" />
        )}
        </Button>
        <Button 
          className='cursor-pointer' 
          variant={"destructive"} 
          size={"icon"}
          onClick={handleDelete}
        >
          <TrashIcon/>
        </Button>
      </CardFooter>
    </Card>
  );
}
