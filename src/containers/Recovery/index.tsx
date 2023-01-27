import React from 'react';
import { H1, Paragraph, Form, Section } from './index.styled';
import { InputField } from '../../components/InputField';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/index.styled';
import { SaleIcon } from '../../assets/icons/SaleIcon';

const Recovery = () => {
   const navigate = useNavigate();

   const sendEmail = () => { //GO TO EMAIL SENT PAGE
      navigate('/l/email-sent');
   }

   return (
      <Section>
         <SaleIcon width='100px' height='100px'/>
         <H1>Create a new password</H1>
         <Paragraph>Enter a new password for your account</Paragraph>
         <Form onSubmit={sendEmail}>
            <InputField 
                  label={{text: 'New password', htmlFor:'new'}}
                  input={{type: 'password', placeholder: '**********'}} 
            />

            <InputField 
               label={{text: 'Repeat password', htmlFor:'repeat'}}
               input={{type: 'password', placeholder: '**********'}} 
            />

            <Button type="submit">Confirm</Button>
         </Form>
      </Section>
   );
};

export { Recovery };