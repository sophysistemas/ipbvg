import React from 'react';
import { MdDelete } from 'react-icons/md';
import { Container } from './styles';

interface Props{
  id: number;
  url: string;
}

const DeleteLink: React.FC<Props> = ({ id, url }) => {

  function handleDelete(){
    //evento para deletar registro
    //console.log(`Deletar registro ${id}`);
  }

  return (
    <Container>
      <div className = "container-icon">
        <MdDelete size = { 15 } color = "#FFF" onClick = { handleDelete } title = "Excluir registro" />
      </div>
    </Container>
  );
}

export default DeleteLink;
