import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-2 bg-green-900 ">
      <Image
        src="/logo-palmeiras-512.png"
        alt="Logo do Palmeiras"
        width={100}
        height={100}
      />
      <nav>
        <ul className="flex space-x-6 text-white items-center">
          <li>
            <Link
              className="hover:p-2 hover:bg-green-600 duration-300 rounded-3xl"
              href=""
            >
              INGRESSOS
            </Link>
          </li>
          <li>
            <Link
              className="hover:p-2 hover:bg-green-600 duration-300 rounded-3xl"
              href=""
            >
              JOGADORES
            </Link>
          </li>
          <li>
            <Link
              className="hover:p-2 hover:bg-green-600 duration-300 rounded-3xl"
              href=""
            >
              JOGOS
            </Link>
          </li>
          <li>
            <Link href="">
              <Image
                src="/seja-socio.png"
                alt="seja socio"
                width={100}
                height={100}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
