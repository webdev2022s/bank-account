import Button from "../Utils/Button";
import OpenAccount from "./OpenAccount";

export default function CloseAccount({ dispatch, openAccount }) {
  return (
    <>
      <Button
        label="Close Account"
        disable={openAccount}
        clickFunction={() => dispatch({ type: "close" })}
      />
    </>
  );
}
