import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function LoginPage (){
    return(
        <div className="w-3xl h-8/12 flex flex-col  bg-background shadow-3xl rounded p-8 gap-3">
            <div className="flex justify-center font-bold font-sans text-2xl mb-4">
                Entre na sua conta
            </div>
            <form >
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
                    <Label>Senha</Label>
                    <Input
                        id="senha"
                        type="password"
                        
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                <Button className="w-full mt-8 cursor-pointer" type="submit" variant="default">Entrar</Button>
            </form>
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t mt-8">
                <span className="bg-background text-muted-foreground relative z-10 px-2">Não tem uma conta?</span>
            </div>
            <div className="flex justify-center">
                <Button className="w-3xs mt-8 cursor-pointer" type="button" variant="outline">Registre-se</Button>
            </div>
        </div>
    )
}