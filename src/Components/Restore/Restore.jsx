import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";

const Restore = () => {
  const { width } = useWindowSize();
  return (
    <section>
      {
        width < 768 ? (
        <div style={{ textAlign: "center", padding: "2em" }}>
          <p style={{ fontWeight: 900, fontSize: "20px" }}>SAVE THE ECOLOGY </p>

          <p style={{ fontWeight: 900, fontSize: "20px" }}>
            RESTORE THE NATURE
          </p>
        </div>
      ) : width < 992 ? (
        <div style={{ textAlign: "center", padding: "2em" }}>
          <p style={{ fontWeight: 900, fontSize: "30px" }}>SAVE THE ECOLOGY </p>

          <p style={{ fontWeight: 900, fontSize: "30px" }}>
            RESTORE THE NATURE
          </p>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "2em" }}>
          <p style={{ fontWeight: 900, fontSize: "40px" }}>SAVE THE ECOLOGY </p>

          <p style={{ fontWeight: 900, fontSize: "40px" }}>
            RESTORE THE NATURE
          </p>
        </div>
      )}

      <hr />
    </section>
  );
};

export default Restore;
