import { Input } from "common";
import { ChangeEvent, Dispatch, FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IDateRange } from "typings/table";
import { DatePickers, Root } from "./style";

interface IProps {
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  date: IDateRange;
  setDate: Dispatch<React.SetStateAction<IDateRange>>;
}

const Search: FC<IProps> = (props) => {
  const startDate = props.date.startDate;
  const endDate = props.date.endDate;
  const endBeforeStart = !!startDate && !!endDate && startDate > endDate;

  return (
    <Root>
      <DatePickers>
        <DatePicker
          selected={props.date.startDate}
          onChange={(date) => {
            props.setDate((prevVal) => ({ ...prevVal, startDate: date }));
          }}
          placeholderText={"Start date"}
        />
        <DatePicker
          selected={props.date.endDate}
          onChange={(date) => {
            props.setDate((prevVal) => ({ ...prevVal, endDate: date }));
          }}
          placeholderText={"End date"}
        />
      </DatePickers>
      {endBeforeStart && (
        <div style={{ color: "red" }}>End date can't be before start date</div>
      )}
      <Input
        type={"text"}
        label={"Search by name"}
        name={"search"}
        onChange={props.handleSearch}
      />
    </Root>
  );
};

export default Search;
