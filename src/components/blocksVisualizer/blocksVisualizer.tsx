import { Bookmark } from "@/types/interfaces";
import Block from "../block/block";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Folders } from "../folders/folders";

interface BlocksVisualizerProps {
  blocks: Bookmark[];
}

export default function BlocksVisualizer({ blocks }: BlocksVisualizerProps) {
  return (
    <div className="space-y-2 relative">
      <p className="text-foreground">Bookmarks</p>
      <div className="border-2 border-dashed bg-background overflow-y-auto p-2 flex flex-col gap-2 h-[400px] rounded-md no-scroll-arrows">
        <div className="w-[100%]">
        <Tabs defaultValue="recent" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="recent" defaultChecked>Recentes</TabsTrigger>
          <TabsTrigger value="folders">Pastas</TabsTrigger>
          <TabsTrigger value="archived">Arquivados</TabsTrigger>
        </TabsList>

        <TabsContent value="recent">
        {blocks
          .filter(block => block.lastModification)
          .sort((a,b) =>  new Date(b.lastModification).getTime() - new Date(a.lastModification).getTime())
          .map((block, index) => (                
            <Block
              key={index}             
              cardTitle={block.cardTitle}
              cardContent={block.cardContent}
              cardDescription={block.cardDescription}
              lastModification={block.lastModification}
            />
          ))}
        </TabsContent>

        <TabsContent value="folders">
          <Folders/>
        </TabsContent>
        </Tabs>
        </div>
        
        
        {blocks.length === 0 && (
          <div className="flex items-center justify-center h-full text-foreground/50">
            Comece a criar cards para começar a visualizá-los aqui
          </div>
        )}
      </div>
    </div>
  );
}