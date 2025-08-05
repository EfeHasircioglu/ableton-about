export default function SecondPhotoArea() {
  return (
    <div className="w-full relative aspect-[16/9] mx-auto">
      <div className="scale-[0.8] xl:scale-100 md:scale-110 origin-top-left"></div>
      <div className="h-[120%] w-[60%] bg-[#b6ffc0] justify-self-start"></div>
      <img
        src="picture/photo-3.jpg"
        className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 object-cover aspect-[16/12] w-[30vw] h-auto"
        alt=""
      />
      <img
        src="picture/photo-4.jpg"
        className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 object-cover aspect-[16/12] w-[30vw] h-auto"
        alt=""
      />
      <img
        src="picture/photo-5.jpg"
        className="absolute top-1/2 left-3/5 transform -translate-x-1/6 -translate-y-1/2 aspect-[14/15] object-cover w-[40vw] h-auto"
        alt=""
      />
    </div>
  );
}
