"use client";
import { Button, Grid } from "@mui/material";
import { DataGrid, GridColumns, GridCellParams } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import semaforo from "./semaforo.png";
import PocketBase from "pocketbase";

function getTabla(id): any {
  const listaSemaforos = {
    1: "Cr80 x Dg43 Sur",
    2: "Cl34 x Cr28",
    3: "Cra13 x Cl41",
  };
  const error = "Error, se requiere semaforo";
  const semaforo = listaSemaforos[id] || error;
  return semaforo;
}

export default function Dashboard({ params }) {
  const [data, setData] = useState([]);
  const { id } = params;
  const columns: GridColumns = [
    { headerName: "Rojo", field: "rojo", width: 80, headerAlign: "center" },
    {
      headerName: "Amarillo",
      field: "amarillo",
      width: 80,
      headerAlign: "center",
    },
    { headerName: "Verde", field: "verde", width: 80, headerAlign: "center" },
    { headerName: "rojo2", field: "rojo2", width: 80, headerAlign: "center" },
    {
      headerName: "amarillo2",
      field: "amarillo2",
      width: 80,
      headerAlign: "center",
    },
    { headerName: "verde2", field: "verde2", width: 80, headerAlign: "center" },
    { headerName: "Rojo3", field: "rojo3", width: 80, headerAlign: "center" },
    {
      headerName: "Amarillo3",
      field: "amarillo3",
      width: 80,
      headerAlign: "center",
    },
    { headerName: "Verde3", field: "verde3", width: 80, headerAlign: "center" },
    { headerName: "rojo", field: "rojo4", width: 80, headerAlign: "center" },
    {
      headerName: "amarillo",
      field: "amarillo4",
      width: 80,
      headerAlign: "center",
    },
    { headerName: "verde", field: "verde4", width: 80, headerAlign: "center" },
  ];

  const getData = async () => {
    try {
      const db = new PocketBase("http://127.0.0.1:8090");
      const info = await db.records.getList("grupo1");
      console.log(info);
      setData(info?.items as any[]);
    } catch (error) {
      console.log(error);
    }
  };

  const postSemaforoData = async (id) => {
    try {
      const request = await fetch(`/uribroker`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      const response = await request.json();
      if (response.msn === "SUCCESS") {
        setData(response.data);
      } else {
        setData([]);
      }
    } catch (error) {
      setData([]);
    }
  };

  const getSemaforoData = async (id) => {
    try {
      const request = await fetch(`/uribroker?id=${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const response = await request.json();
      if (response.msn === "SUCCESS") {
        setData(response.data);
      } else {
        setData([]);
      }
    } catch (error) {
      setData([]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getSemaforoData(id);
    }, 1000);
    return () => clearInterval(interval);
  });

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
        {/* <DataGrid rows={data} columns={columns} density="compact" /> */}
        <Grid item sm={6}>
          {id == 1 && <h2>Grupo 1</h2>}
          {data.id(JSON).includes("1")}
          <Image src={semaforo} alt="Semaforo" width={400} height={400} />
          <Image src={semaforo} alt="Semaforo" width={400} height={400} />
          <Image src={semaforo} alt="Semaforo" width={400} height={400} />
        </Grid>
        {/* Test */}
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
