import { useRoutes } from "react-router-dom";
import Home from "./components/home";

function App() {
  const router = [
    {path:'/', element:<Home/>},
  ]

  return (
    useRoutes(router)
  )
}

export default App;
