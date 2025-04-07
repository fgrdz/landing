import BlocksVisualizer from "../blocksVisualizer/blocksVisualizer"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"


export default function Home () {
    const blocks = [
        {
            cardTitle: "Titulo",
            cardDescription: "Descricao",
            cardContent: "Conteúdo aqui"
        },
        {
            cardTitle: "Titulo2",
            cardDescription: "Descricao2",
            cardContent: "Conteúdo aqui2"
        },
    ]

    return(
        <div className="w-5xl h-full flex flex-col border-l-2 border-r-2 border-popover-foreground/10 bg-amber-50 shadow-3xl rounded p-8 gap-3">
            <p className="font-bold font-sans text-2xl">Início</p>
            <Separator></Separator>
            <BlocksVisualizer
                blocks={blocks}
            />
            <div className="self-end justify-self-end">
                <Button variant={'default'}>Criar bookmark</Button>
            </div>    
        </div>
    )
}