// @ts-ignore
import React, { PropsWithChildren } from 'react';
import Row from '../layout/Row';
import Col from '../layout/Col';
import Input from './Input';
import Select from './Select';
import Field from '../../models/forms/Field';
import EInputTypes from '../../models/forms/EInputTypes';

type FormProps = {
  fields: Field[];
  data: object;
  className?: string;
  onInput: (data: object) => void;
  disabled?: boolean;
};

export default function Form(props: PropsWithChildren<FormProps>) {
  const handleInput = (field: Field, value: string|number) => {
    const _state = {};
    _state[field.getKey()] = value;

    props.onInput(_state);
  };

  const renderValue = (field: Field): string|number => {
    return props.data[field.getKey()] || (field['default'] || undefined);
  };

  const renderInput = (field:Field) => {
    const _type = field.getType();

    if (_type === EInputTypes.SELECT) {
      return <Select
        value={renderValue(field)}
        label={field.getLabel()}
        options={field.getOptions()}
        disabled={props.disabled}
        onChange={e => {
          const input = e.target;

          handleInput(field, input.value);
        }}
      />
    }

    return (
      <Input
        type={field.getType()}
        label={field.getLabel()}
        placeholder={field.getPlaceholder()}
        key={field.getKey()}
        value={renderValue(field)}
        disabled={props.disabled}
        onInput={(e: React.FormEvent<HTMLInputElement>) => {
          const input: HTMLInputElement = e.target;

          handleInput(field, input.value);
        }}
      />
    )
  };

  const renderField = (field: Field) => {
    return renderInput(field);
  };

  return(
    <form className={`form ${props.className}`}>
      <Col>
        {
          props.fields.map((field, index) => {
            return (
              <Row
                className={`justify-center ${index < 1 ? '' : 'mt-5'}`}
                key={index}
              >
                {
                  (
                    renderField(field)
                  )
                }
              </Row>
            )
          })
        }
      </Col>
      {
        props.children
      }
    </form>
  )
}