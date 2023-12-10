// pages/users/[page].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import UserList from '../../src/components/UserList';
import {User} from '../../interface/User'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

interface UsersPageProps {
  users: User[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href={`/users/1`}
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href={`/users/2`}
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href={`/users/3`}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href={`/users/8`}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href={`/users/9`}
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href={`/users/10`}
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
          </nav>
        </div>
      </div>
    </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Calculate the total number of pages based on the number of users
  const res = await fetch('https://dummyjson.com/users');
  const usersObj = await res.json();
  const users: User[] = usersObj.users;
  const totalPages = Math.ceil(users.length / 10);

  // Generate paths for each page
  const paths = Array.from({ length: totalPages }, (_, index) => ({
    params: { page: (index + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async ({ params }) => {
  const page = params?.page ? parseInt(params.page as string, 10) : 1;
  const perPage = 10;
  const start = (page - 1) * perPage;
  const end = start + perPage;

  // Fetch users for the current page
  const res = await fetch('https://dummyjson.com/users');
  const usersObj = await res.json();
  const users: User[] = usersObj.users;

  return {
    props: {
      users: users.slice(start, end),
    },
  };
};

export default UsersPage;
