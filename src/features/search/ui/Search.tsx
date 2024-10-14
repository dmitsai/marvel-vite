import React from "react";
import { useForm } from "react-hook-form";
import { SearchButton } from "~/entities/searchButton";
import { SearchInput } from "~/entities/searchInput";
import './styles.css';

export interface SeacrhProps {
    placeholder: string,
    label: string,
    count: number,
}
type SearchFormData = {
    search: string;
};
export const Search: React.FC<SeacrhProps> = (props) => {
    const { placeholder, label, count } = props;
    const { handleSubmit, control } = useForm<SearchFormData>({
        defaultValues: {
            search: '',
        }
    });

    const onSubmit = (data: SearchFormData) => {
        console.log('search-value:', data);
    };
    return (
        <div className="search-wrapper">
            <div className="search-placeholder-wrapper">
                <span className="search-placeholder">{placeholder}</span>
                <span className="search-count">{`(${count})`}</span>
            </div>
            <form className="seacrh-input-wrapper" onSubmit={handleSubmit(onSubmit)} noValidate >
                <SearchInput label={label} name={'search'} control={control} />
                <SearchButton />
            </form>
        </div>
    );
}