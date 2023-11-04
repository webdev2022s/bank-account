export default function Button({
  label = "click",
  className,
  clickFunction,
  disable = true,
}) {
  return (
    <>
      <button className={className} onClick={clickFunction} disabled={disable}>
        {" "}
        {label}
      </button>
    </>
  );
}
