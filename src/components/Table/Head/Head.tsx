import React, { FC } from "react";
import { camelToText } from "utils";

interface IProps {
  headers: Array<string>;
}

const Head: FC<IProps> = (props) => {
  return (
    <thead>
      <tr>
        {props.headers.map((header, i) => (
          <th key={`header-${i}`}>{camelToText(header)}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Head;
