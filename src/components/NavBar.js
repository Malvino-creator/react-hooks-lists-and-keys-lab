import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let Properties = links.map((link)=>{
    return <a key= {link} href={'#'+ link}>{link}</a>

  })

  return <nav>{/* display an <a> tag for each link here */}
  {Properties}
  </nav>;

}

export default NavBar;
