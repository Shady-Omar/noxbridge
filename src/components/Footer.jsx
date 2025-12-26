export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 mt-20">
      <div className="max-w-6xl mx-auto p-6 text-center text-sm">
        © {new Date().getFullYear()} Noxbridge. All rights reserved.
      </div>
    </footer>
  );
}
