import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header";
import XlsExport from "xlsexport";
const Dashboard = () => {
  const [timeSheet, setTimeSheet] = useState([]);
  const handleFetchTimeSheet = () => {
    axios
      .get("https://alpha-wrd4.onrender.com/timesheet")
      .then((timeSheet) => setTimeSheet(timeSheet.data));
  };
  console.log(timeSheet);
  const handleDownloadXlsx = () => {
    const data = timeSheet.map((userDetails, index) => {
      return {
        Name: userDetails.name,
        Month: userDetails.month,
        clockin: userDetails.clockin,
        clockout: userDetails.clockout,
        Date: userDetails.date,
        Action: userDetails.Action,
      };
    });

    const xls = new XlsExport(data, "Download");
    xls.exportToXLS();
  };
  return (
    <>
      <Header />
      <Sidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "-290px",
          padding: "350px",
        }}
      >
        <button onClick={handleFetchTimeSheet}>Fetch</button>
        <button onClick={handleDownloadXlsx}>Export</button>
        <table className="headerKeys">
          <thead>
            <tr className="header">
              <th>Name</th>
              <th>Month</th>
              <th>Clock In</th>
              <th>Clock Out</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {timeSheet.map((user) => {
              return (
                <tr className="Keys">
                  <td className="Keys">{user.name}</td>
                  <td>{user.month}</td>
                  <td>{user.clockin}</td>
                  <td>{user.clockout}</td>
                  <td>{user.date}</td>

                  <td>{user.Action}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Dashboard;
