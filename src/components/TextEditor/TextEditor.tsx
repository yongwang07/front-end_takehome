import React, { useContext, ChangeEvent, useEffect, useState } from "react";
import RefreshBtn from "../RefreshBtn/RefreshBtn";
import { FormContext } from "../Form/TinyForm";

import "./styles.css";

interface Props {
  name: string;
  onValidate: (value: string | null) => string | null;
}

const TextEditor: React.FC<Props> = ({ name, onValidate }) => {
  const form = useContext(FormContext);
  const [error, setError] = useState<string | null>(" ");
  let value = form.value && form.value(name);
  let setInvalid = form.setInvalid;
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;
    form.setDirty(name);
    form.setValue(name, value);
  };
  useEffect(() => {
    setError(onValidate(value));
  }, [onValidate, value]);

  useEffect(() => {
    setInvalid(name, !!error);
  }, [setInvalid, name, error]);

  return (
    <section>
      <textarea
        name={name}
        value={value || ""}
        onBlur={() => form.setDirty(name)}
        onChange={onChange}
        placeholder="Summary"
      />
      <RefreshBtn
        width={15}
        height={15}
        onClick={() => form.setValue(name, "")}
      />
      {form.isDirty(name) && error && <div className="error">{error}</div>}
    </section>
  );
};

export default TextEditor;
