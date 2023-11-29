import { BrowserRouter } from "react-router-dom";
import RoutesApp  from "./routes";


export default function App(){
  return(
    <div>
      <BrowserRouter>
      <RoutesApp />
      </BrowserRouter>
    </div>
  )
}