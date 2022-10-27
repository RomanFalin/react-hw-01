import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableHeadItem,
  TableBodyItem,
  TableBodyRow,
} from './TransactionHistory.styled';
import { getBoxColor } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable className="transaction-history">
      <thead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyRow key={id} color={getBoxColor(type)}>
            <TableBodyItem>{type}</TableBodyItem>
            <TableBodyItem>{amount}</TableBodyItem>
            <TableBodyItem>{currency}</TableBodyItem>
          </TableBodyRow>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
