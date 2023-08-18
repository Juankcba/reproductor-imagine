import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import CardPlayer from "../components/Ui/CardPlayer";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [canciones, setCanciones] = useState([
    {
      name: "Natural",
      band: "Imagine Dragons",
      duration: "03:09",
      id: 1,
      url: "/canciones/natural.mp3",
    },
    {
      name: "Boomerang",
      band: "Imagine Dragons",
      duration: "03:07",
      id: 2,
      url: "/canciones/boomerang.mp3",
    },
    {
      name: "Machine",
      band: "Imagine Dragons",
      duration: "03:01",
      id: 3,
      url: "/canciones/machine.mp3",
    },
    {
      name: "Cool Out",
      band: "Imagine Dragons",
      duration: "03:37",
      id: 4,
      url: "/canciones/cool-out.mp3",
    },
    {
      name: "Bad Liar",
      band: "Imagine Dragons",
      duration: "04:20",
      id: 5,
      url: "/canciones/bad-liar.mp3",
    },
    {
      name: "West Coast",
      band: "Imagine Dragons",
      duration: "03:37",
      id: 6,
      url: "/canciones/west-coast.mp3",
    },
    {
      name: "Zero",
      band: "Imagine Dragons",
      duration: "03:30",
      id: 7,
      url: "/canciones/zero.mp3",
    },
    {
      name: "Bullet in a Gun",
      band: "Imagine Dragons",
      duration: "03:24",
      id: 8,
      url: "/canciones/bullet-in-a-gun.mp3",
    },
    {
      name: "Digital",
      band: "Imagine Dragons",
      duration: "03:21",
      id: 9,
      url: "/canciones/digital.mp3",
    },
    {
      name: "Only",
      band: "Imagine Dragons",
      duration: "03:00",
      id: 10,
      url: "/canciones/only.mp3",
    },
    {
      name: "Stuck",
      band: "Imagine Dragons",
      duration: "03:10",
      id: 11,
      url: "/canciones/stuck.mp3",
    },
    {
      name: "Love",
      band: "Imagine Dragons",
      duration: "02:46",
      id: 12,
      url: "/canciones/love.mp3",
    },
    {
      name: "Birds",
      band: "Imagine Dragons",
      duration: "03:39",
      id: 13,
      url: "/canciones/birds.mp3",
    },
    {
      name: "Burn Out",
      band: "Imagine Dragons",
      duration: "04:33",
      id: 14,
      url: "/canciones/burn-out.mp3",
    },
    {
      name: "Real Life",
      band: "Imagine Dragons",
      duration: "04:07",
      id: 15,
      url: "/canciones/real-life.mp3",
    },
  ]);
  return (
    <Layout>
      <h1>Hola Mundo</h1>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center p-[40px]">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          <div className="sm:cols-span-1 md:col-span-2">
            <CardPlayer canciones={canciones} />
          </div>
          <div className="col-span-1">
            <Table aria-label="Imagine Dragons">
              <TableHeader>
                <TableColumn>NOMBRE</TableColumn>
                <TableColumn>BANDA</TableColumn>
                <TableColumn>DURACIÓN</TableColumn>
              </TableHeader>
              <TableBody>
                {canciones.map((cancion) => (
                  <TableRow key={cancion.id}>
                    <TableCell>{cancion.name}</TableCell>
                    <TableCell>{cancion.band}</TableCell>
                    <TableCell className="text-center">
                      {cancion.duration}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
