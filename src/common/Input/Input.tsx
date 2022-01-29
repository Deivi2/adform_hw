import React, { ChangeEvent, FC } from "react";
import { Root } from "./styles";

interface IProps {
  type: string;
  label: string;
  name: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

const Input: FC<IProps> = (props) => {
  return (
    <Root>
      <input
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        maxLength={20}
        placeholder={props.label}
      />
      {/* <Label>{props.label}</Label> */}
    </Root>
  );
};

export default Input;
