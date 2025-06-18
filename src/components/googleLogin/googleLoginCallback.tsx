import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

export default function GoogleCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    console.log('aqui')
    if (token) {
      localStorage.setItem('authToken', token);
      navigate('/');
    } else {
      navigate('/login', { state: { error: 'Falha na autenticação com Google' } });
    }
  }, [navigate, searchParams]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Processando login com Google...</p>
    </div>
  );
}