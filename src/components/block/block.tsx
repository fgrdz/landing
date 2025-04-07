import { BlockProps } from "@/types/interfaces";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";


export default function Block({ cardTitle, cardDescription, cardContent }: BlockProps){
    
    return (
        <Card className="mb-3 w-xl">
            <CardHeader>
                <p className="text-lg">{cardTitle}</p>
                <CardDescription>
                    <p> {cardDescription} </p>
                </CardDescription>
            </CardHeader>
            <div className="p-4">
            <CardContent className="h-[200px] border-2 border-dashed border-border rounded-md flex items-center">
                {cardContent}
            </CardContent>
            </div>
        </Card>
    )
}