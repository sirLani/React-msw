import { createContext } from "react";
import useSWR from "swr";

const ProductContext = createContext();

function getData() {
  return fetch("/wines").then((response) => response.json());
}

//useSWR (stale-while-revalidate) is React Hooks for Data Fetching
function DataContext(props) {
  const { data, error } = useSWR("/wines", getData);
  return (
    <ProductContext.Provider value={{ data, error }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export { DataContext, ProductContext };
