import React from "react";
function Footer() {
  const currentYear = new Date();
  return <h5 className="footer">Copyright {currentYear.getFullYear()}</h5>;
}
export default Footer;
