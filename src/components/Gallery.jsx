import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "https://media.istockphoto.com/id/860528756/photo/the-bandraworli-sea-link-mumbai-india.jpg?s=612x612&w=0&k=20&c=xT9TK7oYkP6TP62lHqP0H-9mfz9cWva4OcYEnt06cjc=",
      name: "MUMBAI",
    },
    {
      src: "https://i.pinimg.com/originals/bd/23/cd/bd23cdf371189b28cd5da361d92e1c9a.jpg",
      name: "PUNE",
    },
    {
      src: "https://imgnew.outlookindia.com/public/uploads/articles/2022/1/8/dlf.jpg",
      name: "GURGAON",
    },
    {
      src: "https://www.cesaer.org/img-cache/sgbuele8os-hungary-02128_-_-budapest_-university_of_-technology_and_-economics_%2832514837765%29.c86d3627.jpg",
      name: "BENGALURU",
    },
    {
      src: "https://static.toiimg.com/thumb/msid-24531101,width-1070,height-580,resizemode-75,imgsize-24531101,pt-32,y_pad-40/24531101.jpg",
      name: "CHENNAI",
    },
    {
      src: "https://curlytales.com/wp-content/uploads/2019/07/noida.jpg",
      name: "NOIDA",
    },
    {
      src: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/cost-of-living-hyderabad.jpg",
      name: "HYDERABAD",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOnVwb-OGJZ2nUWTPuaJftgvzuqxAE97L2g&usqp=CAU",
      name: "DELHI",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rkD80qm_HOStby5fSeOIodclc_s7XYJirOA7mi-mJZ65_fgRyGE3eNGcqKxL9apoHBM&usqp=CAU",
      name: "KOLKATA",
    },
    // Add more images as needed
  ];

  return (
    <>
      <div className=" mx-auto p-4 bg-white">
        <div className="flex justify-center pt-16 text-3xl font-normal gap-2 font-medium text-gray-800">
          POPULAR <span className="font-semibold text-3xl ">CITIES</span>
        </div>
        <div className=" grid grid-cols-3 gap-4 pl-36 pr-36 pt-7 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative border-4 border-white shadow-xl"
            >
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-48 object-cover transition-all duration-500 "
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
                <div className="p-2">
                  <h3 className="text-lg font-semibold text-white">
                    {image.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
          <div className="flex gap-6 col-start-1 col-end-4">
            <h3 className="text-xl font-medium">
              Other <span className="font-semibold"> Cities:</span>{" "}
            </h3>
            <h4 className="text-sm font-medium pt-1">INDORE</h4>
            <h4 className="text-sm font-medium pt-1">GOA</h4>
            <h4 className="text-sm font-medium pt-1">LUCKNOW</h4>
            <h4 className="text-sm font-medium pt-1">CHANDIGARH</h4>
            <h4 className="text-sm font-medium pt-1">JAIPUR</h4>
            <h4 className="text-sm font-medium pt-1">AHMEDABAD</h4>
            <h4 className="text-sm font-medium pt-1">BHOPAL</h4>
            <h4 className="text-sm font-medium pt-1">DEHRADUN</h4>
            <h4 className="text-sm font-medium pt-1">GUWAHATI</h4>
            <h4 className="text-sm font-medium pt-1">PATNA</h4>
          </div>{" "}
          {/* Empty grid column to add space */}
        </div>
      </div>
      <div className="pt-14">
        <div className=" w-full h-36  bg-[url('https://c.housingcdn.com/demand/s/client/common/assets/staticBackground.60781a6c.svg')] bg-center  bg-no-repeat">
            <div className="pl-60">
                <div className="grid grid-cols-3 gap-16">
                    <div className="flex-row text-white pt-12 w-36">
                        <h2 className="font-semibold text-2xl pl-8">5300 +</h2>
                        <h2 className="font-medium text-sm">Daily Listings Added</h2>
                    </div>
                    <div className="flex-row text-white pt-12 w-36">
                        <h2 className="font-semibold text-2xl pl-8">100K +</h2>
                        <h2 className="font-medium text-sm">Verified Listing</h2>
                    </div>
                    <div className="flex-row text-white pt-12 w-40">
                        <h2 className="font-semibold text-2xl pl-8">7MN</h2>
                        <h2 className="font-medium text-sm">Home Seekers Till date</h2>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
