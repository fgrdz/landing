import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function SignUpPage (){
    return(
        <div className="w-3xl h-9/12 flex flex-col  bg-background shadow-3xl rounded p-8 gap-3">
            <div className="flex justify-center font-bold font-sans text-2xl mb-4">
                Crie sua conta
            </div>
            <form>
                 <div className="flex flex-col gap-4 mb-4">
                    <Label>Email</Label>
                    <Input
                        id="email"
                        type="email"
                        
                        placeholder="Digite o seu e-mail"
                        required
                    />
                </div>
                <div className="flex flex-col gap-4 mb-4">
                    <Label>Nome</Label>
                    <Input
                        id="nome"
                        type="text"
                        
                        placeholder="Digite seu nome"
                        required
                    />
                </div>
                 <div className="flex flex-col gap-4 mb-4">
                    <Label>Telefone</Label>
                    <Input
                        id="telefone"
                        type="text"
                        
                        placeholder="Digite o seu telefone"
                        required
                    />
                </div>
                <div className="flex flex-col gap-4 mb-4">
                    <Label>Crie uma senha</Label>
                    <Input
                        id="senha"
                        type="password"
                        
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                <Button className="w-full mt-8 cursor-pointer" type="submit" variant="default">Criar</Button>
            </form>
        </div>
    )
}