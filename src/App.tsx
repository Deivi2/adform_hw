import { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ICampaign, ICampaigns, IDateRange } from "typings/table";
import { Search, Table, TextBox } from "./components";

function App() {
  const [fetchedData, setFetchedData] = useState<ICampaigns>();
  const [searchData, setSearchData] = useState<ICampaigns>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [date, setDate] = useState<IDateRange>({
    startDate: null,
    endDate: null,
  });
  const [campaignsError, setCampaignsError] = useState<string>();

  const { startDate, endDate } = date;

  const { isLoading, error, data } = useQuery("campaignsData", () =>
    fetch(
      "https://my-json-server.typicode.com/Deivi2/adform_hw/campaigns"
    ).then((res) => {
      return res.json();
    })
  );

  useEffect(() => {
    setFetchedData(data);
  }, [data]);

  useEffect(() => {
    const endBeforeStart = !!startDate && !!endDate && startDate > endDate;
    if (!!endBeforeStart) setSearchData([]);
    if (!startDate && !endDate && !searchValue)
      return setSearchData(fetchedData);

    const newSearchData = fetchedData
      ?.filter((values: ICampaign) =>
        values.name
          .trim()
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
  }, [startDate, endDate, searchValue, data, fetchedData]);

  const handleSearchByName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const addCampaigns = (campaigns?: string) => {
    try {
      const campaignsJson = !!campaigns ? JSON.parse(campaigns) : [];
      const existingData = !!fetchedData ? fetchedData : [];
      setFetchedData([...existingData, ...campaignsJson]);
    } catch (e: any) {
      setCampaignsError(e.message);
    }
  };

  if (isLoading) return <>Loading Data</>;
  if (error) return <>Data error</>;

  return (
    <>
      <Search date={date} setDate={setDate} handleSearch={handleSearchByName} />
      <Table searchData={searchData} data={data} />
      <TextBox addCampaigns={addCampaigns} campaignsError={campaignsError} />
    </>
  );
}

export default App;
