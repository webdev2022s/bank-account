import Button from "../Utils/Button";

function Deposit({ openAccount, dispatch, deposit, valueDeposit }) {
  return (
    <div>
      <input
        type="text"
        value={valueDeposit}
        disabled={openAccount}
        onChange={(e) =>
          dispatch({ type: "inputDeposit", payload: Number(e.target.value) })
        }
      />
      <Button
        label={`Deposit ${valueDeposit}`}
        disable={openAccount || valueDeposit <= 0}
        clickFunction={() => dispatch({ type: "deposit" })}
      />
    </div>
  );
}

export default Deposit;
