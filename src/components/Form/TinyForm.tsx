import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  PropsWithChildren,
} from "react";

interface Props {
  onValid: (isValid: boolean) => void;
  onChange: (fields: FieldValues) => void;
  ref: React.ForwardedRef<HTMLDivElement>;
}

const noop = () => null;

export type FieldValues = {
  [key: string]: string;
};

type DirtyField = {
  [key: string]: boolean;
};

type validField = {
  [key: string]: boolean;
};

interface IFormContext {
  setValue(name: string, text: string): void;
  value(name: string): string | null;
  setDirty(name: string): void;
  setInvalid(name: string, valid: boolean): void;
  isDirty(fieldName: string): boolean;
}

export const FormContext = createContext<IFormContext>({
  setValue: noop,
  value: noop,
  setDirty: noop,
  isDirty: () => false,
  setInvalid: noop,
});

const TinyForm: React.FC<Props> = forwardRef(
  (
    { children, onChange, onValid }: PropsWithChildren<Props>,
    ref: React.ForwardedRef<any>
  ) => {
    const [values, setValues] = useState<FieldValues>({});
    const [dirtyFields, setDirtyFields] = useState<DirtyField>({});
    const [validFiels, setValidFields] = useState<validField>({});
    useImperativeHandle(ref, () => ({
      clear() {
        setValidFields({});
        setDirtyFields({});
        setValues({});
      },
    }));

    useEffect(() => {
      if (Object.keys(validFiels).length === 0) return;
      onValid(Object.keys(validFiels).every((i) => !validFiels[i]));
    }, [onValid, validFiels]);

    useEffect(() => onChange(values), [onChange, values]);

    const setDirty = useCallback(
      (field) => setDirtyFields((df) => ({ ...df, [field]: true })),
      [setDirtyFields]
    );

    const isDirty = useCallback(
      (field) => Object.keys(dirtyFields).includes(field),
      [dirtyFields]
    );

    const setValue = useCallback(
      (field, value) => setValues((values) => ({ ...values, [field]: value })),
      [setValues]
    );

    const value = useCallback((field) => values[field], [values]);

    const setInvalid = useCallback(
      (field, error) => {
        setValidFields((f) => ({ ...f, [field]: !!error }));
      },
      [setValidFields]
    );

    const form = {
      setDirty,
      setValue,
      setInvalid,
      isDirty,
      value,
    };

    return (
      <form>
        <fieldset>
          <FormContext.Provider value={form}>{children}</FormContext.Provider>
        </fieldset>
      </form>
    );
  }
);

export default TinyForm;
