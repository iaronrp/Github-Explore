import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explore" />
      <Title>Explore reṕositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src={logoImg} alt="Perfil" />
          <div>
            <strong>Iaron Aires</strong>
            <p>API DE ESTOQUE</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src={logoImg} alt="Perfil" />
          <div>
            <strong>Iaron Aires</strong>
            <p>API DE ESTOQUE</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src={logoImg} alt="Perfil" />
          <div>
            <strong>Iaron Aires</strong>
            <p>API DE ESTOQUE</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
