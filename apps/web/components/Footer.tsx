export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500 flex items-center justify-between">
        <span>&copy; {new Date().getFullYear()} Chosen Visuals</span>
        <span className="italic">Imagine. Create. Inspire.</span>
      </div>
    </footer>
  );
}
