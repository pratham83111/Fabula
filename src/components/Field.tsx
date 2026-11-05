type Props = {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
  options?: string[];
};

export default function Field({ label, name, type = "text", defaultValue, placeholder, required, textarea, options }: Props) {
  const id = `f-${name}`;
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {textarea ? (
        <textarea id={id} name={name} defaultValue={defaultValue} placeholder={placeholder} required={required} />
      ) : options ? (
        <select id={id} name={name} defaultValue={defaultValue}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input id={id} name={name} type={type} defaultValue={defaultValue} placeholder={placeholder} required={required} />
      )}
    </div>
  );
}
