import React from "react";

// Dummy data for jobs
const jobs = [
    { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", dateentered: "2025-04-19" },
    { id: 2, title: "Backend Engineer", company: "DataSoft", location: "New York", dateentered: "2025-04-20" },
    { id: 3, title: "UI/UX Designer", company: "Creative Studio", location: "San Francisco", dateentered: "2025-05-21" },
];

const JobsPage = () => {
    return (
     <div className="">
        <main className="">
       <div className="p-16 bg-white rounded-xl shadow-2xl flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-8 text-center">Featured Jobs</h1>
                <p className="text-gray-600 mb-8 text-center text-lg">
                    Find jobs, create trackable resumes and enrich your applications.
                </p>
                <div className="mb-10 w-full">
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        // No search logic yet, just UI
                    />
                </div>
                <ul className="space-y-8 w-full">
                    {jobs.map((job) => (
                        <li key={job.id} className="border rounded-lg p-8 shadow-sm hover:shadow-md transition bg-gray-50">
                            <h2 className="text-2xl font-semibold">{job.title}</h2>
                            <p className="text-gray-700">{job.company}</p>
                            <p className="text-gray-500">{job.location}</p>
                            <p className="text-gray-500">{job.dateentered}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
     </div>
    );
};

export default JobsPage;