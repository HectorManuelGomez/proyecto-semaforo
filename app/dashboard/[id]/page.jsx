// const fetchData = () => {
//   return fetch("").then((rest) => rest.json());
// };

export default function Dashboard({ params }) {
  const { id } = params;
  // const data = await fetchData()
  return <h1>Estado semaforo {id}</h1>;
}
