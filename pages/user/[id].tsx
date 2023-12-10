// pages/user/[id].tsx
import { GetServerSideProps } from 'next';
import UserDetails from '../../src/components/UserDetails';
import {User } from '../../interface/User'

interface UserDetailsProps {
  user: User;
}

const UserDetailPage: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div>
      <h1>User Details</h1>
      <UserDetails user={user} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<UserDetailsProps> = async ({ params }) => {
  const id = params?.id;

  // Fetch user details based on the user ID
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const user: User = await res.json();

  return {
    props: {
      user,
    },
  };
};

export default UserDetailPage;
