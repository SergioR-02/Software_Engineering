import './Register.scss';
import RegisterForm from '../../molecules/registerForm/RegisterForm';
import RegisterUser from '../../utilities/register';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { toast } from 'sonner';

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (name, email, password, phone) => {
    const phoneString = phone.toString();
    try {
      //imprimir el tipo del dato de phoneString
      console.log(typeof phoneString);
      const responsePetition = await RegisterUser(name, email, password, phoneString);
      if(responsePetition.message==='Usuario registrado exitosamente'){
        navigate('/login');
      }else{
        toast.error('Algo salio mal');
      }
    } catch (error) {
      toast.error('Algo salio mal');
    }
  };
  return (
    <div className='register'>
      <RegisterForm onSubmit={handleSubmit} />
      <Toaster />
    </div>
  );
};

export default Register;
