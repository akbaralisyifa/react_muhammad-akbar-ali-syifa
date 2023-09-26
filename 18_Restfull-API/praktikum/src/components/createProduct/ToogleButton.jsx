const ToggleButton = ({ isChecked, setIsChecked }) => {
  return (
    <div className="toggle d-flex justify-content-center mx-5">
      <label class="form-check-label" for="flexSwitchCheckDefault">
        Indonesia
      </label>
      <div class="form-check form-switch align-center">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      </div>
      <label class="form-check-label" for="flexSwitchCheckDefault">
        Inggris
      </label>
    </div>
  );
};

export default ToggleButton;
