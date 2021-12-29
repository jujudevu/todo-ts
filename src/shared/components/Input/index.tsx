import React, { ChangeEvent, FC } from "react";
import cx from "classnames";
import { InputLabel, OutlinedInput } from "@mui/material";
import { FieldInputProps, FormikProps } from "formik";
import { makeStyles } from "@mui/styles";
import { MuiInputStyles } from "./muiStyles";

const useStyles = makeStyles(MuiInputStyles);

type InputProps = {
  id?: string;
  name?: string;
  value?: string | number;
  label?: string;
  field: FieldInputProps<string | number>;
  form?: FormikProps<any>;
  placeholder?: string;
};
const Input: FC<InputProps> = ({ id, label, field, placeholder, form }) => {
  const classes = useStyles();

  return (
    <OutlinedInput
      className={cx(classes.root, {
        [classes.error]:
          form &&
          form.errors[field.name] &&
          form.touched[field.name] &&
          form.errors[field.name],
      })}
      id={id}
      label={label}
      placeholder={placeholder}
      {...field}
    />
  );
};

export default Input;
