import React from "react";
import { Controller, type ControllerFieldState } from 'react-hook-form';
import './styles.css';

interface RenderInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
}

const RenderInput: React.FC<RenderInputProps & ControllerFieldState> = ({ label, ...props }) => {
    const { isDirty } = props;
    return (
        <div className="input-wrapper">
            <input
                className="input-content"
                {...props}
            />
            <label className={`input-label ${isDirty ? 'dirty-label' : 'clear-label'}`}>{label}</label>
        </div>
    )
}

export type InputProps = RenderInputProps & Omit<React.ComponentProps<typeof Controller>, 'render'>

export const SearchInput: React.FC<InputProps> = props => (
    <Controller
        {...props}
        render={({ field, fieldState }) => <RenderInput  {...props} {...field} {...fieldState} />}
    />
);