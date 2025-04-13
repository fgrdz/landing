import BlocksVisualizer from "../blocksVisualizer/blocksVisualizer"
import { Separator } from "../ui/separator"
import { CreateBookmark } from "../createBookmark/createBookmark"


export default function Home () {
    const blocks = [
        {
            id: 1,
            cardTitle: "Titulo",
            cardDescription: "Descricao",
            cardContent: "Conteúdo aqui",
            lastModification: "2025-04-08T14:30:00.000Z",
            folder: "Pasta1",
        },
        {
            id: 2,
            cardTitle: "Titulo2",
            cardDescription: "Descricao2",
            cardContent: "Conteúdo aqui2",
            lastModification: "2025-04-01T14:30:00.000Z",
            folder: "Pasta2"
        },
        {
            id: 3,
            cardTitle: "Titulo3",
            cardDescription: "Descricao2",
            cardContent: "Conteúdo aqui2",
            lastModification: "2025-04-09T14:30:00.000Z",
            folder: "Pasta1"
        },
        {
            id: 4,
            cardTitle: "Titulo4",
            cardDescription: "Descricao2",
            cardContent: "Conteúdo aqui2",
            lastModification: "2024-11-15T14:30:00.000Z",
        },
    ]

    return(
        <div className="w-5xl h-full flex flex-col border-l-2 border-r-2 border-popover-foreground/10 bg-amber-50 shadow-3xl rounded p-8 gap-3">
            <p className="font-bold font-sans text-2xl">Início</p>
            <Separator></Separator>
            <BlocksVisualizer
                blocks={blocks}
            />  
            
            <CreateBookmark/>
        </div>
    )
}