import React from "react";
import { StatusBar } from "expo-status-bar";
import { Home } from "./src/Screens/Home";
import { Login } from "./src/Screens/Login";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Login />
    </>
  );
}
