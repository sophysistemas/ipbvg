import React, { useRef, useEffect } from 'react';
import ReactSelect, { OptionTypeBase, Props as SelectProps, } from 'react-select';
import { useField } from '@unform/core';

import {Container} from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

const Select: React.FC<Props> = ({ name, ...rest }) => {

  const style = {
    control: (base: any) => ({
      ...base,
      border: 0, // This line disable the blue border
      boxShadow: "none",
      height: '28px',
      minHeight: '28px',
    }),

    placeholder: (defaultStyles: any) => ({
      ...defaultStyles,
          color: '#b4b4b4',
    })

  };

  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
        styles={style}
      />
    </Container>
  );
};

export default Select;
