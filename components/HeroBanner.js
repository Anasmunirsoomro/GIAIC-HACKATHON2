import Image from 'next/image';
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="pb-80 pt-16 sm:pb-40 bg-yellow-100 sm:pt-24 lg:pb-48 lg:pt-40">
  <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row lg:space-x-8">
      <div className="sm:max-w-lg flex flex-col justify-center space-y-6 lg:w-1/2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Rocket Single Seater
        </h1>
        <div>
          <div className="mt-10">
            <Link
              href="/products"
              className="border-b-4 border-b-gray-700 bg-transparent px-8 py-3 text-center font-medium text-black"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src="/sofa_PNG6943.png"
          alt="Description of the image"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default HeroBanner; 
