import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const AddTransaction = () => {
	const [expenseData, setExpenseData] = useState({
		text: "",
		amount: "",
	});

	const { text, amount } = expenseData;

	let name, value;
	const postExpenseData = (event) => {
		name = event.target.name;
		value = event.target.value;

		setExpenseData({ ...expenseData, [name]: value });
	};

	const { addTransaction } = useContext(GlobalContext);

	const submitTransaction = (e) => {
		e.preventDefault();

			const newTransaction = {
				id: new Date().getTime().toString(),
				text,
				amount: +amount,
			};
			addTransaction(newTransaction);

			if (newTransaction) {
				setExpenseData({
					text: "",
					amount: "",
				});

		}
	};
	return (
		<>
			<h3>Add New Transaction</h3>
			<form onSubmit={submitTransaction}>
				<div className="form-control">
					<label htmlFor="text">Description</label>
					<input
						type="text"
						name="text"
						id="text"
						placeholder="Detail of Transaction"
						value={text}
						onChange={postExpenseData}
						required="required"
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Transaction Amount
						<br />
					</label>
					<input
						type="number"
						name="amount"
						id="amount"
						placeholder="Dollar Value of Transaction"
						value={amount}
						onChange={postExpenseData}
						required="required"
					/>
				</div>
				<button className="btn">
					Add Transaction
				</button>
			</form>
		</>
	);
};
