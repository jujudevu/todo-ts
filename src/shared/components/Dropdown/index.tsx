import { Field, FieldInputProps, FormikProps } from "formik";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React, { FC } from "react";
import Label from "../Label";
import styles from "components/AddTodoForm/FormContent/_FormContent.module.scss";

type DropdownProps = {
  id?: string;
  field?: FieldInputProps<string | number>;
  form?: FormikProps<any>;
};

const Dropdown: FC<DropdownProps> = ({ id, field }) => {
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
      sx={{ m: 1, minWidth: 120, margin: 0 }}
      {...field}
    >
      <Label id="lifestyle" text="Lifestyle" />
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {items.map(({ value, text }) => (
        <MenuItem value={value}>{text}</MenuItem>
      ))}
    </Select>
  );
};
export default Dropdown;
