import { BlockProps } from "@/types/interfaces";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";


export default function Block({ cardTitle, cardDescription, cardContent }: BlockProps){
    
    return (
        <Card className="mb-3 w-lg h-[200px] bg-transparent">
            <CardHeader>
                <p className="text-lg">{cardTitle}</p>
                <CardDescription>
                    <p> {cardDescription} </p>
                </CardDescription>
            </CardHeader>
            <div className="p-2">
            <CardContent className="h-[70px] border-2 border-dashed border-border rounded-md flex items-center cursor-pointer hover:bg-secondary">
                {cardContent}
            </CardContent>
            </div>
        </Card>
    )
}