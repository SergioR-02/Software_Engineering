import "./Register.scss";
import RegisterForm from "../../molecules/registerForm/RegisterForm";
import RegisterUser from "../../utilities/register";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (name, email, password) => {
    try { 
      await RegisterUser(name, email, password);
      //navegar a la pagina de login
      navigate('/login');
    } catch (error) {
      console.error('Error en registro:', error);
    }
  };
  return (
    <div className="register">
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  )
}

export default Register;