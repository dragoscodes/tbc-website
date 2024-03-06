import React from "react";
import Logo from "@/public/tbc-logo.png";
import Arrow from "@/public/arrow-white.png";
import X from "@/public/x-logo.png";
import LinkedIn from "@/public/linkedin-logo.png";
import Mail from "@/public/mail.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-[100px] border-b-[1px] border-white px-4 sm:px-10 md:px-20">
      <div className="flex items-center h-full">
        <a
          href="https://www.tum-blockchain.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer"
        >
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </a>
        <div className="hidden sm:block w-[1px] h-[30px] bg-white mx-6"></div>
        <a
          href="https://www.tum-blockchain.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex cursor-pointer"
        >
          <p className="text-white text-sm sm:mr-2">TUM Blockchain Club</p>
          <div>
            <Image src={Arrow} alt="Arrow" width={20} height={20} />
          </div>
        </a>
      </div>
      <div className="h-full flex items-center">
        <a
          href="https://www.tum-blockchain.com/conference2023"
          target="_blank"
          rel="noopener noreferrer"
          className="flex sm:hidden cursor-pointer text-white text-sm ml-2"
        >
          Throwback
        </a>
        <a
          href="https://www.tum-blockchain.com/conference2023"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex cursor-pointer text-white text-sm ml-2 sm:ml-8 mr-2 md:mx-8"
        >
          Throwback 2023
        </a>
        <div className="hidden sm:block w-[1px] h-[30px] bg-white mr-6"></div>
        <a
          href="https://www.linkedin.com/company/tum-blockchain-club/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer sm:mx-2 ml-2"
        >
          <Image src={LinkedIn} alt="LinkedIn" width={30} height={30} />
        </a>
        <a
          href="https://twitter.com/tbc_munich"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer mx-2"
        >
          <Image src={X} alt="X" width={30} height={30} />
        </a>
        <a
          href="mailto:relations@tum-blockchain.com?subject=Query%20regarding%20TUM%20Blockchain%20conference"
          className="flex cursor-pointer ml-2 sm:mx-2"
        >
          <Image src={Mail} alt="Mail" width={25} height={25} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;