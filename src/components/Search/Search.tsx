import { Input } from "common";
import { ChangeEvent, Dispatch, FC, SyntheticEvent } from "react";
import DatePicker from "react-datepicker";
import { IDateRange } from "typings/table";
import { DatePickers, Root } from "./style";
import "react-datepicker/dist/react-datepicker.css";

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
          onChange={(date, e) => {
            props.setDate((prevVal) => ({ ...prevVal, startDate: date }));
            // props.handleDateRange("start", date, e);
          }}
          placeholderText={"Start date"}
        />
        <DatePicker
          selected={props.date.endDate}
          onChange={(date, e) => {
            props.setDate((prevVal) => ({ ...prevVal, endDate: date }));
            // props.handleDateRange("end", date, e);
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
