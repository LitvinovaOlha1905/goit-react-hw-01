import React from "react"
import styles from "./TransactionHistory.module.css"

function TransactionHistory({ items }) {
	return (
		<div className='container'>
			<table className={styles.tableContent}>
				<thead>
					<tr>
						<th className={styles.thead}>Type</th>
						<th className={styles.thead}>Amount</th>
						<th className={styles.thead}>Currency</th>
					</tr>
				</thead>

				<tbody className={styles.tbody}>
					{items.map(el => (
						<tr key={el.id}>
							<td className={styles.td}>{el.type}</td>
							<td className={styles.td}>{el.amount}</td>
							<td className={styles.td}>{el.currency}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default TransactionHistory
