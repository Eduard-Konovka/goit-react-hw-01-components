import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items = [] }) {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>{('Type').toUpperCase()}</th>
          <th>{('Amount').toUpperCase()}</th>
          <th>{('Currency').toUpperCase()}</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{(item.type).charAt(0).toUpperCase() + (item.type).substring(1)}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};