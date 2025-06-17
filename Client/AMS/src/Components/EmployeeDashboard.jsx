import React from 'react'

const EmployeeDashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-pink-600 mb-4">Welcome, Employee 🧑‍💼</h1>
                <p className="text-gray-600 mb-6">You're logged in to your Dashboard</p>

                <div className="grid grid-cols-2 gap-6 mt-6">
                    <div className="bg-pink-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-200">
                        <h2 className="text-xl font-semibold text-pink-700">My Assets</h2>
                        <p className="text-sm text-gray-600 mt-2">View all assets assigned to you</p>
                    </div>
                    <div className="bg-yellow-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-200">
                        <h2 className="text-xl font-semibold text-yellow-700">Request Asset</h2>
                        <p className="text-sm text-gray-600 mt-2">Send a request for a new asset</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDashboard
