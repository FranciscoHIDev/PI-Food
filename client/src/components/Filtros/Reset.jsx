import React from "react";

function Reset() {
  function handleReset(e) {
    e.preventDefault();
    window.location.reload();
  }

  return (
    <div>
      <button onClick={(e) => handleReset(e)}>Reset</button>
    </div>
  );
}

export default Reset;
