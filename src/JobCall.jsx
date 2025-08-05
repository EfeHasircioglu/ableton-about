export default function JobCall() {
  return (
    <div className="flex flex-col xl:flex-row lg:w-full h-auto px-5 sm:py-10 py-10 md:px-20 xl:pb-30 lg:pb-15">
      <img
        src="picture/photo-8.jpg"
        className="xl:w-[50%] xl:aspect-square object-cover lg:w-full aspect-auto lg:h-[20%]"
      />
      <div className="flex flex-col bg-[#b1c5ff] xl:w-[50%] xl:p-30 p-10 lg:p-20 justify-center xl:gap-6 lg:w-full">
        <div className="xl:text-3xl lg:text-xl leading-normal">
          We’re really proud of the work we’ve done so far. But there’s so much
          more to come. If you’d like to be a part of it, please join us.
        </div>
        <a
          href="#"
          className="xl:text-3xl text-[#0000ff] lg:text-xl pt-2 lg:pt-5"
        >
          See latest jobs{" "}
          <svg
            width="20px"
            height="20px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#0000ff"
            className="inline justify-self-center items-center"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="#0000ff"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
