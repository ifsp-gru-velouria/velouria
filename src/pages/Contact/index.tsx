import { FC, ReactElement } from 'react';

import { useForm } from 'react-hook-form';

import { RootLayout } from '../../components/Layout';

import './index.css';

interface FormData {
  body: string;
  from: string;
  name: string;
  subject: string;
}

const Contact: FC = (): ReactElement => {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <RootLayout>
      <h3>Fale Conosco</h3>

      <p>Alô? Alô? Nos mande um e-mail para discutirmos sobre como podemos te ajudar.</p>

      <form>
      <div className='form__container'>
        <div className='input__container'>
        <input className='input' placeholder='Nome' type='text' {...register('name', { required: true })} />
        <input className='input' placeholder='E-mail' type='email' {...register('from', { required: true })} />
        <select className='input' {...register('subject', { required: true })}>
          <option>Consultoria</option>
          <option>Capacitação</option>
          <option>Projetos de Engenharia</option>
          <option>Prestação de Serviços</option>
          <option>Outros assuntos</option>
        </select>
        </div>
        <textarea className='form__textarea' {...register('body', { required: true })}></textarea>
        </div>
        <button className='form__button'>Enviar</button>
      </form>
    </RootLayout>
  );
};

export default Contact;
