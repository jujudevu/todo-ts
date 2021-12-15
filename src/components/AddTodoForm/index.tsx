import { Dispatch, FC, SetStateAction, useState } from "react";
import { Formik } from "formik";
import shortid from "shortid";
import {
  addTodoSchema,
  AddTodoValues,
  initialValues,
} from "./formConfiguration";
import { ITodo } from "../../types/types";
import FormContent from "./FormContent";

type AddTodoFormProps = {
  todo: Array<ITodo>;
  setTodo: Dispatch<SetStateAction<ITodo[]>>;
};

const AddTodoForm: FC<AddTodoFormProps> = ({ todo, setTodo }) => {
  const [formInitialValues, setFormInitialValues] = useState(initialValues);

  const handleSubmit = (values: AddTodoValues): void => {
    alert("submit");
    const createTodo: ITodo = {
      ...values,
      id: shortid.generate(),
      completed: false,
    };
    setTodo([createTodo, ...todo]);
    setFormInitialValues(initialValues);
  };

  return (
    <Formik
      initialValues={formInitialValues}
      // validationSchema={addTodoSchema}
      onSubmit={handleSubmit}
    >
      {(props) => <FormContent props={props} />}
    </Formik>
  );
};

export default AddTodoForm;
