export default function TextArea({ firstText, secondText }) {
  return (
    <div className=" md:px-35 sm:px-25 px-5 py-10 sm:py-10 md:py-15 xl:px-80 lg:px-50 xl:py-25 lg:py-15 flex flex-col gap-5 whitespace-pre-line">
      <div className="text-xl lg:text-2xl xl:text-3xl leading-normal">
        {firstText}
      </div>
      <div className="font-light lg:text-lg xl:text-xl">{secondText}</div>
    </div>
  );
}
