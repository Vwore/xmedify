import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/home/Home";
import "@fontsource/poppins"; // Defaults to 400 weight
import Booking from "./component/Booking/Booking";
import SearchResult from "./component/SearchResult/SearchResult";
import { DetailProvider } from "./component/ContextProvider";

function App() {
  return (
    <div className="App">
      <DetailProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/my-bookings" element={<Booking />} />
      </Routes>
      </DetailProvider>
    </div>
  );
}

export default App;
