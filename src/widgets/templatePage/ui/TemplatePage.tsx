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
export const TemplatePage: React.FC<TemplatePageProps> = (props) => {
    const { placeholder, label, data } = props;
    return (
        <div className="page-wrapper">
            <Search placeholder={placeholder} label={label} count={data.length} />
            <div className="page-liner" />
            <div className="page-content">
                {
                    data.map(item => <Card item={item} />)
                }
            </div>
        </div>
    );
}