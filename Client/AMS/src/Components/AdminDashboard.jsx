import React from 'react'

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome, Admin 👑</h1>
                <p className="text-gray-600 mb-6">You're logged in to the Admin Dashboard</p>

                <div className="grid grid-cols-2 gap-6 mt-6">
                    <div className="bg-indigo-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-200">
                        <h2 className="text-xl font-semibold text-indigo-700">Manage Employees</h2>
                        <p className="text-sm text-gray-600 mt-2">Add, remove, or update employee details</p>
                    </div>
                    <div className="bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-200">
                        <h2 className="text-xl font-semibold text-purple-700">Manage Assets</h2>
                        <p className="text-sm text-gray-600 mt-2">Assign or update company assets</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
