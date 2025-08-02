import ProjectForm from '@/components/ProjectForm';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      
      {/* Project Creation Form */}
      <div className="mb-8">
        <ProjectForm />
      </div>
      
      {/* Existing Projects Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Existing Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Your Projects</h3>
            <p className="text-gray-600">Created projects will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
