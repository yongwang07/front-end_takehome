import React, { useCallback, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import InputField from "../InputField/InputField";
import TextEditor from "../TextEditor/TextEditor";
import TinyForm from "./TinyForm";
import { FieldValues } from "./TinyForm";
import { addTile } from "../../actions/actions";
import "./styles.css";

const Form = () => {
  const [valid, setValid] = useState<boolean>(false);
  const [formFields, setFormFields] = useState<FieldValues>({});
  const formRef = useRef<any>();
  const dispatch = useDispatch();
  const onSubmit = useCallback(() => {
    dispatch(addTile(formFields));
    formRef.current?.clear();
  }, [dispatch, formFields]);
  return (
    <TinyForm
      ref={formRef}
      onValid={(isValid) => setValid(isValid)}
      onChange={setFormFields}
    >
      <h3 className="title">Create Post</h3>
      <h5 className="sub-title">
        Fill the all mention detail to submit the form
      </h5>
      <InputField
        name={"heading"}
        onValidate={(v) => (v ? null : "heading required")}
        placeHolder={"Heading"}
      />
      <InputField
        name={"pass"}
        onValidate={(v) => (v ? null : "sub-heading required")}
        placeHolder={"Sub-Heading"}
      />
      <TextEditor
        name={"summary"}
        onValidate={(v) => (v ? null : "summary required")}
      />
      <input
        type="button"
        onClick={onSubmit}
        disabled={!valid}
        name="Submit"
        value="Submit"
      />
    </TinyForm>
  );
};

export default Form;
