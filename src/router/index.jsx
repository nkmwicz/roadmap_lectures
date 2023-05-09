import { Route, Routes } from "react-router-dom";
import { Intro } from "../pages/01Intro";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
}
