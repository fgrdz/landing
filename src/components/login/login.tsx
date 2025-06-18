import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useNavigate } from "react-router";
import BookmarksApi from '@/apis/bookmarksApi';
import { useEffect, useState } from "react";
import GoogleIcon from '../../assets/icons8-google.svg';

export default function LoginPage (){
    const navigate = useNavigate();
    const [loginData, setLoginData] =  useState({
        email: '',
        senha: ''
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {id,value} = e.target;

        setLoginData((prev) => ({
            ...prev,
            [id]: value,
        }));
    }
    const handleLogin = async (e:React.FormEvent)=>{
        e.preventDefault();
        try{
            const response = await BookmarksApi.login({email: loginData.email, password: loginData.senha});
            
            if(response){
                localStorage.setItem('authToken', response.access_token);
                console.log('Succefully login');
                navigate('/')
            }
        }catch(error){
            console.log(error);
        }
    };
    const handleGoogleLogin = () => {
        BookmarksApi.initiateGoogleLogin();
    };

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
                        onChange={handleChange}
                        placeholder="Digite o seu e-mail"
                        required
                    />
                </div>
                <div className="flex flex-col gap-4 mb-4">
                    <Label>Senha</Label>
                    <Input
                        id="senha"
                        type="password"
                        onChange={handleChange}
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                <Button className="w-full mt-8 cursor-pointer" type="submit" variant="default" onClick={(e)=>handleLogin(e)}>Entrar</Button>
            </form>
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t mt-8">
                <span className="bg-background text-muted-foreground relative z-10 px-2">Ou entre com</span>
            </div>
            <div className="flex justify-center">
                <Button 
                    className="w-3xs mt-8 cursor-pointer" 
                    type="button" 
                    variant="outline" 
                    onClick={handleGoogleLogin}
                >
                    <img className="w-[20px] h-[20px]" src={GoogleIcon}></img>
                    Google
                </Button>
            </div>
        </div>
    )
}