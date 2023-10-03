const TogleButton = ({ isChecked, setIsChecked }) => {
  return (
    <>
      <form className="form-check form-switch d-flex justify-content-center">
        <label className="form-check-label">Indonesia</label>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        </div>
        <label className="form-check-label">Inggris</label>
      </form>
    </>
  );
};

export default TogleButton;
