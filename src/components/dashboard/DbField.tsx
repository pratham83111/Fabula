"use client";

import { useId } from "react";

type Props = {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
  options?: string[];
  autoComplete?: string;
  inputRef?: React.Ref<HTMLInputElement>;
};

export default function DbField({ label, name, type = "text", defaultValue, placeholder, required, textarea, options, autoComplete, inputRef }: Props) {
  const id = useId();
  const common = { id, name, required, defaultValue };
  return (
    <div className="db-field">
      <label htmlFor={id}>{label}</label>
      {options ? (
        <select {...common}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : textarea ? (
        <textarea {...common} placeholder={placeholder} />
      ) : (
        <input {...common} type={type} placeholder={placeholder} autoComplete={autoComplete} ref={inputRef} />
      )}
    </div>
  );
}
