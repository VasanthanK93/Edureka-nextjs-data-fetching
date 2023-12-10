// components/UserList.tsx
import Link from 'next/link';
import {User} from '../../interface/User'

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={user.id} >
          <Link href={`/user/${user.id}`}>
        <img className="w-full" src={user.image} alt={`${user.firstName} ${user.lastName}`} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{`${user.firstName} ${user.lastName}`}</div>
          <p className="text-gray-700 text-base">{user.birthDate}</p>
          <p className="text-gray-700 text-base">{user.email}</p>
          <p className="text-gray-700 text-base">{user.phone}</p>
        </div>
      </Link>
      </div>
      ))}
    </ul>
  );
};

export default UserList;
