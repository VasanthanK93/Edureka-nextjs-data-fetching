// pages/admin.tsx
import { useRouter } from 'next/router';
import AdminPanel from '../src/components/AdminPanel';

const AdminPage: React.FC = () => {
  const router = useRouter();

  const isAuthenticated = true; 

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <AdminPanel />
    </div>
  );
};

export default AdminPage;
