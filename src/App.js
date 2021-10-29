import './App.css';
import Container from './components/Container';
import Section from './components/Section';
import ProfileList from './components/ProfileList';
import Statistics from './components/Statistics';
import users from './db/users.json';
import statisticalData from './db/statistical-data.json';

export default function App() {
  return (
    <Container>
      <Section title="Профиль социальной сети">
        <ProfileList items={users} />
      </Section>

      <Section title="Секция статистики">
        <Statistics title="Upload stats" options={statisticalData} />
      </Section>

      <Section title="Секция друзей"></Section>

      <Section title="История транзакций"></Section>
    </Container>
  );
}
