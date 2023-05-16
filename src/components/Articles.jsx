import React from "react";

const Articles = () => {
  return (
    <section className="py-8 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className=" px-40 mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl ">News & <span className="font-bold">Articles</span></h2>
          <p className="font-serif text-sm dark:text-gray-400">
            Read what's happening in Real Estate
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://assets-news.housing.com/news/wp-content/uploads/2019/08/23002841/Griha-Pravesh-2018-2019-The-shubh-muhurat-dates-FB-1200x700-compressed.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 ">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>

              <h3 className="flex-1 py-2 hover:text-purples text-md font-semibold leading-snug">
                Best nakshatra, Griha Pravesh Muhurat dates in 2023
              </h3>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider text-gray-500 hover:text-black dark:text-violet-400"
              >
                Performing special events such as Griha pravesh on an auspicious
                muhurat is considered to bring good fortune for new homeowners.
              </a>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>Sunitha mishra</span>
                <span>May 2023</span>
              </div>
            </div>
          </article>
          
          <article className="flex flex-col dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://assets-news.housing.com/news/wp-content/uploads/2020/08/09111436/RBI-cuts-interest-rates-for-the-third-time-this-year-to-boost-growth-FB-1200x700-compressed.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 ">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>

              <h3 className="flex-1 py-2 hover:text-purples text-md font-semibold leading-snug">
                Best nakshatra, Griha Pravesh Muhurat dates in 2023
              </h3>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider text-gray-500 hover:text-black dark:text-violet-400"
              >
                Performing special events such as Griha pravesh on an auspicious
                muhurat is considered to bring good fortune for new homeowners.
              </a>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>Sunitha mishra</span>
                <span>May 2023</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://assets-news.housing.com/news/wp-content/uploads/2019/07/23065443/Taxation-of-rent-received-and-deductions-available-FB-1200x725-compressed.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 ">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>

              <h3 className="flex-1 py-2 hover:text-purples text-md font-semibold leading-snug">
                Best nakshatra, Griha Pravesh Muhurat dates in 2023
              </h3>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider text-gray-500 hover:text-black dark:text-violet-400"
              >
                Performing special events such as Griha pravesh on an auspicious
                muhurat is considered to bring good fortune for new homeowners.
              </a>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>Sunitha mishra</span>
                <span>May 2023</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Articles;
