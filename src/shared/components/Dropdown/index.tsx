import { Field, FieldInputProps, FormikProps } from "formik";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React, { FC } from "react";
import Label from "../Label";
import styles from "components/AddTodoForm/FormContent/_FormContent.module.scss";
import {makeStyles} from "@mui/styles";
import {MuiInputStyles} from "../Input/muiStyles";
import cx from "classnames";

type DropdownProps = {
  id?: string;
  field: FieldInputProps<string | number>;
  form?: FormikProps<any>;
};

const useStyles = makeStyles(MuiInputStyles);
const Dropdown: FC<DropdownProps> = ({ id, field, form }) => {
  const classes  = useStyles();
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
      className={cx(classes.root, {
        [classes.error]:
        form &&
        form.errors[field.name] &&
        form.touched[field.name] &&
        form.errors[field.name],
      })}
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
