import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MovieDetails from "./pages/MovieDetails";
import Layout from "./comopents/Layout";
import Trailer from "./trailer/Trailer";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/movie/:id/videos" element={<Trailer/>}/>
      </Route>
    </Routes>
  );
}

export default App;





