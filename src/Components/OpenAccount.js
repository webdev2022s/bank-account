import Button from "../Utils/Button";

export default function OpenAccount({ openAccount, dispatch }) {
  return (
    <div>
      <Button
        label="Open Accounts"
        disable={openAccount}
        clickFunction={() => dispatch({ type: "open" })}
      />
    </div>
  );
}
