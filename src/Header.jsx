export default function Header() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row font-normal lg:gap-5 lg:text-lg xl:gap-10 xl:text-xl">
          <svg
            role="img"
            aria-label="Logo Ableton"
            class="main-nav__logo__image"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="60px"
            height="auto"
            viewBox="0 0 45 21"
          >
            <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
          </svg>
          <a href="#">Live</a>
          <a href="#">Push</a>
          <a href="#">Move</a>
          <a href="#">Note</a>
          <a href="#">Link</a>
          <a href="#">Shop</a>
          <a href="#">Packs</a>
          <a href="#">Help</a>
          <a
            href="#"
            className="text-orange-500 gap-1 flex flex-row items-center"
          >
            More{" "}
            <svg
              width="24px"
              height="24px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 text-orange-500"
            >
              <path
                d="M6 12H12M18 12H12M12 12V6M12 12V18"
                stroke="#ff6900"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-row xl:gap-7 lg:gap-3">
          <a className="xl:text-xl lg:text-lg text-blue-700" href="#">
            Try Live 12 for free
          </a>
          <a className="xl:text-md lg:text-sm my-auto" href="#">
            Log in or register
          </a>
        </div>
      </div>
    </>
  );
}
