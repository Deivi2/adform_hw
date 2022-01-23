import { Input } from "common";
import { ChangeEvent, FC } from "react";
import { Root } from "./style";

interface IProps {
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<IProps> = (props) => {
  return (
    <Root>
      <div>!!!</div>
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
