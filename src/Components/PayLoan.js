import Button from "../Utils/Button";

export default function PayLoan({ openAccount, dispatch, balance, loan }) {
  return (
    <div>
      <Button
        label=" Pay Loan"
        disable={openAccount || balance < loan || loan === 0}
        clickFunction={() => dispatch({ type: "pay" })}
      />
    </div>
  );
}
