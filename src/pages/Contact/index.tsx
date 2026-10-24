import { useForm } from 'react-hook-form';

import styled from 'styled-components';

import { RootLayout } from '../../components/Layout';

interface FormData {
    body: string;
    from: string;
    name: string;
    subject: string;
}

export default function Page() {
    const { register } = useForm<FormData>();

    return (
        <RootLayout>
        <h3>Fale Conosco</h3>

        <p>Alô? Alô? Nos mande um e-mail para discutirmos sobre como podemos te ajudar.</p>

        <StyledForm>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <div style={{ display: 'flex', gap: '1rem'}}>
        <StyledInputGroup>
        <StyledInput placeholder='Nome' type='text' {...register('name', { required: true })} />
        <StyledInput placeholder='E-mail' type='email' {...register('from', { required: true })} />
        <StyledSelect {...register('subject', { required: true })}>
        <option>Consultoria</option>
        <option>Capacitação</option>
        <option>Projetos de Engenharia</option>
        <option>Prestação de Serviços</option>
        <option>Outros assuntos</option>
        </StyledSelect>
        </StyledInputGroup>
        <StyledTextarea {...register('body', { required: true })}></StyledTextarea>
        </div>
        <StyledButton>Enviar</StyledButton>
        </div>
        </StyledForm>
        </RootLayout>
    );
}

const StyledButton = styled.button`
border: 2px solid black;
border-radius: 9999px;
font-weight: bold;
height: 48px;
width: 160px;
`;

const StyledForm = styled.form`
display: flex;
gap: 1rem;
`;

const StyledInput = styled.input`
border: 2px solid transparent;
border-radius: 1rem;
height: 48px;
outline: none;
padding: 1rem;
width: 280px;
`;

const StyledInputGroup = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

const StyledSelect = styled.select`
border: 2px solid transparent;
border-radius: 1rem;
height: 48px;
outline: none;
padding: 1rem;
width: 280px;
`;

const StyledTextarea = styled.textarea`
border: 2px solid transparent;
border-radius: 1rem;
padding: 1rem;
min-width: 280px;
`;
