import React from "react";
import { Character } from "~/entities/character";
import { Comic } from "~/entities/comic";
import { links } from "../model/data";
import './styles.css';

export interface DetailedPageProps {
    item: Comic | Character
}

const isComic = (item: Character | Comic): item is Comic => (item as Comic).comicId !== undefined;

export const TemplateDetailedPage: React.FC<DetailedPageProps> = ({ item }) => {
    return (
        <div className="detailed-wrapper">
            <div className="detailed-content">
                <div className="content-section">
                    <span className="item-label">{isComic(item) ? item.title : item.name}</span>
                    <span className="item-description">{item.description}</span>
                </div>
                <div className="content-section">
                    <span className="links-label">{isComic(item) ? 'Characters' : 'Comics'}</span>
                    {
                        links.map((link, index) => <a key={isComic(item) ? item.title + item.comicId + index : item.name + item.characterId + index} className="link-item" href="https://developer.marvel.com/">{link.placeholder}</a>)
                    }
                </div>
            </div>
            <img className="detailed-img" src={item.imgSrc} alt="Image of comic of character" />
        </div>
    );
}