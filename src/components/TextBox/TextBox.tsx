import React, { ChangeEvent, FC, useState } from "react";
import { AddButton, Root } from "./styles";

interface IProps {
  addCampaigns: (campaigns?: string) => void;
  campaignsError?: string;
}

const TextBox: FC<IProps> = (props) => {
  const [campaigns, setCampaigns] = useState<string>(JSON.stringify(data));

  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setCampaigns(value);
  };

  return (
    <>
      <Root>
        <textarea
          rows={10}
          cols={100}
          value={campaigns}
          onChange={handleInput}
        ></textarea>
        <AddButton onClick={() => props.addCampaigns(campaigns)}>
          Add campaigns
        </AddButton>
      </Root>
      {!!props.campaignsError && (
        <div style={{ color: "red" }}>{props.campaignsError}</div>
      )}
    </>
  );
};

export default TextBox;

const data = [
  {
    id: 1,
    name: "Divavu",
    startDate: "9/19/2020",
    endDate: "3/9/2021",
    Budget: 88377,
    userId: 3,
  },
  {
    id: 2,
    name: "Jaxspan",
    startDate: "11/21/2017",
    endDate: "2/21/2018",
    Budget: 608715,
    userId: 6,
  },
  {
    id: 3,
    name: "Miboo",
    startDate: "11/1/2020",
    endDate: "6/20/2021",
    Budget: 239507,
    userId: 7,
  },
  {
    id: 4,
    name: "Trilith",
    startDate: "8/25/2017",
    endDate: "11/30/2022",
    Budget: 179838,
    userId: 1,
  },
  {
    id: 5,
    name: "Layo",
    startDate: "11/28/2017",
    endDate: "3/10/2021",
    Budget: 837850,
    userId: 9,
  },
  {
    id: 6,
    name: "Photojam",
    startDate: "7/25/2017",
    endDate: "6/23/2021",
    Budget: 858131,
    userId: 3,
  },
  {
    id: 7,
    name: "Blogtag",
    startDate: "6/27/2017",
    endDate: "1/15/2023",
    Budget: 109078,
    userId: 2,
  },
  {
    id: 8,
    name: "Rhyzio",
    startDate: "10/13/2017",
    endDate: "1/25/2018",
    Budget: 272552,
    userId: 4,
  },
  {
    id: 9,
    name: "Zoomcast",
    startDate: "9/6/2017",
    endDate: "11/10/2017",
    Budget: 301919,
    userId: 8,
  },
  {
    id: 10,
    name: "Realbridge",
    startDate: "3/5/2018",
    endDate: "10/2/2022",
    Budget: 505602,
    userId: 5,
  },
];
