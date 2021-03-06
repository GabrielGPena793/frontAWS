import {
  HouseLine,
  UserCircle,
  ChartLineUp,
  BookmarksSimple,
  BookOpen,
} from "phosphor-react";
import React, { useState } from "react";
import { Heart } from "react-bootstrap-icons";
import { fallDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./styles.css";

export function MenuSidebar() {
  const [closeButton, setCloseButton] = useState(false);

  function handleCloseMenu(state) {
    setCloseButton(state.isOpen);
  }

  function closeMenu() {
    setCloseButton(false);
  }
  return (
    <Menu
      onStateChange={(state) => handleCloseMenu(state)}
      isOpen={closeButton}
    >
      <img className="img_sidebar" src="https://i.postimg.cc/y8LjFHR6/Group-133.png" alt="logo do site" />
      <Link to="/login">
        <span onClick={closeMenu}>Login</span>
        <UserCircle size={40} weight="duotone" color="var(--secondary-color)" />
      </Link>
      <Link to="/">
        <span onClick={closeMenu}>Home</span>
        <HouseLine size={40} weight="duotone" color="var(--secondary-color)" />
      </Link>
      <Link to="/category/all">
        <span onClick={closeMenu}>Categorias</span>
        <BookmarksSimple
          size={40}
          weight="duotone"
          color="var(--secondary-color)"
        />
      </Link>
      <Link to="/myReservation">
        <span onClick={closeMenu}>Reservas</span>
        <BookOpen 
          size={40} 
          weight="duotone" 
          color="var(--secondary-color)" 
        />
      </Link>
    </Menu>
  );
}
