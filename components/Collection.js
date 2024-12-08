import Image from "next/image";
import Link from "next/link";

const Collection = () => {
  return (
    <>
      <section className="pb-60 pt-14 bg-pink-100 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="relative h-64 bg-pink-100">
            <Image
              src="/Table-Download-PNG.png"
              alt="Image 1"
              width={400}
              height={400}
            />
            <div className="absolute bottom-0 left-0 mt-16">
              <h2 className="text-lg font-bold">Side Table</h2>
              <a href="/link-to-page1" className="text-sm underline">Shop Now</a>
            </div>
          </div>

          <div className="relative h-64 bg-pink-100">
            <Image
              src="/sofa_PNG6943.png"
              alt="Image 2"
              width={800}
              height={800}
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 mt-16">
              <h2 className="text-lg font-bold">Side Table</h2>
              <a href="/link-to-page2" className="text-sm underline">Shop Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-80 pt-10 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div class="text-center text-lg">
          <h2><b>Top Picks for You</b></h2>
          <p>Find Bright Idea to suit your taste with our greate selection of suspention, floor and table lights.</p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 pt-8">
            <div className="relative h-64">
              <Image
                src="/Table-Download-PNG.png"
                alt="Image 1"
                width={400}
                height={400}
              />
              <p>Trender Moduler Sofa_3</p>
              <h2>Rs. 25,000.00</h2>
            </div>

            <div className="relative h-64">
              <Image
                src="/sofa_PNG6943.png"
                alt="Image 2"
                width={900}
                height={900}
                objectFit="cover"
              />
              <p>Trender Moduler Sofa_3</p>
              <h2>Rs. 25,000.00</h2>
            </div>
            <div className="relative h-64">
              <Image
                src="/sofa_PNG6943.png"
                alt="Image 2"
                width={900}
                height={900}
                objectFit="cover"
              />
              <p>Trender Moduler Sofa_3</p>
              <h2>Rs. 25,000.00</h2>
            </div>
            <div className="relative h-64">
              <Image
                src="/sofa_PNG6943.png"
                alt="Image 2"
                width={900}
                height={900}
                objectFit="cover"
              />
              <p>Trender Moduler Sofa_3</p>
              <h2>Rs. 25,000.00</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-80 pt-16 bg-yellow-100 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/sofa_PNG6943.png"
              alt="Description of the image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="sm:max-w-lg flex flex-col justify-center space-y-6 lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              Rocket Single Seater
            </h1>
            <div>
              <div className=" w-17 border-black border-4 bg-transparent px-4 py-2 text-center font-medium text-black">
                  Shop Now
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
