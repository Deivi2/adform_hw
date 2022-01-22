import { Table } from "./components";
import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("campaignsData", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );

  if (isLoading) return <>Loading Data</>;

  return <Table data={data} />;
}

export default App;
