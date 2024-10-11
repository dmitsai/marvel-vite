import React from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import Routes from "~/shared/config/routes";
import { Character } from "~/entities/character";
import { Comic } from "~/entities/comic";

export interface CardProps {
    item: Character | Comic
}


const isComic = (item: Character | Comic): item is Comic => (item as Comic).comicId !== undefined;

export const Card: React.FC<CardProps> = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div className="card-wrapper"
            onClick={() => {
                isComic(item) ? navigate(Routes.COMIC(item.comicId)) : navigate(Routes.CHARACTER(item.characterId))
            }}
        >
            <img src={item.imgSrc} alt={'Item image'} className={'card-img'} />
            <div className="card-content">
                <span className="card-placeholder">{isComic(item) ? item.title : item.name}</span>
                <span className="card-description">{item.description}</span>
            </div>
        </div>
    )
}