import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkJSX = links.map(link =>{
    return <a key={link} href={"#"+link}>{link}</a>
  })
  return <nav>{linkJSX}</nav>;
}

export default NavBar;
