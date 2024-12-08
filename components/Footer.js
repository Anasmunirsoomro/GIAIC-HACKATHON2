"use client";

const Footer = () => {
  return (
    <>
      <footer className=" mb-0 bg-white lg:grid lg:grid-cols-5">
        <div className="grid place-items-center block h-32 lg:col-span-2 lg:h-full ">
          <ui>
            <li>400 University Drive Suite 200 Coral</li>
            <li>Gables</li>
            <li>Fl 33134 USA</li>
          </ui>
        </div>
        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium text-gray-900">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Clothing Style
                    </a>
                  </li>

                  <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Fashion Design
                    </a>
                  </li>

                  <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Design
                    </a>
                  </li>

                  <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Branding
                    </a>
                  </li>

                  <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Marketing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Contact{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Accounts Review{" "}
                    </a>
                  </li>
                </ul>
              </div>

            </div>
            <div>
              <h1>NewsLetter</h1>
              <div className="relative my-12 w-52 ">
                <input
                  type="text"
                  id="input"
                  className="w-full text-xl border-b-2 border-gray-300 bg-transparent py-1 focus:outline-none focus:border-gray-800"
                />
                <label
                  htmlFor="input"
                  className="absolute top-0 left-0 text-gray-300 text-base transition-all duration-300 pointer-events-none"
                >
                  Label
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-800 transform scale-x-0 transition-all duration-300" />
              </div>
              <input className="min-h-[50px] py-2 px-4 border-none rounded-lg bg-black text-white text-sm cursor-pointer ease-in-out" value="Subscribe" type="submit" />
            </div>
          </div>


          <div className="mt-12 border-t border-gray-100 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a
                    href="#!"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#!"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#!"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Cookies{" "}
                  </a>
                </li>
              </ul>

              <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                &copy; 2024. Ritesh Clothing Store . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
