// pages/index.tsx
import { GetStaticProps } from 'next';
import UserList from '../src/components/UserList';
import {User} from '../interface/User'

interface HomeProps {
  users: User[];
}

const Home: React.FC<HomeProps> = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // Fetch users from your API or database
  const res = await fetch('https://dummyjson.com/users/');
  const usersObj = await res.json();
  const users: User[] = usersObj.users;
  return {
    props: {
      users,
    },
  };
};

export default Home;
