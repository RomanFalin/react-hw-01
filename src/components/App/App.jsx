import Statistics from 'components/Statistics/Statistics';
import Profile from 'components/Profile/Profile';
import FriendsList from 'components/FriendsList/FriendsList';
import TransactionHistory from 'components/Transactions/TransactionHistory';
import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
