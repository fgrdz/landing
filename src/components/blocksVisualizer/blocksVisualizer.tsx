import { BlockProps } from "@/types/interfaces";
import Block from "../block/block";
import { Button } from "../ui/button";
import { Maximize } from "lucide-react";

interface BlocksVisualizerProps {
  blocks: BlockProps[];
}

export default function BlocksVisualizer({ blocks }: BlocksVisualizerProps) {
  return (
    <div className="space-y-2 relative">
      <p className="text-foreground">Últimos salvos</p>
      <div className="border-2 border-dashed overflow-y-auto p-2 flex flex-col items-center gap-2 h-[400px] rounded-md no-scroll-arrows">
        {blocks.map((block, index) => (
          <Block
            key={index} 
            cardTitle={block.cardTitle}
            cardContent={block.cardContent}
            cardDescription={block?.cardDescription}
          />
        ))}
        
        {blocks.length === 0 && (
          <div className="flex items-center justify-center h-full text-foreground/50">
            Comece a criar cards para começar a visualizá-los aqui
          </div>
        )}

        {blocks.length > 0 &&(
            <Button variant={'secondary'} size={'icon'} className="absolute bottom-4 right-4 cursor-pointer self-end justify-self-end">
                <Maximize/>
            </Button>
        )}
      </div>
    </div>
  );
}