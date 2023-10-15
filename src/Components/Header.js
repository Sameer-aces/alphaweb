import React from "react";
const Header = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          background: "#213966",
          height: "75px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            margin: "50px",
            color: "#fff",
            marginLeft: "60px",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Project Alpha
        </p>
      </div>
    </>
  );
};
export default Header;
