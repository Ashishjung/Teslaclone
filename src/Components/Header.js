import React, { useState } from "react";
import styled from "styled-components";
import { carsname } from "./carname";
import { NavLink } from "react-router-dom";
const Header = () => {
  let [showSidemenu, setSidemenu] = useState(false);
  return (
    <div>
      <Container>
        <NavLink to="/">
          <img src="./images/logo.svg" alt="teslaicon"></img>
        </NavLink>
        <Menu>
          {carsname.map(({ name, link }) => {
            return (
              <>
                <NavLink to={link}>{name}</NavLink>
              </>
            );
          })}
        </Menu>
        <Accountmenu>
          <p>Shop</p>
          <p>Account</p>
          <p
            onClick={() => {
              setSidemenu(!showSidemenu);
            }}
          >
            Menu
          </p>
        </Accountmenu>
      </Container>
      <Burgermenu show={showSidemenu}>
        <Closebutton>
          <p
            onClick={() => {
              setSidemenu(!showSidemenu);
            }}
          >
            X
          </p>
        </Closebutton>
        {carsname.map(({ link, name }) => {
          return (
            <>
              <NavLink to={link}>{name}</NavLink>
            </>
          );
        })}
      </Burgermenu>
    </div>
  );
};

export default Header;
const Container = styled.div`
  position: fixed;
  min-height: 60px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 4;
  padding: 0 5px;
  justify-content: space-evenly;
  cursor: pointer;
`;
const Menu = styled.div`
  display: flex;
  a {
    margin: 1rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Accountmenu = styled.div`
  display: flex;
  margin-left: 1.5rem;
  p {
    margin: 1rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.911);
  }
`;
const Burgermenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 300px;
  right: 0;
  background: white;
  z-index: 5;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  a {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 12px 0;
    list-style: none;
  }
`;
const Closebutton = styled.div`
  display: flex;
  justify-content: flex-end;
  p {
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
