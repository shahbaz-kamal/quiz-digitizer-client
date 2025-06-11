import "./App.css";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route index element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
