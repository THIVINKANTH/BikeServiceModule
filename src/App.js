import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./BikeServiceForm";
import { Home } from "./HomePage";
import { ListallbikeDetails } from "./ListallBikeValues";
import { ListallbServiceDetails } from "./ListallServiceDetails";
import { Login } from "./LoginPage";
import { Newservicedetails } from "./NewserviceDetails";



function App() {
  return (
    <>
    {
      (sessionStorage.getItem("auth"))?
      <>
      <BrowserRouter>
    <Home/>
    <Routes>
      <Route path="createbikedetails" exact element={<Register/>}/>
      <Route path="listallbikedetails" exact element={<ListallbikeDetails/>}/>
      <Route path="createservicedetails" exact element={<Newservicedetails/>}/>
      <Route path="listallservicedetails" exact element={<ListallbServiceDetails/>}/>
    </Routes>
    </BrowserRouter>
      </>
      :
      <>
      <Login/>
      </>
    }
    </>
  );
}

export default App;
