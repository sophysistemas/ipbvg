import React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { Container } from './styles';

interface Props{
  id: number;
  url: string;
}

const EditLink: React.FC<Props> = ({ id, url }) => {

  function handleEdit(){
    //redirecionar para a pagina de edição
    //console.log(`Editar id ${id}`);
  }

  return (
    <Container>
      <div className = "container-icon">
        <MdModeEdit size = { 15 } color = "#FFF" onClick = {handleEdit} title = "Editar registro" />
      </div>
    </Container>
  );
}

export default EditLink;
