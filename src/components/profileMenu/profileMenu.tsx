import EditProfile from "../editProfile/editProfile";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function ProfileMenu (){
    return(
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer">
                    <Avatar>
                        <AvatarImage src={"https://github.com/fgrdz.png"}></AvatarImage>
                        <AvatarFallback>JF</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem>
                        Editar avatar
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <EditProfile/>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem>
                        Sair
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}