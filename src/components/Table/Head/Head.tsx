import React, { FC, useMemo } from "react";
import { ICampaigns } from "typings/table";
import { camelToText } from "utils";

interface IProps {
  data?: ICampaigns;
}

const Head: FC<IProps> = (props) => {
  const firstElement = useMemo(() => {
    const data = props.data?.[0];
    if (data) data.active = undefined;
    return props.data?.some(Boolean) ? props.data?.[0] : {};
  }, [props.data]);

  const headers = useMemo(() => Object.keys(firstElement), [firstElement]);

  return (
    <thead>
      <tr>
        {headers.map((header, i) => (
          <th key={`header-${i}`}>{camelToText(header)}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Head;
