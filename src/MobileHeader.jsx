export default function MobileHeader() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row font-normal gap-6">
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
          <a href="#" className="text-xl flex flex-row items-center gap-2">
            Menu{" "}
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
              className="w-4 justify-self-center mt-1"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.30711 8.71299C5.4232 8.43273 5.69668 8.25 6.00002 8.25H18C18.3034 8.25 18.5768 8.43273 18.6929 8.71299C18.809 8.99324 18.7449 9.31583 18.5304 9.53033L12.5304 15.5303C12.2375 15.8232 11.7626 15.8232 11.4697 15.5303L5.46969 9.53033C5.25519 9.31583 5.19103 8.99324 5.30711 8.71299Z"
                fill="#000000"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
