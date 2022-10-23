const TransactionHistory = ({ items }) => {
  <table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((id, type, amount, currencies) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currencies}</td>
        </tr>
      ))}
    </tbody>
  </table>;
};

export default TransactionHistory;
