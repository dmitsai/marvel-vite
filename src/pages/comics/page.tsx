import React from "react";
import { comics } from "~/entities/comic";
import { TemplatePage } from "~/widgets/templatePage";

export const ComicsPage: React.FC = () => {
    return (
        <TemplatePage data={comics} placeholder={"Comics"} label={"Search for Comics by Title"} />
    );
}