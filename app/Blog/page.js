import Image from "next/image";
const Blog = () => {
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
                  Blog Post
                </h2>
                <div className="flex items-center space-x-2 text-white">
                  <a href="/" className="text-white">Home</a>
                  <span className="text-white"> &gt; </span>
                  <a href="/blog" className="text-orange-500">Blog</a>
                </div>
              </div>
            </div>
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>
            </div>
    
            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Blog
              </h2>
    
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Product grid */}
                <div className="lg:col-span-3">
                  <div className="max-w-4xl mx-auto p-4">
                    {/* Image Section */}
                    <div className="relative w-full h-96">
                      <Image
                        src="/latop.jpg"
                        alt="Blog Post Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      
                    </div>
    
                    <div className="mt-6 text-lg text-gray-800">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                      </p>
                      <p className="mt-4">
                        Nam varius, ligula a interdum ullamcorper...
                      </p>
                    </div>
                  </div>
                </div>
                </div>
            </section>
          </main>
        </div>
      </>
    );
  }
    
  export default Blog;
  