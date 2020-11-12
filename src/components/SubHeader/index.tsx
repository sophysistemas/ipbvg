import React from 'react';
import { IconBaseProps } from 'react-icons';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form } from '@unform/web';

import InputFilter from '../../components/Input/inputFilter';
import { Container } from './styles';
import LinkButton from '../Buttons/LinkButton';

interface Props {
  title: string;
  icon: React.ComponentType<IconBaseProps>;
  inputFilter?: any;
  firstButton?: any;
  secondButton?: any;
}

function handlerSubmit() {
  return true;
}

const Header: React.FC<Props> = ({
  title,
  icon: Icon,
  inputFilter,
  firstButton,
  secondButton,
}) => {

  return (
    <>
      <Container>
        <div className="container-title">
          <Icon size={25} color="#145A80" />
          <span>{title}</span>
        </div>

        <div className="container-buttons">
          {(inputFilter) && (
            <Form onSubmit={handlerSubmit}>
              <InputFilter type="text" name="filter" icon={AiOutlineSearch} placeholder = { inputFilter.placeholder }  />
            </Form>
          )}

          {(firstButton) && (
            <LinkButton
              description={firstButton.description}
              title={firstButton.title}
              model={firstButton.model}
              linkRoute={firstButton.linkRoute} />
          )}

          {(secondButton) && (
            <LinkButton
              description={secondButton.description}
              title={secondButton.title}
              model={secondButton.model}
              linkRoute={secondButton.linkRoute} />
          )}
        </div>
      </Container>
    </>
  );
}

export default Header;
