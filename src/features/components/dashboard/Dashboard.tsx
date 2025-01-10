import React from 'react';
import 'tailwindcss/tailwind.css';
import DemoPage from "@/features/components/usersTable/page.tsx";


const Dashboard: React.FC = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <DemoPage />
        </div>
    );
};

export default Dashboard;