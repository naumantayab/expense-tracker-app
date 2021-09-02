import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState.js";
// import  transactions from './Transaction.js'
export const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map(transaction => transaction.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
	return (
		<>
			<div className="container">
				<h4>Your Balance</h4>
				<h1 id="balance">${total}</h1>
			</div>
		</>
	);
};
