export default function VideoPlayer() {
  return (
    <div className="">
      <div className="justify-self-center w-[90%] md:w-[70%] lg:w-[55%] h-auto">
        <iframe
          src="https://www.youtube.com/embed/9SbnhgjeyXA?si=URsYHwWw_r1gBzWQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          loading="lazy"
          className="aspect-[16/9]"
        ></iframe>
        <div className="p-3 px-1 lg:text-sm">
          <span>Why Ableton - Juanpe Bolivar</span>
        </div>
      </div>
    </div>
  );
}
