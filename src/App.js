import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reading } from "./BikeReadPage";
import { Register } from "./BikeServiceForm";
import { Updating } from "./BikeUpdatePage";
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
      <Route path="reading/:myid" exact element={<Reading/>}/>
      <Route path="updating/:myid" exact element={<Updating/>}/>
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
