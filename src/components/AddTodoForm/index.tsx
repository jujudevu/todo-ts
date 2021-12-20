import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {Formik} from "formik";
// @ts-ignore
import {v4 as uuidv4} from 'uuid';

import {
    addTodoSchema,
    AddTodoValues,
    initialValues,
} from "./formConfiguration";
import {ITodo} from "../../types/types";
import FormContent from "./FormContent";

type AddTodoFormProps = {
    todo: Array<ITodo>;
    setTodo: Dispatch<SetStateAction<ITodo[]>>;
};

const AddTodoForm: FC<AddTodoFormProps> = ({todo, setTodo}) => {
    const [formInitialValues, setFormInitialValues] = useState(initialValues);

    // @ts-ignore
    const handleSubmit = (values: AddTodoValues, {resetForm}): void => {
        const createTodo: ITodo = {
            ...values,
            id: uuidv4(),
            completed: false,
        };
        resetForm(initialValues);
        setTodo([createTodo, ...todo]);
    };

    return (
        <Formik
            initialValues={formInitialValues}
            validationSchema={addTodoSchema}
            onSubmit={handleSubmit}
        >
            {(props) => <FormContent props={props}/>}
        </Formik>
    );
};

export default AddTodoForm;
