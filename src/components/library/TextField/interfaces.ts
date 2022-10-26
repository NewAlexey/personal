import React from "react";

export interface IInput {
    type?: string;
}

export interface ITextField extends React.HTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: string;
    value?: string;
    id?: string;
    checked?: boolean;
    name?: string;
}
