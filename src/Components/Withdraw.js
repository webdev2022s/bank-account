import Button from "../Utils/Button";

export default function Withdraw({
  dispatch,
  openAccount,
  valueWithdraw,
  balance,
}) {
  return (
    <div>
      <input
        type="text"
        value={valueWithdraw}
        disabled={openAccount}
        onChange={(e) =>
          dispatch({ type: "inputWithdraw", payload: Number(e.target.value) })
        }
      />
      <Button
        label={`withdraw ${valueWithdraw}`}
        clickFunction={() => dispatch({ type: "withdraw" })}
        disable={openAccount || valueWithdraw <= 0 || balance < valueWithdraw}
      />
    </div>
  );
}
