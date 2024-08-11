import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkTags = links.map((link) => {
    return (
      <a key={link} href={`#${link}`}>
        {link}
      </a>
    );
  });

  return <nav>{linkTags}</nav>;
}

export default NavBar;