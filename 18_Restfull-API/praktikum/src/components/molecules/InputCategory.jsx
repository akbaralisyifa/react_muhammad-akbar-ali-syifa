const InputCategory = (props) => {
  const { label, name, values, value, onChange } = props;

  return (
    <>
      <label className="font-normal mb-2 lowercase text-slate-600 text-2xl">{label}</label>
      <select name={name} value={value} onChange={onChange}>
        {values.map((value) => {
          return (
            <>
              <option className="" value={value}>
                {value}
              </option>
            </>
          );
        })}
      </select>
    </>
  );
};

export default InputCategory;
