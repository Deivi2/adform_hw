import { Oval } from "common";
import React, { FC } from "react";
import { ICampaigns } from "typings/table";
interface IProps {
  data?: ICampaigns | undefined;
}

const Body: FC<IProps> = (props) => {
  const dataExist = props.data !== undefined && props.data.some(Boolean);

  if (!dataExist)
    return (
      <tbody>
        <tr>
          <td style={{ border: "none" }}>No data</td>
        </tr>
      </tbody>
    );

  return (
    <tbody>
      {dataExist &&
        props.data?.map((values, i) => (
          <tr key={`row-${i}`}>
            {Object.entries(values).map(([key, value], j) => {
              if (key === "active") {
                return (
                  <td key={`data-${j}`}>
                    {
                      <Oval
                        width={10}
                        height={10}
                        color={!!value ? "green" : "red"}
                      />
                    }
                  </td>
                );
              } else {
                return <td key={`data-${j}`}>{value}</td>;
              }
            })}
          </tr>
        ))}
    </tbody>
  );
};

export default Body;
