import React from "react";
import { type Character } from "~/entities/character";
import { Card } from "~/features/card/ui/Card";
import { Search } from "~/features/search";
import './styles.css';
import { type SeacrhProps } from "~/features/search/ui/Search";
import { type Comic } from "~/entities/comic";

export interface TemplatePageProps extends Omit<SeacrhProps, 'count'> {
    data: Comic[] | Character[]
}

const isComic = (item: Character | Comic): item is Comic => (item as Comic).comicId !== undefined;

const getKey = (item: Character | Comic) => {
    return isComic(item) ? item.comicId + item.title : item.characterId + item.name
}

export const TemplatePage: React.FC<TemplatePageProps> = (props) => {
    const { placeholder, label, data } = props;
    return (
        <div className="page-wrapper">
            <Search placeholder={placeholder} label={label} count={data.length} />
            <div className="page-liner" />
            <div className="page-grid">
                {
                    data.map(item => <Card key={getKey(item)} item={item} />)
                }
            </div>
        </div>
    );
}