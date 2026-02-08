function Sidebar() {
  return (
    <aside className="w-60 bg-white border-r p-5">
      <ul className="space-y-3 font-medium pb-10">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Products</li>
        <li className="hover:text-blue-600 cursor-pointer">Orders</li>
        <li className="hover:text-blue-600 cursor-pointer">Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
