import './App.css';
import Layout from "./components/Layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProductCard from './components/ProductCard';

function App() {

  const products = [
    {
      id: 1,
      title: "Image",
      price: 150000,
      image: "https://picsum.photos/200?1",
      inStock: true,
    },
    {
      id: 2,
      title: "Image",
      price: 70000,
      image: "https://picsum.photos/200?2",
      inStock: false,
    },
    {
      id: 3,
      title: "Image",
      price: 5000,
      image: "https://picsum.photos/200?3",
      inStock: true,
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center py-5 mb-5 bg-blue-700 mask-b-from-neutral-700">Level 3 – React in Depth</h1>

      <div>

        <Layout>
          <Header />

            <div className="flex flex-1">
              <Sidebar />
              <Main>
                <h2 className="text-2xl font-bold mb-3">Welcome</h2>
                <p className="text-gray-600">
                  This content is passed using children props.
                </p>
              </Main>
            </div>

          <Footer />
        </Layout>

      </div>

      <div>
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-6 text-center py-10">All Products</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {products.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default App
