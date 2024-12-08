import Image from "next/image";
import Link from "next/link";
const Shop = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <main className="mx-auto w-11/12 px-4 sm:px-6 lg:px-8 relative w-full h-auto pt-8 pb-24">
          <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
            <Image
              src="/wall-1475318_1280.jpg"
              width={1000}
              height={300}
              alt="Banner Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
              <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
                Shop
              </h2>
              <div className="flex items-center space-x-2 text-white">
                <a href="/" className="text-white">Home</a>
                <span className="text-white"> &gt; </span>
                <a href="/Shop" className="text-orange-500">Shop</a>
              </div>
            </div>
          </div>
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <div class="text-center text-lg">
              <h2><b>Top Picks for You</b></h2>
              <p>Find Bright Idea to suit your taste with our greate selection of suspention, floor and table lights.</p>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 pt-8">
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 1"
                    width={400}
                    height={400}
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/sofa_PNG6943.png"
                    alt="Image 2"
                    width={900}
                    height={900}
                    objectFit="cover"
                  /> <p className="text-lg mt-2">Trender Modular Sofa_3</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">Rs. 25,000.00</h2>
                  <Link href="/Shop/product" className="text-blue-500 mt-2 inline-block">
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Shop;
