// components/UserDetails.tsx
import {User} from '../../interface/User'

interface UserDetailsProps {
    user: User;
  }
  
  const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg" >
        <img className="w-full" src={user.image} alt={`${user.firstName} ${user.lastName}`} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{`${user.firstName} ${user.lastName}`}</div>
          <p className="text-gray-700 text-base">{user.birthDate}</p>
          <p className="text-gray-700 text-base">{user.email}</p>
          <p className="text-gray-700 text-base">{user.phone}</p>
        </div>
      </div>
    );
  };
  
  export default UserDetails;
  