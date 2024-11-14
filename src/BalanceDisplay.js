import { useSelector } from "react-redux";
import accountReducer from "./features/account/accountSlice";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const x = useSelector((store) => store.account);
  return <div className="balance">{formatCurrency(x.balance)}</div>;
}

export default BalanceDisplay;
