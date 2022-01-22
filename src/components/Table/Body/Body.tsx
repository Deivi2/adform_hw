import React, { FC } from "react";
import { ICampaigns } from "typings/table";
interface IProps {
  data: ICampaigns;
}

const Body: FC<IProps> = (props) => {
  return (
    <tbody>
      {props.data.map((values, i) => (
        <tr key={`row-${i}`}>
          {Object.values(values).map((value, j) => (
            <td key={`data-${j}`}>{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
