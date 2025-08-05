export default function ThirdPhotoArea() {
  return (
    <div className="w-full relative aspect-[16/9] mx-auto">
      <div className="scale-[0.8] xl:scale-100 md:scale-110 origin-top-left"></div>
      <div className="h-[120%] w-[75%] bg-[#d5b3ff] justify-self-center"></div>
      <img
        src="picture/photo-6-a.jpg"
        className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 aspect-[15/11] object-cover w-[30vw] h-auto"
        alt=""
      />
      <img
        src="picture/photo-7.jpg"
        className="absolute top-1/2 left-3/5 transform -translate-x-1/20 xl:-translate-x-1/7 -translate-y-1/2 justify-self-end aspect-square object-cover w-[40vw] h-auto"
        alt=""
      />
    </div>
  );
}
