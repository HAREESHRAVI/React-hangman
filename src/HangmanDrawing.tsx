const Head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);
const Body = (
  <div
    style={{
      width: "10px",
      height: "110px",
      background: "black",
      position: "absolute",
      right: "0px",
      top: "110px",
    }}
  ></div>
);
const RightArm = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "135px",
      right: "-80px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);
const LeftArm = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "135px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);
const LeftLeg = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "265px",
      right: "-50px",
      rotate: "45deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);
const RightLeg = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "198px",
      right: "-73px",
      rotate: "135deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);
const BodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];
type Props = {
  numberOfGuesses: number;
};
export function HangmanDrawing({ numberOfGuesses }: Props) {
  return (
    <div style={{ position: "relative" }}>
      {BodyParts.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          position: "absolute",
          top: 0,
          right: 0,
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
