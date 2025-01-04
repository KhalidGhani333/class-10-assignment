import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section: Image */}
        <div className="relative">
          <Image
            src="/aboutImage.jpg"
            alt="About Us"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg object-cover" />
        </div>

        {/* Right Section: Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-red-500">Us</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Welcome to our store! We are passionate about delivering the highest
            quality products and an exceptional shopping experience. Our mission
            is to provide you with carefully curated items that fit your style
            and needs.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-red-500 font-bold">✓</span>
              <p className="text-gray-700 text-md">Top-notch customer service</p>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500 font-bold">✓</span>
              <p className="text-gray-700 text-md">Carefully curated products</p>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500 font-bold">✓</span>
              <p className="text-gray-700 text-md">Affordable pricing</p>
            </li>
          </ul>

          <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2  focus:ring-offset-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
