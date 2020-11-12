import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FiLogOut, FiUser} from 'react-icons/fi';
import { FaUsers, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/logo-header.png';
import { Container, ContainerUser } from './styles';

interface Props {
  admin: boolean;
}

const Header: React.FC<Props> = ({ admin }) => {

  const dashboard = (admin) ? "/dashboard" : "/indicators";

  return (
    <>
      <Container>
        <div className="div-logo">
          <img src={imgLogo} alt="Lima & Lima" />
        </div>

        <div className="header-icons">
          <div className="div-icon">
            <Link to={dashboard} title="Página inicial"><AiOutlineHome size={30} /></Link>
            <span>Início</span>
          </div>

          <div className="div-icon">
            <a href="" title="Lista de membros"><FaUsers size={30} /></a>
            <span>Lista de membros</span>
          </div>

          <div className="div-icon">
            <Link to="/configuration" title="Novo membro"><FaUserPlus size={30} /></Link>
            <span>Novo membro</span>
          </div>

          <ContainerUser className="logout">
            <div className="div-user">

              <div className="div-user-icon">
                <FiUser size={30} />
                <span>Usuário A</span>
              </div>

              <ul>
                <li><Link to="/" title="Dados do usuário"><FiUser size={12} />Meus dados</Link></li>
                <li>
                  <Link to="/" title="Sair do sistema"><FiLogOut size={12} />Sair</Link>
                </li>
              </ul>
            </div>
          </ContainerUser>
        </div>
      </Container>
    </>
  );
}

export default Header;
