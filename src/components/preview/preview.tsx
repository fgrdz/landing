import { useEffect, useState } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const API_KEY = '7f9c64e88abfddb6aadda848800876f1'; // Substitua pela sua chave

export const LinkPreview = ({ url }: { url: string }) => {
  const [preview, setPreview] = useState<{
    title?: string;
    description?: string;
    image?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(url)}`
        );
        
        if (!response.ok) {
          throw new Error('Falha ao carregar pré-visualização');
        }

        const data = await response.json();
        setPreview({
          title: data.title,
          description: data.description,
          image: data.image,
        });
      } catch (err) {
        console.error('Erro:', err);
        setError('Não foi possível carregar a pré-visualização');
      } finally {
        setLoading(false);
      }
    };

    fetchPreview();
  }, [url]);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="error">{url}</div>;
  }

  return (
    <div >
    <a className="flex items-center gap-4 cursor-pointer"href={url} target='blank' rel="noopener noreferrer">
      {preview?.image && (
        <div className='flex items-center w-[70px] h-[70px] rounded'>
            <img className="rounded" src={preview.image} alt={preview.title || 'Preview'} />
        </div>
      )}
      <div className="flex flex-col">
        <h3 className='text-[16px]'>{preview?.title}</h3>
        <Tooltip>
        <TooltipTrigger>
            <p className="text-[12px] whitespace-normal break-words line-clamp-2 cursor-pointer">
            {preview?.description?.slice(0, 50)}
            {preview?.description && preview.description.length > 70 && "..."}
            </p>
        </TooltipTrigger>
        <TooltipContent className="max-w-[200px] p-2 text-sm text-[8px] ">
            {preview?.description}
        </TooltipContent>
        </Tooltip>
      </div>
      </a>
    </div>
  );
};