// const fetchData = () => {
//   return fetch("").then((rest) => rest.json());
// };

"use client";
import { Button, Grid } from "@mui/material";
import { DataGrid, GridColumns, GridCellParams } from "@mui/x-data-grid";
import Link from "next/link";
import Image from "next/image";
import semaforo from "./semaforo.png";

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

async function getData() {
  const res = await fetch(
    "http://127.0.0.1:8090//api/collections/grupo1/records"
  );
  const data = await res.json();
  console.log(data);
}

export default function Dashboard({ params }) {
  const { id } = params;
  const SS = "ss";
  const TIME = "time";
  const columns: GridColumns = [
    { headerName: SS, field: SS, width: 80, headerAlign: "center" },
    { headerName: TIME, field: TIME, width: 80, headerAlign: "center" },
  ];
  getData();

  // const data = await fetchData()
  return (
    <>
      <h1>Estado semáforo {getTabla(id)}</h1>
      <Grid
        container
        item
        sm={12}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        {/* <DataGrid rows={data} columns={columns} density="compact"/> */}

        <Grid item sm={6}>
          {id == 2 && <h2>Grupo 2</h2>}
          {id == 3 && <h2>Grupo 1</h2>}
          {id == 1 && <h2>Grupo 1</h2>}
          <Image src={semaforo} alt="Semaforo" width={400} height={400} />
          <Image src={semaforo} alt="Semaforo" width={400} height={400} />
          <Image src={semaforo} alt="Semaforo" width={400} height={400} />
        </Grid>
        <Grid item sm={6}>
          {id == 3 || (id == 2 && <h2>Grupo 4</h2>)}
          {id == 1 && <h2>Grupo 2</h2>}
          <Image src={semaforo} alt="Semaforo" width={400} height={400} />
          <Image src={semaforo} alt="Semaforo" width={400} height={400} />
        </Grid>
        <Grid item sm={6}>
          {id == 2 && <h2>Grupo 91</h2>}
          {id == 3 && <h2>Grupo 21</h2>}
          {id == 1 && <h2>Grupo 3</h2>}
          <Image src={semaforo} alt="Semaforo" width={400} height={400} />
          <Image src={semaforo} alt="Semaforo" width={400} height={400} />
        </Grid>
        <Grid item sm={6}>
          {id == 2 && <h2>Grupo 22</h2>}
          {id == 3 && <h2>Grupo 24</h2>}
          {id == 1 && <h2>Grupo 4</h2>}
          <Image src={semaforo} alt="Semaforo" width={400} height={400} />
        </Grid>
        {id == 1 && (
          <Grid item sm={6}>
            <h2>Grupo 5</h2>
            <Image src={semaforo} alt="Semaforo" width={400} height={400} />
          </Grid>
        )}
      </Grid>

      <br></br>
      <Link href="/dashboard">
        <Button variant="contained">Volver</Button>
      </Link>
    </>
  );
}
