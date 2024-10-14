import React from "react";
import marvelLogo from '~/shared/assets/marvel-logo.svg';
import Routes from "~/shared/config/routes";
import { NavLink } from "react-router-dom";
import './styles.css';


export const Header: React.FC = () => {

    return (
        <header className="header-wrapper">
            <img src={marvelLogo} className="header-logo" alt="Marvel logo" />
            <div className="header-navbar">
                <NavLink to={Routes.CHARACTERS.ALL} >{'Characters'}</NavLink>
                <NavLink to={Routes.COMICS.ALL}>{'Comics'}</NavLink>
            </div>
        </header>
    );
}