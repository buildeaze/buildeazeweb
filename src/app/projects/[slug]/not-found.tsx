import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}