import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { addDays, format, formatDate } from "date-fns";
import { Modal, Tab, Tabs, useScrollTrigger } from "@mui/material";

const arr = [0, 1, 2, 3, 4, 5, 6];

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "2px solidrgb(14, 15, 17)",
  boxShadow: 24,
  p: 4,
};

function weekGenerator() {
  const weekName = [];
  for (let i = 0; i < 7; i++) {
    const date = addDays(Date(), i);

    if (i === 0) {
      weekName.push("Today");
    } else if (i === 1) {
      weekName.push("Tomorrow");
    } else {
      const formattedDate = format(date, "EEEE, do MMMM"); // Example: Monday, 25th March
      weekName.push(formattedDate);
    }
  }
  return weekName;
}

const TimePill = ({ time, setTime, setShowModal }) => {
  return (
    <div
      onClick={() => {
        setTime(time);
        setShowModal(true);
      }}
      className={style.timePill}
    >
      {time}
    </div>
  );
};

export default function BookingPanel({ detail }) {
  const week = arr.map((val) => addDays(Date(), val));
  const [date, setDate] = useState(Date());
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const weekName = weekGenerator();

  const [tabIndex, setTabIndex] = useState(0);

  function handleTabChange(e, newValue) {
    setTabIndex(newValue);
  }
  function handleBooking() {
    if (localStorage.getItem("bookings") == null) {
      localStorage.setItem("bookings", JSON.stringify([]));
    }
    const booking = JSON.parse(localStorage.getItem("bookings"));
    booking.push({ ...detail, time: time, date });
    console.log(booking);
    localStorage.setItem("bookings", JSON.stringify(booking));
    setShowModal(false);
  }

  useEffect(() => {
    setDate(week[tabIndex]);
  }, [tabIndex]);
  return (
    <div className={style.bookingPanel}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
        }}
      >
        <span className={style.greenPill}></span>
      </div>
      <div>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {weekName.map((val) => (
            <Tab
              label={
                <div style={{ margin: 10 }}>
                  <div style={{ color: "black", fontWeight: 600, padding: 10 }}>
                    {" "}
                    {val}
                  </div>
                  <div style={{ color: "green", fontSize: 12 }}>
                    15 slots Available
                  </div>
                </div>
              }
            />
          ))}
        </Tabs>
        <div className={style.timeContainer}>
          <div className={style.timePeriod}>
            <div className={style.timePeriodText}>Morning</div>
            <div className={style.timePeriodTime}>
              <TimePill
                time={"11:00 AM"}
                setTime={setTime}
                setShowModal={setShowModal}
              />
            </div>
          </div>
          <div className={style.timePeriod}>
            <div className={style.timePeriodText}>Afternoon</div>
            <div className={style.timePeriodTime}>
              <TimePill
                time={"12:00 PM"}
                setTime={setTime}
                setShowModal={setShowModal}
              />
              <TimePill
                time={"12:30 PM"}
                setTime={setTime}
                setShowModal={setShowModal}
              />
              <TimePill
                time={"01:30 PM"}
                setTime={setTime}
                setShowModal={setShowModal}
              />
              <TimePill
                time={"02:00 PM"}
                setTime={setTime}
                setShowModal={setShowModal}
              />
              <TimePill
                time={"02:30 PM"}
                setTime={setTime}
                setShowModal={setShowModal}
              />
            </div>
          </div>
          <div className={style.timePeriod}>
            <div className={style.timePeriodText}> Evening</div>
            <div className={style.timePeriodTime}>
              <TimePill
                time={"06:00 PM"}
                setTime={setTime}
                setShowModal={setShowModal}
              />
              <TimePill
                time={"06:30 PM"}
                setTime={setTime}
                setShowModal={setShowModal}
              />
              <TimePill
                time={"07:00 PM"}
                setTime={setTime}
                setShowModal={setShowModal}
              />
              <TimePill
                time={"07:30 PM"}
                setTime={setTime}
                setShowModal={setShowModal}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        sx={modalStyle}
      >
        <div>
          <div>
            Do you want to Book appointment at {time}
            {" on "}
            {formatDate(date, "MM/dd/yyyy")}?
          </div>
          <div>
            <button onClick={handleBooking}>Yes</button>
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
