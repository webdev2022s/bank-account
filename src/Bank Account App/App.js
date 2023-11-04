import { useReducer } from "react";
import CloseAccount from "../Components/CloseAccount";
import Deposit from "../Components/Deposit";
import Main from "../Components/Main";
import OpenAccount from "../Components/OpenAccount";
import PayLoan from "../Components/PayLoan";
import RequestLoan from "../Components/RequestLoan";
import Withdraw from "../Components/Withdraw";
import Balance from "../Components/Balance";
import Loan from "../Components/Loan";

const initialState = {
  openAccount: false,
  balance: 0,
  loan: 0,
  valueDeposit: 0,
  valueWithdraw: 0,
  valueRequestLoan: 0,
};

function reducer(state, action) {
  if (!state.openAccount && action.type !== "open") return state;
  switch (action.type) {
    case "open":
      return { ...state, openAccount: true, balance: 500 };
    case "inputDeposit":
      return { ...state, valueDeposit: action.payload };
    case "deposit":
      return { ...state, balance: state.balance + state.valueDeposit };
    case "inputWithdraw":
      return { ...state, valueWithdraw: action.payload };
    case "withdraw":
      return {
        ...state,
        balance:
          state.balance === 0
            ? state.balance
            : state.balance - state.valueWithdraw,
      };
    case "inputRequestLoan":
      return { ...state, valueRequestLoan: action.payload };
    case "request":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: state.valueRequestLoan,
        balance: state.valueRequestLoan + state.balance,
      };
    case "pay":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    case "close":
      if (state.balance !== 0) return state;
      return { ...initialState };
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [
    {
      openAccount,
      balance,
      loan,
      valueDeposit,
      valueWithdraw,
      valueRequestLoan,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <div className="center">
      <header>
        <h1>Bank Account</h1>
      </header>
      <Main>
        <Balance balance={balance} openAccount={openAccount} />
        <Loan loan={loan} />
        <OpenAccount dispatch={dispatch} openAccount={openAccount} />
        <Deposit
          openAccount={!openAccount}
          dispatch={dispatch}
          valueDeposit={valueDeposit}
        />
        <Withdraw
          valueWithdraw={valueWithdraw}
          openAccount={!openAccount}
          dispatch={dispatch}
          balance={balance}
        />
        <RequestLoan
          openAccount={!openAccount}
          dispatch={dispatch}
          valueRequestLoan={valueRequestLoan}
        />
        <PayLoan
          openAccount={!openAccount}
          dispatch={dispatch}
          balance={balance}
          loan={loan}
        />
        <CloseAccount openAccount={!openAccount} dispatch={dispatch} />
      </Main>
    </div>
  );
}

export default App;
