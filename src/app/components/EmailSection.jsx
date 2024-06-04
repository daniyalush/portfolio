import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-12 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-purple-300 blur-lg rounded-full h-[310px] w-[310px] z-0 absolute top-3/4 -left-2 transform -translate-x-1/2 -translate-y-10 "></div>
      <div className="z-10">
        <h5 className="text-3xl font-bold text-black my-2">Let's Connect</h5>
        <p className="text-black font-medium mb-4 max-w-md">
          {" "}
          Welcome to my world! I'm thrilled you stopped by. If you have any
          questions, want to discuss a project, or just share your thoughts, I'd
          love to hear from you. Simply use the friendly chat feature on my
          portfolio website, and let's start a conversation. Your messages
          brighten my day, and I can't wait to connect with you and explore the
          possibilities together!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/daniyalush">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/daniyalush/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-black mb-2 font-semibold block">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#d4d4d8] border-2 border-[#33353F] placeholder-[#64748b] text-black text-sm font-medium rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-black mb-2 font-semibold block">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#d4d4d8] border-2 border-[#33353F] placeholder-[#64748b] text-black text-sm font-medium rounded-lg block w-full p-2.5"
              placeholder="Just Saying Hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-black mb-2 font-semibold block">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#d4d4d8] border-2 border-[#33353F] placeholder-[#64748b] text-black text-sm font-medium rounded-lg block w-full p-2.5"
              placeholder="Let's Talk About....."
              rows="6"
            />
          </div>
          <button
            type="submit"
            className="border border-black bg-purple-500 hover:bg-purple-600 text-black font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
