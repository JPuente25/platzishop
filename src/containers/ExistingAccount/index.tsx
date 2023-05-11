import React from 'react';
import { Form } from '../Login/index.styled';
import { Button } from '../../components/Button/index.styled';
import { H1 } from '../Recovery/index.styled';
import { Context } from '../../context/context';
import { Field, Input, Label } from '../../components/InputField/index.styled';
import { useUpdateUser } from '../../utils/hooks/useUpdateUser';
import { Container } from './index.styled';
import { UseContextProps } from '../../utils/hooks/useInitialState';
import { User } from '../../types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ExistingAccountStates {
   actualData: User
   newData: User | null
}

const ExistingAccount = () => {
   const { state, removeError, removeMsg } = React.useContext(Context) as UseContextProps;
   const [actualData, setActualData] = React.useState<ExistingAccountStates['actualData']>(state.userData!);
   const [newData, setNewData] = React.useState<ExistingAccountStates['newData']>(null);

   const { loading } = useUpdateUser(newData); //UPDATES AN USER GIVEN (HOOK API)

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { //ON SUBMIT, SAVES DATA FROM FORMULARY TO STATE
      e.preventDefault();
      setNewData(actualData);
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { //HANDLE NAME INPUT
      setActualData({
         ...actualData,
         [e.target.name]: e.target.value,
      });
   };

   const notifyWarning = (msg: string) => {
      toast.warning(msg, {
         autoClose: 2000
      });
      removeError('XX5');
   }

   const notifySucess = (msg: string) => {
      toast.success(msg, {
         autoClose: 2000
      });
      removeMsg('SS1');
   }

   if (state.error['XX5']) notifyWarning(state.error['XX5'])

   if (state.msg['SS1']) notifySucess(state.msg['SS1'])

   return (
      <Container>
         <ToastContainer />

         <H1 className="left">My account</H1>

         <Form onSubmit={handleSubmit}>
            <div>
               <Field>
                  <Label htmlFor="name">Name</Label>

                  <Input
                     name="name"
                     type="text"
                     id="name"
                     placeholder={actualData?.name}
                     value={actualData?.name}
                     required
                     onChange={handleChange}
                  />
               </Field>

               <Field>
                  <Label htmlFor="email">Email</Label>

                  <Input
                     name="email"
                     type="email"
                     id="email"
                     placeholder={state.userData?.email}
                     disabled
                  />
               </Field>

               <Field>
                  <Label htmlFor="password">Password</Label>

                  <Input
                     name="password"
                     type="password"
                     id="password"
                     placeholder={actualData?.password}
                     value={actualData?.password}
                     required
                     onChange={handleChange}
                  />
               </Field>
            </div>

            <Button
               type="submit"
               disabled={loading}
               className={'edit'}>
               {loading ? 'Loading...' : 'Edit'}
            </Button>
         </Form>
      </Container>
   );
};

export { ExistingAccount };
