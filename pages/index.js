import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect, useRef, useState } from "react";

import Footer from "../components/footer";
import Ferideja from "../assets/dea Imeraj.svg";
import FeridejaMob from "../assets/dea-Imeraj-mob.svg";

import dea1 from "../assets/Dea Imeraj.jpg";
import dea2 from "../assets/Ferideja 2.jpg";
import terminal from "../assets/termonal.jpg";
import party from "../assets/party.jpg";
import azrendering from "../assets/azrendering.jpg";
import arameras from "../assets/arameras.jpg";
import remix from "../assets/remix.jpg";
import solatium from "../assets/solatium.jpg";
import solatiumGif from "../assets/sol/solatium-homepage.gif";
// import downloadIcon from "../assets/download-arrow.svg";
import tiaGif from "../assets/tia/terminal-perview.gif";
import bookHero from "../assets/libri/home-libri.gif";
import libriHero from "../assets/libri/libri hero.jpg";
import partyGif from "../assets/party/the-street-party-homepage.gif";
import azGif from "../assets/az/az-rendering-hoover.gif";
import remixGif from "../assets/remix/remix-hoover.gif";
import portfolio from "../assets/portfolio.svg";

export default function Home() {
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("stickyy");
      } else if (window.pageYOffset < sticky) {
        navbar.classList.remove("stickyy");
      }
    }
  }, []);
  let nameItem = useRef(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width:640px)": function () {
        gsap.to(nameItem, {
          scrollTrigger: {
            trigger: ".emri-svg",
            start: "-300px top",
            scrub: 1,
            // markers: true,
          },
          y: 284,
        });
      },
    });
  }, []);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  // console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      // console.log(e);
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.addEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 9,
      y: mousePosition.y - 9,
    },
    text: {
      height: 36,
      width: 36,
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      mixBlendMode: "difference",
    },
    img: {
      height: 72,
      width: 72,
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      mixBlendMode: "difference",
    },
  };

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");
  const imgEnter = () => setCursorVariant("img");
  const imgLeave = () => setCursorVariant("default");
  return (
    <>
      <div className="overflow-hidden">
        <div className="flex mt-[50px] header" id="box">
          <div className="h-[98px] min-w-[1600px] ">
            <Image src={portfolio} layout="responsive" />
          </div>
          <div className="h-[98px] min-w-[1600px] ">
            <Image src={portfolio} layout="responsive" />
          </div>
          <div className="h-[98px] min-w-[1600px] ">
            <Image src={portfolio} layout="responsive" />
          </div>
          <div className="h-[98px] min-w-[1600px] ">
            <Image src={portfolio} layout="responsive" />
          </div>
          {/* <Image src={portfolio} height={98} width={300} />
          <Image src={portfolio} height={98} width={300} />
          <Image src={portfolio} height={98} width={300} />
          <Image src={portfolio} height={98} width={300} /> */}
        </div>
      </div>
      <div className="px-[37px] md:px-2 text-[#EAEAEA] home-page">
        <motion.div
          className="cursor hidden md:block"
          variants={variants}
          animate={cursorVariant}
        />
        <main className="overflow-hidden">
          <div className="hero">
            <div className="flex flex-col md:grid md:grid-cols-6 h-[360px]">
              <div className="col-span-1 flex opacity-1 md:opacity-0 hover:opacity-100 h-full flex justify-center items-start profile-image-size">
                <Image src={dea1} />
              </div>
              <div className="flex flex-col md:flex-row col-span-4 w-full items-center mx-auto">
                <div
                  className="emri-svg hidden md:block"
                  ref={(el) => {
                    nameItem = el;
                  }}
                >
                  <Image src={Ferideja} alt="Ferideja" />
                </div>
                <div className="emri-svg-2 md:hidden block">
                  <Image src={FeridejaMob} alt="Ferideja" />
                </div>
                <div className="flex w-full justify-center">
                  <h3 className="text-[12px] leading-6 max-w-[700px] font-ibmplex text-center md:text-left">
                    Hello I’m Dea, a graphic designer and illustrator based in
                    Tirana/Albania, currently working at Tok Digital Agency. My
                    practice of graphic design is playful and didactic, attached
                    to a meaning and good use of typography. My work is very
                    varied, from branding, editorial, web design and also fun
                    illustrations.
                  </h3>
                </div>
              </div>
              <div className="col-span-1 hidden md:flex opacity-0 hover:opacity-100 h-full flex items-end profile-image-size size2">
                <Image src={dea2} />
              </div>
            </div>
          </div>
          <div className="menu md:grid md:grid-cols-6 text-[40px] md:text-[77px] items-center justify-center mt-[92px] md:mt-[58px] font-libre flex h-[131px]">
            <div className="md:col-span-4 md:col-start-3 flex" id="navbar">
              <div className="emri-menu">
                <Image src={Ferideja} alt="Ferideja" />
              </div>
              <div className="menu-span ml-4">
                <Link href="#work">
                  <span id="work">work,</span>
                </Link>
              </div>
              <div className="menu-span ml-4">
                <Link href="#about">
                  <span>about,</span>
                </Link>
              </div>
              <div className="menu-span ml-4">
                <Link href="#contact">
                  <span>contact</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="container md:mt-[92px] uppercase h-[333px] md:h-[463px] private-terminal">
            <div className="grid md:grid-cols-3 h-full">
              <div className="md:col-span-2 h-[180px] relative">
                <div className="no-hover-image absolute top-0">
                  <Link href="/tia">
                    <a>
                      <Image
                        src={terminal}
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      />
                    </a>
                  </Link>
                </div>
                <div className="hover-image absolute top-0">
                  <Link href="/tia">
                    <a>
                      <Image
                        src={tiaGif}
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="md:ml-8 md:flex-col flex justify-between">
                <div className="text-[12px] md:text-[22px] text-right md:text-left mobile-order-text">
                  <div
                    className="date mb-4 md:mb-0"
                    onMouseEnter={imgEnter}
                    onMouseLeave={imgLeave}
                  >
                    <Link href="/tia">
                      <a>(2021)</a>
                    </Link>
                  </div>
                  <div
                    className="job-desc leading-none"
                    onMouseEnter={imgEnter}
                    onMouseLeave={imgLeave}
                  >
                    <Link href="/tia">
                      <a>
                        Brand Identity <br />
                        Web Design
                      </a>
                    </Link>
                  </div>
                </div>
                <div
                  className="pr-name text-[22px] md:text-[42px] leading-none mt-tia-text font-libre md:mb-4 w-[61%] md:w-auto"
                  onMouseEnter={imgEnter}
                  onMouseLeave={imgLeave}
                >
                  <Link href="/tia">
                    <a>Private terminal & Exclusive Club</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container md:mt-[92px] uppercase h-[333px] md:h-[463px] street-party">
            <div className="grid md:grid-cols-3  h-full">
              <div className="md:flex-col flex justify-between md:ml-8 mb-4 text-right md:mr-8 w-full md:w-auto mobile-order-img">
                <div className="text-[12px] md:text-[22px] order1 text-right mobile-order-text">
                  <div
                    className="date mb-4 md:mb-0"
                    onMouseEnter={imgEnter}
                    onMouseLeave={imgLeave}
                  >
                    (2021)
                  </div>
                  <div
                    className="job-desc leading-none"
                    onMouseEnter={imgEnter}
                    onMouseLeave={imgLeave}
                  >
                    <Link href="/party">
                      <a>
                        Brand Identity <br />
                        Web Design
                      </a>
                    </Link>
                  </div>
                </div>
                <div
                  className="pr-name text-[22px] md:text-[42px] leading-none font-libre"
                  onMouseEnter={imgEnter}
                  onMouseLeave={imgLeave}
                >
                  <Link href="/party">
                    <a>The STreet Party</a>
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2 h-[180px] relative">
                <div className="no-hover-image absolute top-0">
                  <Link href="/party">
                    <a>
                      <Image
                        src={party}
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      />
                    </a>
                  </Link>
                </div>
                <div className="hover-image absolute top-0">
                  <Link href="/party">
                    <a>
                      <Image
                        src={partyGif}
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container md:mt-[92px] uppercase h-[333px] md:h-[463px] az-rendering">
            <div className="grid md:grid-cols-3 h-full">
              <div className="md:col-span-2 h-[180px] relative">
                <div className="no-hover-image absolute top-0">
                  <Link href="/az">
                    <a>
                      <Image
                        src={azrendering}
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      />
                    </a>
                  </Link>
                </div>
                <div className="hover-image absolute top-0">
                  <Link href="/az">
                    <a>
                      <Image
                        src={azGif}
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="md:ml-8 md:flex-col flex justify-between">
                <div className="text-[12px] md:text-[22px] text-right md:text-left mobile-order-text">
                  <div className="date mb-4 md:mb-0">
                    <Link href="/az">
                      <a>(2021)</a>
                    </Link>
                  </div>
                  <div
                    className="job-desc leading-none"
                    onMouseEnter={imgEnter}
                    onMouseLeave={imgLeave}
                  >
                    Brand Identity <br />
                    Web Design
                  </div>
                </div>
                <div
                  className="pr-name text-[22px] md:text-[42px] leading-none mt-tia-text font-libre md:mb-4 w-[61%] md:w-auto"
                  onMouseEnter={imgEnter}
                  onMouseLeave={imgLeave}
                >
                  <Link href="/az">
                    <a>Az Rendering</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container md:mt-[92px] uppercase h-[333px] md:h-[463px] arameras">
            <div className="grid md:grid-cols-3 h-full">
              <div className="md:flex-col flex justify-between md:ml-8 mb-4 text-right md:mr-8 w-full md:w-auto mobile-order-img">
                <div className="text-[12px] md:text-[22px] order1 text-right mobile-order-text">
                  <div
                    className="date mb-4 md:mb-0"
                    onMouseEnter={imgEnter}
                    onMouseLeave={imgLeave}
                  >
                    <Link href="/arameras">
                      <a>(2021)</a>
                    </Link>
                  </div>
                  <div
                    className="job-desc leading-none"
                    onMouseEnter={imgEnter}
                    onMouseLeave={imgLeave}
                  >
                    <Link href="/arameras">
                      <a>
                        Brand Identity <br />
                        Web Design
                      </a>
                    </Link>
                  </div>
                </div>
                <div
                  className="pr-name text-[22px] md:text-[42px] leading-none font-libre"
                  onMouseEnter={imgEnter}
                  onMouseLeave={imgLeave}
                >
                  <Link href="/arameras">
                    <a>arameras</a>
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2 h-[180px] relative">
                <Link href="/arameras">
                  <a>
                    <Image
                      src={arameras}
                      onMouseEnter={imgEnter}
                      onMouseLeave={imgLeave}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="container md:mt-[92px] uppercase h-[333px] md:h-[463px] remix">
            <div className="grid md:grid-cols-3 h-full">
              <div className="md:col-span-2 h-[180px] relative">
                <div className="no-hover-image absolute top-0 h-[450px] overflow-hidden">
                  <Link href="/remix">
                    <a>
                      <Image
                        src={remix}
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      />
                    </a>
                  </Link>
                </div>
                <div className="hover-image absolute top-0">
                  <Link href="/remix">
                    <a>
                      <Image
                        src={remixGif}
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="md:ml-8 md:flex-col flex justify-between mb-4">
                <div className="text-[12px] md:text-[22px] text-right md:text-left mobile-order-text">
                  <Link href="/remix">
                    <a>
                      <div
                        className="date mb-4 md:mb-0"
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      >
                        (2021)
                      </div>
                    </a>
                  </Link>
                  <Link href="/remix">
                    <a>
                      <div
                        className="job-desc leading-none"
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      >
                        Brand Identity <br />
                        Web Design
                      </div>
                    </a>
                  </Link>
                </div>
                <Link href="/remix">
                  <a>
                    <div
                      className="pr-name text-[22px] md:text-[42px] leading-none mt-tia-text font-libre md:mb-4 w-2/3 md:w-auto"
                      onMouseEnter={imgEnter}
                      onMouseLeave={imgLeave}
                    >
                      remix
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="container md:mt-[92px] uppercase h-[333px] md:h-[463px] solatium">
            <div className="grid md:grid-cols-3  h-full">
              <div className="md:flex-col flex justify-between md:ml-8 mb-4 text-right md:mr-8 w-full md:w-auto mobile-order-img">
                <div className="text-[12px] md:text-[22px] order1 text-right mobile-order-text">
                  <div
                    className="date mb-4 md:mb-0"
                    onMouseEnter={imgEnter}
                    onMouseLeave={imgLeave}
                  >
                    (2021)
                  </div>
                  <div
                    className="job-desc leading-none"
                    onMouseEnter={imgEnter}
                    onMouseLeave={imgLeave}
                  >
                    <Link href="/party">
                      <a>
                        Brand Identity <br />
                        Web Design
                      </a>
                    </Link>
                  </div>
                </div>
                <div
                  className="pr-name text-[22px] md:text-[42px] leading-none font-libre"
                  onMouseEnter={imgEnter}
                  onMouseLeave={imgLeave}
                >
                  <Link href="/party">
                    <a>solatium</a>
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2 h-[180px] relative">
                <div className="no-hover-image absolute top-0">
                  <Link href="/party">
                    <a>
                      <Image
                        src={solatium}
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      />
                    </a>
                  </Link>
                </div>
                <div className="hover-image absolute top-0">
                  <Link href="/party">
                    <a>
                      <Image
                        src={solatiumGif}
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container md:mt-[92px] uppercase h-[333px] md:h-[463px] libri">
            <div className="grid md:grid-cols-3 h-full">
              <div className="md:col-span-2 h-[180px] relative">
                <div className="no-hover-image absolute top-0">
                  <Link href="/libri">
                    <a>
                      <Image
                        src={libriHero}
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      />
                    </a>
                  </Link>
                </div>
                <div className="hover-image absolute top-0">
                  <Link href="/libri">
                    <a>
                      <Image
                        src={bookHero}
                        onMouseEnter={imgEnter}
                        onMouseLeave={imgLeave}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="md:ml-8 md:flex-col flex justify-between">
                <div className="text-[12px] md:text-[22px] text-right md:text-left mobile-order-text">
                  <Link href="/libri">
                    <div
                      className="date mb-4 md:mb-0"
                      onMouseEnter={imgEnter}
                      onMouseLeave={imgLeave}
                    >
                      (2022)
                    </div>
                  </Link>
                  <Link href="/libri">
                    <div
                      className="job-desc leading-none"
                      onMouseEnter={imgEnter}
                      onMouseLeave={imgLeave}
                    >
                      cover design <br />
                      Illustration <br /> editorial design
                    </div>
                  </Link>
                </div>
                <div
                  className="pr-name text-[22px] md:text-[42px] leading-none mt-tia-text font-libre md:mb-4 w-2/3 md:w-auto"
                  onMouseEnter={imgEnter}
                  onMouseLeave={imgLeave}
                >
                  That summer of exciting & brilliant discoveries
                </div>
              </div>
            </div>
          </div>
          <div
            className="container grid md:grid-cols-2 mt-[50px] md:mt-44 font-ibmplex about"
            id="about"
          >
            <div className="experience md:w-[490px]">
              <h3 className="text-[50px] md:text-[77px] font-libre">
                experience
              </h3>
              <div className="flex text-[16px] md:text-[24px] items-center">
                <p>UPWORK</p>
                <span className="ml-auto">21’ - Present</span>
              </div>
              <div className="flex text-[16px] md:text-[24px] items-center">
                <p>TOK/Digital Agency</p>
                <span className="ml-auto">21’ - Present</span>
              </div>
              <div className="flex text-[16px] md:text-[24px] items-center">
                <p>BOOST AL</p>
                <span className="ml-auto">21’ - Present</span>
              </div>
              <div className="download mt-14 text-[50px] md:text-[77px] items-center font-libre hidden md:flex">
                <h2>resume</h2>
                <div className="ml-[40px] h-[40px] mt-[30px]">
                  <div className="download-hover">
                    {/* <Image src={downloadIcon} /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="expertise">
              <h3 className="text-[50px] md:text-[77px] font-libre">
                areas of expertise
              </h3>
              <div className="text-[14px] md:text-[24px] grid grid-cols-2">
                <p>Brand Identity</p>
                <p>Art Direction</p>
                <p>Illustrations</p>
                <p>Print Design</p>
                <p>Package Design</p>
                <p>Web Design</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
