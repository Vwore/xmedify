import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Faq from "../FAQ/Faq";
import HospitalCard from "../HospitalCard/HospitalCard";

export default function Booking() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings"));
    console.log("data", data);
    setBookings(data);
  }, []);
  return (
    <div>
      <Header />
      <div style={{ width: "60%", padding: "130px", paddingTop: "60px" }}>
        {bookings?.map((value) => (
          <HospitalCard detail={value} isBooked={true} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
