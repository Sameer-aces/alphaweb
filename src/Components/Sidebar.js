import React, { useState } from "react";

import {
  LuLayoutDashboard,
  // GoHome,
  // LuSheet,
  // GiOpenBook,
  // TbDeviceAnalytics,
  FaBars,
} from "react-icons/fa";
import dashboardlogo from "../images/Dashboard.png";
import settings from "../images/Settings.png";
import attendance from "../images/Checked User Male.png";
import logo from "../images/logonMain.png";
import { NavLink } from "react-router-dom";
import "../App.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      //   icon: <img src={Home} className={"sidebar-icon"} />,
      // <FaHome className={"sidebar-icon"}/>
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <img src={dashboardlogo} className={"sidebar-icon"} />,
    },

    {
      path: "/Attendance",
      name: "Attendance",
      icon: <img src={attendance} className={"sidebar-icon"} />,
      //   icon: <FontAwesomeIcon icon={faListCheck} className={"sidebar-icon"} />,
    },

    {
      path: "/Settings",
      name: "Settings",
      icon: <img src={settings} className={"sidebar-icon"} />,
      // icon:<FaTh  className={"sidebar-icon"}/>
    },
  ];
  return (
    <div className="container">
      <div
        style={{
          width: isOpen ? "200px" : "50px",
          zIndex: isOpen ? 1000 : 0,
        }}
        className="sidebar"
      >
        <div className="top_section">
          <img
            src={logo}
            width={100}
            height={50}
            style={{ display: isOpen ? "block" : "none" }}
            className="logo"
            alt="Aceslogo"
          />
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px", cursor: "pointer" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{
                display: isOpen ? "block" : "none",
              }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
