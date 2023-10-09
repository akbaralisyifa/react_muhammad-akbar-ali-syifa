const InputPrice = (props) => {
  const { label, type, name, value, onChange } = props;
  return (
    <>
      <label className="font-normal mb-2 lowercase text-slate-600 text-2xl">{name}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </>
  );
};

export default InputPrice;
