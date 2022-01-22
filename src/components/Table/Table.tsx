import React, { FC, useMemo } from "react";
import { toLocaleStringWithCurrency } from "utils";
import { ICampaigns } from "../../typings/table";
import { Body } from "./Body";
import { Head } from "./Head";
import { Root } from "./styles";

interface IProps {
  data: ICampaigns;
}

const Table: FC<IProps> = (props) => {
  const parsedData = useMemo(() => {
    return [...props.data].map((cur) => {
      cur.Budget = toLocaleStringWithCurrency(cur.Budget, "USD");
      new Date(cur.endDate) < new Date()
        ? (cur.active = false)
        : (cur.active = true);

      return cur;
    });
  }, [props.data]);

  const headers = useMemo(() => Object.keys(parsedData[0]), [parsedData]);

  return (
    <Root>
      <Head headers={headers} />
      <Body data={parsedData} />
    </Root>
  );
};

export default Table;
