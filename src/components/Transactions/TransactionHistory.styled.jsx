import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  min-width: 300px;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const TableHeadItem = styled.th`
  color: #f8f8f8;
  background-color: #9b4fac;
  font-weight: bold;
  padding: 10px 0;
  text-transform: uppercase;
`;
export const TableBodyItem = styled.td`
  padding: 10px 30px;
  &:not(:last-child) {
    border-right: 1px solid #e1e1e1;
  }
`;
export const TableBodyRow = styled.tr`
  background-color: ${props => props.color};
`;

export function getBoxColor(type) {
  switch (type) {
    case 'invoice':
      return '#d29ede';
    case 'payment':
      return '#ebbbf9';
    case 'withdrawal':
      return '#dea4ec';
    case 'deposit':
      return '#e8adf6';
    default:
      throw new Error(`Unsupported variant prop value - ${type}`);
  }
}
