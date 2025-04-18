import { IBookmark } from "@/types/interfaces";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";


export default function Block({ title, description, url }: IBookmark){
    
    return (
        <Card className="mb-3 w-lg h-[200px] bg-transparent">
            <CardHeader>
                <p className="text-lg">{title}</p>
                <CardDescription>
                    <p> {description} </p>
                </CardDescription>
            </CardHeader>
            <div className="p-2">
            <CardContent className="h-[70px] border-2 border-dashed border-border rounded-md flex items-center cursor-pointer hover:bg-secondary">
                {url}
            </CardContent>
            </div>
        </Card>
    )
}