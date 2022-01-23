import { Search, Table } from "./components";
import { useQuery } from "react-query";
import { ChangeEvent, useEffect, useState } from "react";
import { ICampaigns, ICampaign } from "typings/table";

function App() {
  const [searchData, setSearchData] = useState<ICampaigns>();

  const { isLoading, error, data } = useQuery("campaignsData", () =>
    fetch(
      "https://my-json-server.typicode.com/Deivi2/adform_hw/campaigns"
    ).then((res) => {
      return res.json();
    })
  );

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  const handleSearchByName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const searchedData = data.filter((val: ICampaign) =>
      val.name.toLocaleLowerCase()?.includes(`${value.toLocaleLowerCase()}`)
    );
    setSearchData(searchedData);
  };

  if (isLoading) return <>Loading Data</>;
  if (error) return <>Data error</>;

  return (
    <>
      <Search handleSearch={handleSearchByName} />
      <Table searchData={searchData} data={data} />
    </>
  );
}

export default App;
