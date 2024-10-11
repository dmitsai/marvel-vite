import React from "react";
import { characters } from "~/entities/character";
import { TemplatePage } from "~/widgets/templatePage";

export const CharactersPage: React.FC = () => {
    return (
        <TemplatePage data={characters} placeholder={"Characters"} label={"Search for Characters by Name"} />
    );
}