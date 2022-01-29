import { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ICampaign, ICampaigns, IDateRange } from "typings/table";
import { Search, Table } from "./components";

function App() {
  const [searchData, setSearchData] = useState<ICampaigns>();
  const [searchValue, setSearchValue] = useState<string>();
  const [date, setDate] = useState<IDateRange>({
    startDate: null,
    endDate: null,
  });

  const { startDate, endDate } = date;

  const { isLoading, error, data } = useQuery("campaignsData", () =>
    fetch(
      "https://my-json-server.typicode.com/Deivi2/adform_hw/campaigns"
    ).then((res) => {
      return res.json();
    })
  );

  useEffect(() => {
    const endBeforeStart = !!startDate && !!endDate && startDate > endDate;
    if (!!endBeforeStart) return;
    if (!startDate && !endDate && !searchValue) return setSearchData(data);

    const newSearchData = data
      ?.filter((values: ICampaign) =>
        values.name
          .toLocaleLowerCase()
          ?.includes(`${searchValue?.toLocaleLowerCase()}`)
      )
      ?.filter((values: ICampaign) => {
        const campaignStartDate = values.startDate;
        const campaignEndDate = values.endDate;
        const selectStartDate =
          !!startDate && new Date(campaignStartDate) >= startDate;
        const selectEndDate = !!endDate && new Date(campaignEndDate) <= endDate;
        const selectOnlyStartDate = !endDate && selectStartDate;
        const selectOnlyEndDate = !startDate && selectEndDate;
        const noDateSelected = !startDate && !endDate;

        if (noDateSelected) {
          return true;
        } else if (selectStartDate && selectEndDate) {
          return true;
        } else if (selectOnlyStartDate) {
          return true;
        } else if (selectOnlyEndDate) {
          return true;
        } else {
          return false;
        }
      });

    setSearchData(newSearchData);
  }, [startDate, endDate, searchValue, data]);

  const handleSearchByName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  if (isLoading) return <>Loading Data</>;
  if (error) return <>Data error</>;

  return (
    <>
      <Search date={date} setDate={setDate} handleSearch={handleSearchByName} />
      <Table searchData={searchData} data={data} />
    </>
  );
}

export default App;
