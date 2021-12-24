import {Field, FieldInputProps, FormikProps} from "formik";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from "../../../components/AddTodoForm/FormContent/_FormContent.module.scss";
import React, {FC} from "react";
import Label from "../Label";

type DropdownProps = {
    id?: string;
    name?: string;
    field?: FieldInputProps<string | number>;
    form?: FormikProps<any>;
    value?: string | number;
    onBlur?: (value: string) => void;
    onChange?: (value: string | number) => void;
}

const Dropdown: FC<DropdownProps> = ({id, name, field, value}) => {
    const items = [
        {
            value: "home",
            text: "Home",
        },
        {
            value: "work",
            text: "Work",
        },
        {
            value: "hobby",
            text: "Hobby",
        },
    ];
    return (
        <Select
            id={id}
            label="Lifestyle"
            name={name}
            value={field?.value}
            onBlur={field?.onBlur}
            sx={{m: 1, minWidth: 120, margin: 0,}}
        >
            <Label id="lifestyle" text="Lifestyle"/>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {items.map(({value, text}) => (
                <MenuItem value={value}>{text}</MenuItem>
            ))}
        </Select>
    )
}
export default Dropdown