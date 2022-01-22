import React, { FC } from "react";
import { IUsers } from "../../typings/table";
import { Root } from "./styles";

interface ITable {
  data: IUsers;
}

const Table: FC<ITable> = (props) => {
  return (
    <Root>
      <thead>
        <tr>
          <th>Row</th>
          <th>Row</th>
          <th>Row</th>
        </tr>
      </thead>
    </Root>
  );
};

export default Table;
