import React from 'react';
import { IconBaseProps } from 'react-icons';
import { MdPlayArrow } from 'react-icons/md';
import { Container } from './styles';

interface Props {
  title: string,
  icon: React.ComponentType<IconBaseProps>;
  total: number;
}

const Card: React.FC<Props> = ({
  title,
  icon: Icon,
  total,
}) => {
  return (
    <>
      <Container>
        <div className="card-title">
          <MdPlayArrow size = { 16 } />{ title }
        </div>
        
        <div className="card-total">
          <Icon size = { 75 } />
          <span className = "total">{ total }</span>
        </div>
      </Container>
    </>
  )
}

export default Card;
