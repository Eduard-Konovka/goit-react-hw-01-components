import './App.css';
import Container from './components/Container';
import Section from './components/Section';
import ProfileList from './components/ProfileList';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import users from './db/users.json';
import statisticalData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

export default function App() {
  return (
    <Container>
      <Section title="Профили социальной сети">
        <ProfileList items={users} />
      </Section>

      <Section title="Секция статистики">
        <Statistics title="Upload stats" options={statisticalData} />
      </Section>

      <Section title="Секция друзей">
        <FriendList friends={friends} />
      </Section>

      <Section title="История транзакций">
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
}
