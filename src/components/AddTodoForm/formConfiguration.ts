import * as Yup from "yup";

export type AddTodoValues = {
  title: string;
  task: string;
  lifestyle: string;
};

export const initialValues: AddTodoValues = {
  title: "",
  task: "",
  lifestyle: "",
};

export const addTodoSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too short").required("Title is required"),
  task: Yup.string().min(2, "Too short").required("Task is required"),
  lifestyle: Yup.string().required("Required"),
});
