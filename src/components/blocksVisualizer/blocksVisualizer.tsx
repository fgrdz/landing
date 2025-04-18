import Block from "../block/block";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Folders } from "../folders/folders";
import { useStore } from "@/hooks/store";



export default function BlocksVisualizer() {
  const blocks = useStore((state) => state.bookmarks);

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
          .filter((block): block is { lastModification: string } & typeof block => 
            !!block.lastModification
          )
          .sort((a, b) => 
            new Date(b.lastModification).getTime() - new Date(a.lastModification).getTime()
          )
          .map((block) => (                
            <Block
              key={block.id} 
              title={block.title}
              url={block.url}
              description={block.description}
              lastModification={block.lastModification}
            />
          ))}
        </TabsContent>
        {/* folders */}
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