import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-[#001931] text-white">
      <Container>
        <div className="footer grid grid-cols-12 gap-8 text-white py-10 border-b-1 border-[#e5e7eb5d]">
          <div className="col-span-10 md:col-span-6 lg:col-span-4">
            <Link
              to={"/"}
              className="flex items-center gap-1 text-base font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent transition-colors duration-200 ease-linear hover:from-[#9F62F2] hover:to-[#632EE3] md:text-xl"
            >
              <img
                src="/logo.png"
                alt="It is the logo image of this website"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              AppSphere
            </Link>

            <p className="mt-2 !text-md text-gray-400 md:max-w-sm">
              AppSphere is your go-to platform for discovering the latest and
              most innovative apps. We aim to inspire, inform, and connect users
              with apps that make life easier and more enjoyable.
            </p>
          </div>

          <nav className="col-span-12 md:col-span-3 lg:col-span-2">
            <h6 className="footer-title">Explore</h6>
            <a className="link link-hover">All Apps</a>
            <a className="link link-hover">Top Rated</a>
            <a className="link link-hover">New Releases</a>
            <a className="link link-hover">Categories</a>
          </nav>

          <nav className="col-span-12 md:col-span-3 lg:col-span-2">
            <h6 className="footer-title">Developers</h6>
            <a className="link link-hover">Submit Your App</a>
            <a className="link link-hover">Developer Docs</a>
            <a className="link link-hover">API Access</a>
            <a className="link link-hover">Support</a>
          </nav>

          <nav className="col-span-12 md:col-span-3 lg:col-span-2">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About AppSphere</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Privacy Policy</a>
          </nav>

          <nav className="col-span-12 md:col-span-3 lg:col-span-2">
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">User Guides</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Blog</a>
          </nav>

          {/* <form className="col-span-12 mt-6 md:mt-0 md:col-span-6 lg:col-span-4">
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-full md:w-80">
              <label>Enter your email address</label>
              <div className="join mt-2">
                <input
                  type="email"
                  placeholder="username@site.com"
                  className="input input-bordered join-item w-full"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form> */}
        </div>

        <div className="footer sm:footer-horizontal footer-center p-7">
          <p className="!textarea-sm !text-white">Copyright © {new Date().getFullYear()} - All right reserved by AppSphere</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
