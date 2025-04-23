import BlocksVisualizer from '../blocksVisualizer/blocksVisualizer';
import { Separator } from '../ui/separator';
import { CreateBookmark } from '../createBookmark/createBookmark';

export default function Home() {
  return (
    <div className="w-5xl h-full flex flex-col border-l-2 border-r-2 border-popover-foreground/10 bg-amber-50 shadow-3xl rounded p-8 gap-3">
      <p className="font-bold font-sans text-2xl">Início</p>
      <Separator></Separator>
      <BlocksVisualizer />

      <CreateBookmark />
    </div>
  );
}
