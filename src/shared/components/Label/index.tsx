import React, {FC} from "react";
import {InputLabel} from "@mui/material";
import {MuiLabelStyles} from "./muiStyles";
import {makeStyles} from "@mui/styles";

type LabelProps = {
    id?: string;
    text: string;

}
const useStyles = makeStyles(MuiLabelStyles)
const Label: FC<LabelProps> = ({id, text}) => {
    const classes = useStyles();
    return (
        <InputLabel className={classes.root} htmlFor={id}>
            {text}
        </InputLabel>
    )
}
export default Label;