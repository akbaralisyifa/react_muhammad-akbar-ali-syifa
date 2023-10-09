const InputName = (props) => {
  const { label, type, name, value, onChange } = props;
  return (
    <div className="mb-5 mt-10">
      <label className="font-normal mb-2 lowercase text-slate-600 text-2xl">
        {label}
        <input className="border rounded-md border-slate-500 p-1 focus:outline-none focus:shadow-lg focus:border-transparent w-full " type={type} name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default InputName;
