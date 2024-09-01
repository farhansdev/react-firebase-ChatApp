import React from 'react';

const AdminPanel = () => {
  return (
    <section id="admin" className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Admin Panel</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">User Management</h3>
            <p className="text-gray-600">Manage users, permissions, and roles.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Analytics</h3>
            <p className="text-gray-600">View detailed analytics and reports.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Settings</h3>
            <p className="text-gray-600">Configure system settings and preferences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
