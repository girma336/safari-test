export default function Sidebar() {
  return (
    <aside className="h-screen max-w-[200px] w-full bg-gray-800 text-white p-4 fixed left-0 top-0">
      <nav className="flex flex-col gap-4 mt-16">
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Dashboard
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Users
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Settings
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Logout
        </a>
      </nav>
    </aside>
  );
}
