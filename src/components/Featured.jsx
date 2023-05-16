import React from "react";

const Featured = () => {
  return (
    <section className="py-8 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className=" px-40 mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl ">
            Featured <span className="font-bold">Projects</span>
          </h2>
          <p className="font-serif text-sm dark:text-gray-600 text-gray-600">
            Exclusive showcase of top projects
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col border-2 hover:shadow-lg dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://is1-2.housingcdn.com/4f2250e8/c27bff3c6a1ffb9f4f9436938d2f338a/v0/medium/ramji_radhya_puram-bishnuli-greaternoida-ramji_corp.jpeg.webp"
              />
            </a>
            <div className="flex p-5 flex-col flex-1 ">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>

              <h3 className="  text-md font-semibold leading-snug">
                Ramji Radhya Puram
              </h3>
              <p class="  text-xs text-gray-500">
                By ramji corp
              </p>
              <p class="  pt-3 text-xs text-gray-700">
              3 BHK Villa
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider text-gray-500 hover:text-black dark:text-violet-400"
              >
                  Bishnuli, Greater Noida
              </a>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 font-semibold dark:text-gray-800">
                <span>60.2 L - 1.01 Cr</span>
              </div>
            </div>
          </article>

          <article className="flex hover:shadow-lg flex-col dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://is1-2.housingcdn.com/4f2250e8/bd8aa4d6b2f4039b681c4bac33f1de00/v0/medium/imperia_prideville-yeida-greaternoida-imperia_structures_ltd.jpeg.webp"
              />
            </a>
            <div className="flex p-5 flex-col flex-1 ">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>

              <h3 className="   text-md font-semibold leading-snug">
                Imperia Prideville
              </h3>
              <p class="  text-xs text-gray-500">
                By imperia Ltd
              </p>
              <p class="  pt-3 text-xs text-gray-700">
              1,2,3 BHK Villa
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider text-gray-500 hover:text-black dark:text-violet-400"
              >
                  Surajpur site
              </a>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 font-semibold dark:text-gray-800">
                <span>40.2 L - 1.01 Cr</span>
              </div>
            </div>
          </article>
          <article className="flex hover:shadow-lg flex-col dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://is1-3.housingcdn.com/4f2250e8/8fffd7100110df7068529bf25b0bcb24/v0/medium/ganga_residency-noida_extension-noida-india_bricks_builders_and_developers.jpg.webp"
              />
            </a>
            <div className="flex p-5 flex-col flex-1 ">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>

              <h3 className="   text-md font-semibold leading-snug">
                Ganga Residency
              </h3>
              <p class="  text-xs text-gray-500">
                By house hunters reality
              </p>
              <p class="  pt-3 text-xs text-gray-700">
              3 BHK Villa
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider text-gray-500 hover:text-black dark:text-violet-400"
              >
                  Noida extension, Greater Noida
              </a>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 font-semibold dark:text-gray-800">
                <span>29 L</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Featured;
