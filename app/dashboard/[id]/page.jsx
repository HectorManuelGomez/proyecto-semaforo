// const fetchData = () => {
//   return fetch("").then((rest) => rest.json());
// };
"use client";
import { Button, Grid } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Link from "next/link";

const getTabla = (id) => {
  const listaSemaforos = {
    1: "Cr80 x Dg43 Sur",
    2: "Cl34 x Cr28",
    3: "Cra13 x Cl41",
  };
  const error = "Error, se requiere semaforo";
  const semaforo = listaSemaforos[id] || error;
  return semaforo;
};



export default function Dashboard({ params }) {
  const { id } = params;
  // const data = await fetchData()
  return (
    <>
      <h1>Estado semaforo {getTabla(id)}</h1>
      <Grid
        container
        item
        sm={12}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        {/* <DataGrid rows={data} /> */}
      </Grid>
      <Link href="/dashboard">
        <Button variant="contained">Volver</Button>
      </Link>
    </>
  );
}
