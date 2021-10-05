import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { FormContext } from "../Form/TinyForm";
import "./styles.css";

interface Props {
  name: string;
  placeHolder: string;
  onValidate: (value: string | null) => string | null;
}

const InputField: React.FC<Props> = ({ name, placeHolder, onValidate }) => {
  const form = useContext(FormContext);
  const [error, setError] = useState<string | null>(" ");
  let value = form.value && form.value(name);
  let setInvalid = form.setInvalid;
  useEffect(() => setInvalid(name, !!error), [setInvalid, name, error]);

  useEffect(() => setError(onValidate(value)), [onValidate, value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    form.setDirty(name);
    form.setValue(name, value);
  };
  return (
    <section>
      <input
        type="text"
        autoComplete="off"
        onBlur={() => form.setDirty(name)}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeHolder}
      />
      {form.isDirty(name) && error && <div className="error">{error}</div>}
    </section>
  );
};

export default InputField;
