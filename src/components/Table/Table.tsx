import React, { FC, useMemo } from "react";
import { ICampaigns } from "../../typings/table";
import { Body } from "./Body";
import { Head } from "./Head";
import { Root } from "./styles";

interface IProps {
  data: ICampaigns;
}

const Table: FC<IProps> = (props) => {
  const headers = useMemo(() => Object.keys(props.data[0]), [props.data]);

  return (
    <Root>
      <Head headers={headers} />
      <Body data={props.data} />
    </Root>
  );
};

export default Table;
