import PropTypes from "prop-types";
import css from "./transactionhistory.module.css"; 

export default function TransactionHistory({ items }) {
    return <table className={css.transactionhistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => (<tr key = {item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>))}
        </tbody>
    </table>
}

TransactionHistory.propTypes = {
items: PropTypes.shape({
id: PropTypes.number,
type: PropTypes.string,
amount: PropTypes.number,
currency: PropTypes.string,
}).isRequired 
};