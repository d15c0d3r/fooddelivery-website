import {BrowserRouter, Route , Switch} from "react-router-dom"
import Home from "./Components/Home";
import Booking from "./Components/Booking";
import Daffodills from "./Components/Daffodills";
import Foodcourt from "./Components/Foodcourt";
import Checkout from "./Components/Checkout"
import ForgotPass from "./Components/HomeComponents/ForgotPass";

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path = "/"><Home/></Route>
        <Route exact path = "/bookings"><Booking/></Route>
        <Route exact path = "/bookings/d2"><Daffodills/></Route>
        <Route exact path = "/bookings/food-court"><Foodcourt/></Route>
        <Route exact path = "/checkout"><Checkout/></Route>
        <Route exact path = "/forgot-password"><ForgotPass/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
