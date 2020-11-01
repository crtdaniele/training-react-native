import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/_shared/route";

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}
