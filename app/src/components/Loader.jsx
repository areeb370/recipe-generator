export default function Loader() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mb-4"></div>
        <p className="text-gray-600 font-medium">Generating your recipe...</p>
        <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
      </div>
    </div>
  );
}
