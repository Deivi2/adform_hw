import React, { FC, useMemo } from "react";
import { toLocaleStringWithCurrency } from "utils";
import { ICampaigns } from "../../typings/table";
import { Body } from "./Body";
import { Head } from "./Head";
import { Root } from "./styles";

interface IProps {
  data?: ICampaigns;
  searchData?: ICampaigns;
}

const Table: FC<IProps> = (props) => {
  const parsedData = useMemo(() => {
    return props.searchData?.map((cur) => {
      cur.Budget = toLocaleStringWithCurrency(cur.Budget, "USD");
      new Date(cur.endDate) >= new Date()
        ? (cur.active = true)
        : (cur.active = false);

      return cur;
    });
  }, [props.searchData]);

  return (
    <Root>
      <Head data={props.data} />
      <Body data={parsedData} />
    </Root>
  );
};

export default Table;
