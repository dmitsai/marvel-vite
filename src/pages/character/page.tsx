import React from "react"
import { useLoaderData } from "react-router-dom";
import { TemplateDetailedPage } from "~/widgets/templateDetailedPage"
import { CharacterPageLoaderParams } from "./loader";
import { characters } from "~/entities/character";

export const CharacterPage: React.FC = () => {
    const data = useLoaderData() as CharacterPageLoaderParams;

    const currentItem = characters.find(character => character.characterId === data.characterId);

    return (
        <>
            {
                !currentItem ?
                    <div>Error</div>
                    :
                    <TemplateDetailedPage item={currentItem} />
            }
        </>

    )
}