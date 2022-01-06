import { Routes, Route } from "react-router-dom";
import {
  Home,
  Draw,
  League,
  Counter,
  Numbers,
  Names,
  NotFound
} from "./routes";

function PageRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='draw' element={<Draw />} />
      <Route path='draw/league' element={<League />}>
        <Route path='result' element={<></>} />
      </Route>
      <Route path='draw/counter' element={<Counter />} />
      <Route path='draw/number' element={<Numbers />} />
      <Route path='draw/names' element={<Names />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default PageRoutes
