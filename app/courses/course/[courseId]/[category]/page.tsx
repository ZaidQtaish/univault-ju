export default async function CourseCategoryPage({ params }: { params: Promise<{ courseId: string; category: string }> }) {
const { courseId, category } = await params;


  return (
    <div className="p-6">
      <h1 className="capitalize text-primary">
        {category.replace('-', ' ')}
      </h1>
      <div className="grid gap-4 mt-6">
        {/* Map through your files here */}
      </div>
    </div>
  );
}