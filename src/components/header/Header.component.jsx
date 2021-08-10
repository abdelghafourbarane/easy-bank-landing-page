import React from "react";

import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/cancel.svg";

import SpecialButton from "../special-button/SpecialButton.component";

import classes from "./Header.styles.module.scss";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      menuClicked: false,
    };
  }

  menuClickHandler() {
    const prevState = this.state.menuClicked;
    this.setState({ menuClicked: !prevState });
    this.props.clickMenu();
  }

  render() {
    return (
      <div className={classes.header}>
        <img
          src="/assets/logo.svg"
          className={classes.logo}
          alt="easybank logo"
        />
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Careeres</a>
          </li>
        </ul>
        <SpecialButton text="Request Invite" />
        {this.state.menuClicked ? (
          <CloseIcon
            className={classes.cancel_icon}
            onClick={() => this.menuClickHandler()}
          />
        ) : (
          <MenuIcon
            className={classes.menu_icon}
            onClick={() => this.menuClickHandler()}
          />
        )}
      </div>
    );
  }
}

export default Header;
