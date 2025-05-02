import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaBriefcase,
} from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md"; // Add phone and email icons

export const metadata = {
  title: "TopMewatProfile | Contact",
  description:
    "Share your links, social profiles, contact info and more on one page",
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <main className="flex flex-col items-center w-full flex-1 px-4 md:px-20 text-center">
        <Image
          src={"/assets/logo.webp"}
          alt="banner image"
          height={400}
          width={400}
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
          Get in Touch
        </h1>

        <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-6">
          <a
            href="#"
            className="hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size="2em" />
          </a>
          <a
            href="#"
            className="hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size="2em" />
          </a>
          <a
            href="#"
            className="hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="2em" />
          </a>
          <a
            href="https://www.linkedin.com/in/jeffjiang13/"
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size="2em" />
          </a>
          <a
            href="https://jeff-jiang.com"
            className="hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBriefcase size="2em" />
          </a>
        </div>

        {/* Phone and Email Links */}
        <div className="flex flex-col items-center gap-4 text-gray-700 text-lg">
          <a
            href="tel:7740847114"
            className="flex items-center gap-2 hover:text-green-600"
          >
            <MdPhone size="1.5em" /> Call: 7740847114
          </a>
          <a
            href="mailto:topmewatprofile@gmail.com"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <MdEmail size="1.5em" /> Email: topmewatprofile@gmail.com
          </a>
        </div>
      </main>
    </div>
  );
}
