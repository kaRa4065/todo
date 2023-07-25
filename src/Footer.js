import React from "react";

const Footer = ({ item }) => {
  const itemCon = "Listed items:";
  const itemCond = "Listed item:";
  return (
    <div className="footer">
      <hr />
      {item.length === 1 || ! item.length ? (
        <footer>
          {itemCond} {item.length}
        </footer>
      ) : (
        <footer>
          {itemCon} {item.length}
        </footer>
      )}
    </div>
  );
};

export default Footer;
