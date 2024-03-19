export function HangmanWord() {
  const word = "test";
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {(word, split("").map((letter, index) => {}))}
    </div>
  );
}
