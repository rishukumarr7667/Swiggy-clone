import { BrowserRouter as Router } from "react-router-dom";
import Card from "./components/Card";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OnlineDelivery from "./components/OnlineDelivery";
import TopRestaurant from "./components/TopRestaurant";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Category />
        <TopRestaurant />
        <OnlineDelivery />
        <Footer />
      </>
    </Router>
  );
}

export default App;
