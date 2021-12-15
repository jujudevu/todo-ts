import { Button, TextField } from "@mui/material";
import { Field, Form, FormikProps } from "formik";
import { FC } from "react";
import { AddTodoValues } from "../formConfiguration";

type FormContentProps = {
  props: FormikProps<AddTodoValues>;
};

const FormContent: FC<FormContentProps> = ({ props }) => {
  return (
    <Form {...props}>
      <Field
        name="title"
        component={TextField}
        label="title"
        variant="standard"
      />
      <Field name="task" component={TextField} />
      <Field name="lifestyle" component={TextField} />
      {/* <TextField
        label="Title"
        name="title"
        value={values.title}
        variant="standard"
        autoComplete="off"
        onChange={handleChange}
        fullWidth
      /> */}
      {/* <TextField
        label="Title"
        name="title"
        value={values.title}
        variant="standard"
        autoComplete="off"
        onChange={handleChange}
        fullWidth
      />
      <ErrorMessage name="title" />
      <TextField
        label="Task"
        name="task"
        value={values.task}
        variant="standard"
        autoComplete="off"
        onChange={handleChange}
        fullWidth
      />
      <ErrorMessage name="title" />
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Lifestyle
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={values.lifestyle}
          onChange={handleChange}
          label="Lifestyle"
          name="lifestyle"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="home">Home</MenuItem>
          <MenuItem value="work">Work</MenuItem>
          <MenuItem value="hobby">Hobby</MenuItem>
        </Select>
      </FormControl>
      <ErrorMessage name="lifestyle" /> */}
      <Button type="submit" variant="contained" disabled={!props.dirty}>
        Add
      </Button>
    </Form>
  );
};

export default FormContent;
