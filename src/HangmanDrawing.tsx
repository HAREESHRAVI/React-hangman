const Head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      left: "300px",
    }}
  ></div>
);

export function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {Head}
      <div
        style={{
          height: "50px",
          width: "10px",
          position: "absolute",
          top: 0,
          left: 330,
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "220px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "250px", background: "black" }}
      ></div>
    </div>
  );
}
