import React, { useState, useEffect } from "react";
import "./ResidentCleaningChecklist.css";
const checklistItems = [
  "MASTER BED + DRESSING + BATH",
  "BED ROOM-1 & BATH",
  "BED ROOM-2 & BATH",
  "BED ROOM-3 & BATH + STORE ROOM",
  "MAIN DINING + BREAKFAST DINING",
  "MAIN KITCHEN + SHOW KITCHEN",
  "SALOON + OFFICE + ENTRANCE TOILET",
  "MAID ROOM + LAUNDRY ROOM",
  "OUT DOOR TILES + GRILL STATION",
];

const reminders = [
  "DUSTING",
  "DRY MOPPING",
  "WET MOPPING WITH DISINFECTANT",
  "VACUUMING",
  "SPOT MOPPING",
  "CHECK LIGHTS & TV",
  "CHECK THE TAP AND SHOWER",
  "USE CHEMICAL CAREFULLY",
  "ENSURE NO INSECTS INSIDE",
  "REPORT DEFECTS",
  "REPORT BREAKEGES",
  "REPORT MISSING",
];

const ResidentCleaningChecklist = () => {
  const [currentDay, setCurrentDay] = useState("");
  const [currentWeek, setCurrentWeek] = useState(1);

  useEffect(() => {
    const date = new Date();
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    setCurrentDay(day);

    // Update week logic here if needed
    // For example, you could calculate the current week of the month
    const weekOfMonth = Math.ceil((date.getDate() - 1) / 7);
    setCurrentWeek(weekOfMonth);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entries = Object.fromEntries(formData.entries());
    console.log(entries);
    alert("Checklist submitted for the day!");
  };

  return (
    <div className="container">
      <h1>RESIDENCE CLEANING CHECKLIST</h1>
      <h2>{`${new Date().toLocaleDateString("en-US", {
        month: "long",
      })} ${new Date().getDate()}, ${currentDay}`}</h2>
      <h3>{`Week ${currentWeek}`}</h3>
      <div className="day">
        <form onSubmit={handleSubmit}>
          <h3>{currentDay}</h3>
          <ul>
            {checklistItems.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`${currentDay}-${task}`}
                  name={`${currentDay}-${task}`}
                />
                <label htmlFor={`${currentDay}-${task}`}>{task}</label>
              </li>
            ))}
          </ul>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="reminders">
        <h3>Daily Reminders</h3>
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>{reminder}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResidentCleaningChecklist;
