// eslint-disable-next-line no-unused-vars
import React from "react";
import Section from "./Section";
// import {logoabdulla1} from "../assets";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

// const socials = [
//     {
//         title: "Discord",
//         iconUrl: discordBlack,
//         url: "#",
//     },
//     {
//         title: "Twitter",
//         iconUrl: twitter,
//         url: "#",
//     },
//     {
//         title: "Instagram",
//         iconUrl: instagram,
//         url: "#",
//     },
//     {
//         title: "Telegram",
//         iconUrl: telegram,
//         url: "#",
//     },
//     {
//         title: "Facebook",
//         iconUrl: facebook,
//         url: "#",
//     },
// ];
// const extraPages = [
//     {
//         title: "Governance",
//         url: "#",
//     },
//     {
//         title: "Disclaimer",
//         url: "#",
//     },
//     {
//         title: "Privacy Policy",
//         url: "#",
//     }
// ];

const Footerr = () => {
  return (
    <Section>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href=""
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src={logoabdulla1}
              width="50"
              height="40"
              className="rounded-full"
            />
            The Abdulla Capital
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Dubai | Global Partnerships
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Platform
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Investments
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Partnerships
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Insights
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2026{" "}
            <a href="#" className="hover:underline">
              The Abdulla Capital™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </Section>
  );
};

export default Footerr;
