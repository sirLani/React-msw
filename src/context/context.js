import useSWR from "swr";

// const ProductContext = createContext();

function getData() {
  return fetch("/wines").then((response) => response.json());
}
// function DataContext(props) {
//   const result = useSWR("wines", getData);
//   return (
//     <ProductContext.Provider value={{ ...result }}>
//       {props.children}
//     </ProductContext.Provider>
//   );
// }

function useProducts() {
  const { data, error } = useSWR("wines", getData);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { useProducts };
