import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="d-flex justify-content-center gap-3 align-items-center my-4">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        className="form-check-input"
        type="checkbox"
      />

      <div className="terms">
        <p
          style={{ visibility: isHover ? "visible" : "hidden" }}
          className="bg-light text-black p-2 rounded text-center"
        >
          Size bir ürün teslimatı yapmayacağız
        </p>
        <label htmlFor="" className="lead">
          Koşulları okudum ve kabul ediyorum
        </label>
      </div>

      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-warning"
      >
        Siparişi Tamamla
      </button>
    </div>
  );
};

export default Form;
