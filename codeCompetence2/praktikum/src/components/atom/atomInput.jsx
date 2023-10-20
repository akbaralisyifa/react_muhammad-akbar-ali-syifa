const AtomInput = (props) => {
  const { text, handleChange, placeholder, value, name, style } = props;
  return (
    <>
      <input className={` ${style} py-3 rounded-md px-2`} name={name} type={text} onChange={handleChange} placeholder={placeholder} value={value} />
    </>
  );
};

export default AtomInput;
