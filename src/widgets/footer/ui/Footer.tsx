import React from "react";
import marvelLogo from '~/shared/assets/marvel-logo.svg';
import './styles.css';

export const Footer: React.FC = () => (
    <footer className="footer-wrapper">
        <img src={marvelLogo} className="footer-logo" alt="Marvel logo" />
        <span className="footer-text">{`Data provided by Marvel. © 2024 MARVEL`}</span>
        <a className="footer-link" href={'http://developer.marvel.com'}>{'developer.marvel.com'}</a>
    </footer>
)