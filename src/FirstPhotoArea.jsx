export default function FirstPhotoArea() {
  return (
    <div className="w-full relative aspect-[16/9] mx-auto">
      <div className="scale-[0.8] xl:scale-100 md:scale-110 origin-top-left"></div>
      <div className="h-[95%] w-[60%] bg-[#fbffa7] justify-self-end"></div>
      <img
        src="picture/photo-1.jpg"
        className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 aspect-square object-cover w-[35vw] h-auto"
        alt=""
      />
      <img
        src="picture/photo-2.jpg"
        className="absolute top-1/2 left-3/5 transform -translate-x-1/10 -translate-y-1/2 aspect-[15/11] object-cover w-[30vw] h-auto"
        alt=""
      />
    </div>
  );
}
