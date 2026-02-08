function Layout({ children }) {
  return (

    // min-h-screen
    
    <div className="mt-10 flex flex-col bg-gray-100">
      {children}
    </div>
    
  );
}

export default Layout;
