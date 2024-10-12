import React from "react";
import './styles.css';
import Routes from "~/shared/config/routes";
import { Character } from "~/entities/character";
import { Comic } from "~/entities/comic";
import { Link } from "react-router-dom";

export interface CardProps {
    item: Character | Comic;
}


const isComic = (item: Character | Comic): item is Comic => (item as Comic).comicId !== undefined;

export const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <Link
            to={isComic(item) ? Routes.COMICS.ITEM(item.comicId) : Routes.CHARACTERS.ITEM(item.characterId)}
            key={isComic(item) ? item.comicId + item.title : item.characterId + item.name}
            className="card-wrapper"
        >
            <img src={item.imgSrc} alt={'Item image'} className={'card-img'} />
            <div className="card-content">
                <span className="card-placeholder">{isComic(item) ? item.title : item.name}</span>
                <span className="card-description">{item.description}</span>
            </div>
        </Link>
    )
}