import Button from "../Utils/Button";

export default function RequestLoan({
  valueRequestLoan,
  dispatch,
  openAccount,
}) {
  return (
    <div>
      <input
        type="text"
        value={valueRequestLoan}
        onChange={(e) =>
          dispatch({
            type: "inputRequestLoan",
            payload: Number(e.target.value),
          })
        }
        disabled={openAccount}
      />
      <Button
        label={`Request Loan ${valueRequestLoan}`}
        clickFunction={() => dispatch({ type: "request" })}
        disable={openAccount || valueRequestLoan <= 0}
      />
    </div>
  );
}
