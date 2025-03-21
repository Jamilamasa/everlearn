import { useEffect, useState } from "react";
import Logo from "./Logo";

const Footer = () => {
  const [activePage, setActivePage] = useState("/");

  useEffect(() => {
    // Set the active page based on the current URL path
    setActivePage(window.location.pathname);
  }, []);

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Courses", path: "/courses" },
    { name: "Program", path: "/program" },
  ];

  return (
    <div className="bg-[#CCDEEB33] mt-7">
      <div className=" grid grid-rows-1 md:py-36 py-20 mx-5 md:mx-40">
        <div className=" grid md:grid-cols-3 gap-10 justify-between">
          <div className=" items-start">
            <Logo />
            <p className=" max-w-sm text-sm pt-6">
              An adaptive learning platform rich of resources, making our
              adaptive learning technology proficient in delivering learning
              experience that last for individuals{" "}
            </p>
          </div>
          <ul className=" md:flex grid grid-cols-3 md:space-x-28">
            {menuItems.map((item) => (
              <li key={item.path}>
                <a href={item.path} onClick={() => setActivePage(item.path)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <h4 className=" font-bold">Subscribe</h4>
            <div className="flex md:mt-0 items-center border-b-2 border-gray-300 w-full md:w-2/3 pt-10">
              <input
                type="search"
                name="Search"
                id="Search"
                className="flex-grow py-6 focus:outline-none pl-4 text-sm text-gray-600"
                placeholder="Get product updates"
              />
              <div className="bg-[#00599B]">
                <div className=" p-6 "><img src="/svg/arrow-right.svg" alt=""/></div>
              </div>
            </div>
          </div>
        </div>
        <hr className=" h-1 my-10" />

        <div className="grid md:grid-cols-3 md:mt-10 items-center md:m-0 m-auto gap-10">
          <ul className="md:flex grid grid-cols-3 items-center gap-7 md:space-x-28">
            <li>
              <img src="/svg/facebook.svg" alt="" />
            </li>
            <li><img src="/svg/Twitter.svg" alt="" /></li>
            <li><img src="/svg/Linkedin.svg" alt="" /></li>
          </ul>
        <p className=" m-auto">A product of</p>
        <p>© 2024 Everlearn All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
