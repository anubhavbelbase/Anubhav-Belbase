import React, { useState, useRef, useEffect } from 'react';
import { User } from '../types';

interface UsersTableProps {
  users: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (userId: string) => {
    setOpenDropdownId(openDropdownId === userId ? null : userId);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Fix: Cast event.target to Element to use .closest() which is not available on EventTarget
      if (openDropdownId && !(event.target as Element).closest(`#actions-menu-${openDropdownId}`)) {
         setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdownId]);

  return (
    <div className="overflow-x-auto relative border rounded-lg">
      <table className="w-full text-sm text-left text-slate-500">
        <thead className="text-xs text-slate-700 uppercase bg-slate-50">
          <tr>
            <th scope="col" className="px-6 py-3">User</th>
            <th scope="col" className="px-6 py-3">Role</th>
            <th scope="col" className="px-6 py-3">Last Active</th>
            <th scope="col" className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="bg-white border-b hover:bg-slate-50">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img className="w-10 h-10 rounded-full" src={user.avatarUrl} alt={`${user.name} avatar`} />
                  <div>
                    <div className="font-semibold text-slate-900">{user.name}</div>
                    <div className="text-slate-500">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${user.role === 'Admin' ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-100 text-slate-800'}`}>
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4">{new Date(user.lastActive).toLocaleDateString()}</td>
              <td className="px-6 py-4 text-right">
                <div id={`actions-menu-${user.id}`} className="relative inline-block text-left">
                  <button
                    onClick={() => toggleDropdown(user.id)}
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-slate-900 bg-white rounded-lg hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-slate-50"
                  >
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                  {openDropdownId === user.id && (
                     <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                        <div className="py-1" role="none">
                            <a href="#" className="text-slate-700 block px-4 py-2 text-sm hover:bg-slate-100" role="menuitem"><i className="fa-solid fa-pencil w-6"></i>Edit User</a>
                            <a href="#" className="text-slate-700 block px-4 py-2 text-sm hover:bg-slate-100" role="menuitem"><i className="fa-solid fa-toggle-off w-6"></i>Deactivate</a>
                            <a href="#" className="text-red-600 block px-4 py-2 text-sm hover:bg-red-50" role="menuitem"><i className="fa-solid fa-trash-alt w-6"></i>Delete</a>
                        </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;