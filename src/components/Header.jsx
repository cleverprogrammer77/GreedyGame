import React from "react";
import { useState } from "react";
import Settings from "./Settings";
import Table from "./Table";

const Header = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDate2, setSelectedDate2] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [data, setData] = useState([]);
  const handleCalendarVisibility = () => {
    setShowCalendar(!showCalendar);
  };
  const handleCancelCalendar = () => {
    setShowCalendar(false);
  };
  const handleDateSelect = (e) => {
    e.preventDefault();
    setSelectedDate(e.target.value);
  };
  const handleDateSelect2 = (e) => {
    e.preventDefault();
    setSelectedDate2(e.target.value);
  };
  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleFetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://go-dev.greedygame.com/v3/dummy/report?startDate=${selectedDate}&endDate=${selectedDate2}`
      );
      const data = await response.json();
      if (data > 0) {
        setData(data);
      }
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="main">
        <h2 className="heading">Analytics</h2>
        <div className="filterContainer">
          <div className="filterMain">
            <button
              className="filterContainer-DatePickerRegion"
              onClick={handleCalendarVisibility}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z"></path>
              </svg>
              <p>Date Picker</p>
            </button>
            {showCalendar && (
              <form class="datePickerContainer" onSubmit={handleFetchData}>
                <div>
                  <div class="datePickerContainer-label">
                    <label for="startDate">Start Date</label>
                  </div>
                  <input
                    type="date"
                    name="startDate"
                    min="2021-06-01"
                    value={selectedDate}
                    onChange={handleDateSelect}
                  />
                </div>
                <div>
                  <div class="datePickerContainer-label">
                    <label for="endDate">End Date</label>
                  </div>
                  <input
                    type="date"
                    name="endDate"
                    min="2021-06-31"
                    value={selectedDate2}
                    onChange={handleDateSelect2}
                  />
                </div>
                <div class="datePickerContainer-footer">
                  <button class="cancelButton" onClick={handleCancelCalendar}>
                    Cancel
                  </button>
                  <button class="applyButton" type="submit">
                    Search
                  </button>
                </div>
              </form>
            )}

            <button className="SettingsRegion" onClick={handleSettings}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 7H3V2h1v5zm-1 7h1v-3H3v3zm5 0h1V8H8v6zm5 0h1v-2h-1v2zm1-12h-1v6h1V2zM9 2H8v2h1V2zM5 8H2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5-3H7c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5 4h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z"
                ></path>
              </svg>{" "}
              Settings
              <Settings showSettings={showSettings} />
            </button>
          </div>
        </div>
        {/* <Table datas={data} /> */}
      </div>
    </div>
  );
};

export default Header;
