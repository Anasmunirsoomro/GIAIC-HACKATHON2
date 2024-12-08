import Image from "next/image";
import Link from "next/link";
const CardSkeleton = () => {
  return (
    <>
    <div className="md:flex w-11/12 lg:w-full mx-auto items-center justify-center p-2 flex-wrap md:flex-nowrap">
      <div role="status" className="flex flex-col items-center justify-center h-40 md:h-56 w-full md:mx-2 my-4 bg-gray-300 rounded-lg">
        <Image
          src="/latop.jpg"
          width={400}
          height={400}
          objectFit="fill"
          alt="Laptop image"
        />
        <Link href="/blog">
          <button className="mt-8 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Go to Category
          </button>
        </Link>
      </div>
      <div role="status" className="flex flex-col items-center justify-center h-40 md:h-56 w-full md:mx-2 my-4 bg-gray-300 rounded-lg">
        <Image
          src="/laptop-6856557_640.jpg"
          width={400}
          height={500}
        ></Image>
        <Link href="/products">
          <button className="mt-8 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Go to Category
          </button>
        </Link>
      </div>
      <div role="status" className="flex flex-col items-center justify-center h-40 md:h-56 w-full md:mx-2 my-4 bg-gray-300 rounded-lg">
        <Image
          src="/laptop-1483974_1280.jpg"
          width={400}
          height={800}
        ></Image>
        <Link href="/products">
          <button className="mt-8 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Go to Category
          </button>
        </Link>
      </div>
    </div >
    </>
  );
};

export default CardSkeleton;
