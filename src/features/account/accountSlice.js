import { createSlice } from "@reduxjs/toolkit";

const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "accounts",
  initialState: accountInitialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan(state, action) {
      state.loan = action.payload;
      state.balance += action.payload;
      state.loanPurpose = action.payload;
      console.log(state.loan);
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
    },
  },
});

// Export action creators from accountSlice.actions
export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

// Export the reducer as default export
export default accountSlice.reducer;
