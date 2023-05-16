import React from "react";

const Navigation = () => {
  return (
    <div class="relative mx-14">
      <img
        src="https://c.housingcdn.com/demand/s/client/common/assets/buyCover.36ede2d6.jpg"
        alt="Cover Image"
        class="w-full h-[460px] bg-cover rounded-b-3xl"
      />

      <div class="absolute inset-0 flex-row ">
        <div className="relative w-full h-16 bg-transparent ">
          <nav class="flex items-center justify-between  text-white p-4">
            <div class="flex pl-20  items-center">
              <img
                src="https://c.housingcdn.com/demand/s/client/common/assets/housing.820bbe77.png"
                alt="Logo"
                class="h-5 w-40 "
              />
            </div>
            <div className="mr-12">
              <div class="flex items-center gap-4 font-medium  text-xs text-white">
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    id="mobile"
                  >
                    <g transform="translate(867 -1029.362)">
                      <rect
                        width="9"
                        height="16"
                        x="-863"
                        y="1029.362"
                        fill="#2b4255"
                        rx="1"
                        ry="1.067"
                      ></rect>
                      <path
                        fill="#e9eded"
                        d="M-857.5 1043.362a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1z"
                        opacity=".98"
                      ></path>
                      <path
                        fill="#e9eded"
                        fill-rule="evenodd"
                        stroke="#e9eded"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M-859.5 1030.862h2"
                      ></path>
                      <rect
                        width="7"
                        height="9"
                        x="-862"
                        y="1032.362"
                        fill="#fff"
                        ry="0"
                      ></rect>
                    </g>
                  </svg>
                  <h3>Download App</h3>
                </div>

                <div className="flex gap-1 pl-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    id="heart"
                  >
                    <path
                      fill="#1C1C1C"
                      d="M27.657 5.343a8 8 0 0 0-11.314 0L16 5.715l-.343-.372A8 8 0 0 0 4.343 16.657l.778.843.675.731 9.518 10.312.686.742.686-.743 9.518-10.312.675-.731.778-.843a8 8 0 0 0 0-11.313zm-.545 10.445l-.908.982-.676.73L16 27.801 6.472 17.5l-.676-.731-.908-.982a6.77 6.77 0 0 1 0-9.575l.324-.324a6.77 6.77 0 0 1 9.575 0l.527.569.686.742.686-.741.527-.569a6.77 6.77 0 0 1 9.575 0l.324.324a6.77 6.77 0 0 1 0 9.575z"
                    ></path>
                  </svg>
                  <h3>Saved</h3>
                </div>
                <a href="#" class="pl-4">
                  News
                </a>
                <a href="#" class="pl-4 font-semibold">
                  List Property
                </a>
                <div className="flex w-20  h-8 rounded-3xl bg-white">
                  <button class="ml-2 p-1 bg-white rounded-lg ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      class="h-6 w-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                      />
                    </svg>
                  </button>
                  <div className="pt-1">
                    <img
                      src="https://c.housingcdn.com/demand/s/client/common/assets/tenant-avatar.cedc2f44.png"
                      alt="Profile"
                      class="w-6 h-6  rounded-full "
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex justify-center pt-32">
          <div className="w-[746px] h-[212px ] ">
            <div className="">
              <h1 className="text-3xl  font-semibold text-white">
                Trusted Place to Find a Home
              </h1>
              <h1 className="text-xl  font-semibold text-gray-400 pt-1">
                Parr...se Perfect
              </h1>
            </div>
            <div className="pt-8">
              <div class=" rounded-2xl  w-full h-32 bg-gradient-to-b from-gray-800 to-transparent">
                <div class="relative pt-3">
                  <div className="flex gap-14 text-white pl-6">
                    <h4 className="text-xs font-semibold ">BUY</h4>
                    <h4 className="text-xs font-semibold text-gray-400">
                      RENT
                    </h4>
                    <h4 className="text-xs font-semibold text-gray-400">
                      COMMERCIAL
                    </h4>
                    <h4 className="text-xs font-semibold text-gray-400">
                      PG/CO-LIVING
                    </h4>
                    <h4 className="text-xs font-semibold text-gray-400">
                      PLOTS
                    </h4>
                  </div>
                </div>
                <div className="flex pt-4">
                  <div className="w-full h-16 rounded-full bg-white relative">
                    <div className="flex pl-8 pt-1">
                      <div className="h-14  w-[586px] border-r flex items-center">
                        <select className="appearance-none bg-transparent border-none outline-none pl-2 pr-8 w-full">
                          <option value="option1">Select city</option>
                          <option value="option2">Mumbai</option>
                          <option value="option3">Bangaluru</option>
                          <option value="option3">Hyderabad</option>
                          <option value="option3">Pune</option>
                          <option value="option3">Chennai</option>
                          <option value="option3">Delhi</option>
                        </select>
                      </div>
                      <div className="p-1 pl-2 ">
                        <button class="bg-green-400 hover:bg-green-400 text-white font-semibold rounded-full w-28 h-12">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
