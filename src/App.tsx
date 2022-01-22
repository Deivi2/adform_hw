import { Table } from "./components";
import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("campaignsData", () =>
    fetch(
      "https://my-json-server.typicode.com/Deivi2/adform_hw/campaigns"
    ).then((res) => res.json())
  );

  if (isLoading) return <>Loading Data</>;
  if (error) return <>Data error</>;

  return <Table data={data} />;
}

export default App;
