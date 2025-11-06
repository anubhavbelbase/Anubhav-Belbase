import React from 'react';
import { MOCK_USERS } from '../constants';
import UsersTable from '../components/UsersTable';

const UsersView: React.FC = () => {
  return (
    <div className="p-4 md:p-8">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-xl font-bold text-slate-800">User Management</h2>
                <button
                    className="px-4 py-2.5 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75 flex items-center gap-2"
                >
                    <i className="fa-solid fa-plus"></i>
                    Add User
                </button>
            </div>
            <UsersTable users={MOCK_USERS} />
        </div>
    </div>
  );
};

export default UsersView;