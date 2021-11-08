import {Route , Switch} from "react-router-dom"
import Home from "./Components/Home"
import Daffodills from "./Components/Daffodills"
import Foodcourt from "./Components/Foodcourt"
import Checkout from "./Components/CheckoutComponents/Checkout"
import ForgotPass from "./Components/HomeComponents/ForgotPass"
import Nav from "./Components/Nav"
import ProtectedRoute from "./ProtectedRoute"
import PageNotFound from "./Components/PageNotFound"

function App() {
  
  return(
    <div>
      <Nav/>
      <Switch>
        <Route exact path = "/"><Home/></Route>
        <ProtectedRoute exact path = "/bookings/d2" component = {Daffodills}></ProtectedRoute>
        <ProtectedRoute exact path = "/bookings/food-court" component = {Foodcourt}></ProtectedRoute>
        <ProtectedRoute exact path = "/checkout" component = {Checkout}></ProtectedRoute>
        <Route exact path = "/forgot-password"><ForgotPass/></Route>
        <Route><PageNotFound/></Route>
      </Switch>
    </div>
  )
}

export default App
