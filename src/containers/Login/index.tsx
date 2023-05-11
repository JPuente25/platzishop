import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button/index.styled';
import { Form, ForgotLink } from './index.styled';
import { useAuth } from '../../utils/hooks/useAuth';
import { User } from '../../types';
import { Context } from '../../context/context';
import { UseContextProps } from '../../utils/hooks/useInitialState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LoginData extends Pick<User, 'email' | 'password'> {}

interface LoginStates {
   userInfo: LoginData | null;
}

const Login = () => {
   const navigate = useNavigate();
   const [userInfo, setUserInfo] = React.useState<LoginStates['userInfo']>(null);
   const { setRender } = useAuth(userInfo);
   const { state, removeError, removeMsg } = React.useContext(Context) as UseContextProps;

   const goSignup = () => {
      //GO NEW ACCOUNT PAGE
      navigate('/account/new');
   };

   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      //SAVES FORM DATA IN STATE
      e.preventDefault();
      const formData = new FormData((e.target as any).form);
      const data: LoginData = {
         email: formData.get('email')!.toString(),
         password: formData.get('password')!.toString(),
      };
      setUserInfo(data);
      setRender((prev) => !prev); //CHANGES RENDER STATE FROM HOOK TO LET USEEFFECT ACTIVATES AGAIN
   };

   //NOTIFICATION FOR LOGIN PROBLEMS
   const notifyLoginWarning = () => {
      toast.warning(state.error['NS8'], {
         autoClose: 2000,
      });
      removeError('NS8');
   };
   //NOTIFICATION POR SUCESSFULL CREATED USER
   const createdUserSucess = () => {
      toast.success(state.msg['AA1'], {
         autoClose: 2000,
      });
      removeMsg('AA1');
   };
   //NOTIFICATION FOR INVALID TOKENS
   const invalidTokenWarning = () => {
      toast.warning(state.error['FL1'], {
         autoClose: 2000,
      });
      removeError('FL1');
   };

   if (state.error['NS8']) notifyLoginWarning();

   if (state.msg['AA1']) createdUserSucess();

   if (state.error['FL1']) invalidTokenWarning();

   return (
      <Form onSubmit={e => e.preventDefault}>
         <ToastContainer />
         <InputField
            label={{ text: 'Email Address', htmlFor: 'email' }}
            input={{ type: 'email', placeholder: 'platzi@example.com' }}
         />

         <InputField
            label={{ text: 'Password', htmlFor: 'password' }}
            input={{ type: 'password', placeholder: '***********' }}
         />

         <Button type='submit' onClick={handleSubmit}>Log In</Button>
         <ForgotLink to='/recovery/sent'>Forgot my password</ForgotLink>

         <Button
            className='signup'
            onClick={goSignup}>
            Sign up
         </Button>
      </Form>
   );
};

export { Login };
