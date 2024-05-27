export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">Kim Jin Hyung</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2024.01.04 —
              <a className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                @By Kim Jinhyung
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                href="https://open.kakao.com/o/s1L7Y4tg"
                className="ml-3 text-gray-500"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/imk.h_/"
                className="ml-3 text-gray-500"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                href="https://github.com/jinhyungkim980"
                className="ml-3 text-gray-500"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0a8 8 0 00-2.534 15.584c.4.074.547-.174.547-.384 0-.19-.007-.876-.012-1.698-2.01.368-2.532-.49-2.696-.94-.092-.236-.487-.94-.835-1.13-.284-.14-.68-.494-.011-.504.63-.01 1.082.58 1.23.822.72 1.194 1.87.854 2.33.65.072-.52.278-.875.505-1.077-1.773-.2-3.631-.887-3.631-3.93 0-.867.31-1.578.823-2.133-.083-.2-.36-1.008.078-2.1 0 0 .67-.214 2.2.82.64-.178 1.32-.267 2-.27.68.003 1.36.092 2 .27 1.53-1.034 2.2-.82 2.2-.82.44 1.092.16 1.9.08 2.1.51.56.82 1.266.82 2.133 0 3.049-1.86 3.726-3.64 3.92.29.26.54.775.54 1.56 0 1.127-.01 2.033-.01 2.31 0 .21.14.46.55.38A8.002 8.002 0 008 0z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
