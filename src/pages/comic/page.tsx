import React from "react"
import { useLoaderData } from "react-router-dom";
import { TemplateDetailedPage } from "~/widgets/templateDetailedPage"
import { ComicPageLoaderParams } from "./loader";
import { comics } from "~/entities/comic";

export const ComicPage: React.FC = () => {
    const data = useLoaderData() as ComicPageLoaderParams;

    const currentItem = comics.find(comic => comic.comicId === data.comicId);

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