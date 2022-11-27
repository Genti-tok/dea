import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect, useRef, useState } from "react";

import Footer from "../components/footer";
import Ferideja from "../assets/deaImeraj.svg";

import dea1 from "../assets/Dea Imeraj.jpg";
import dea2 from "../assets/Ferideja 2.jpg";
import terminal from "../assets/termonal.jpg";
import party from "../assets/party.jpg";
import azrendering from "../assets/azrendering.jpg";
import arameras from "../assets/arameras.jpg";
import remix from "../assets/remix.jpg";
import solatium from "../assets/solatium.jpg";
import downloadIcon from "../assets/download-icon.svg";
import tiaGif from "../assets/tia/terminal-perview.gif";
import bookHero from "../assets/libri/home-libri.gif";
import libriHero from "../assets/libri/libri hero.jpg";
import partyGif from "../assets/party/the-street-party-homepage.gif";
import azGif from "../assets/az/az-rendering-hoover.gif";
import remixGif from "../assets/remix/remix-hoover.gif";

export default function Home() {
  let nameItem = useRef(null);

  useEffect(() => {
    gsap.to(nameItem, {
      scrollTrigger: {
        trigger: ".emri-svg",
        start: "-300px top",
        scrub: 1,
        // markers: true,
      },
      y: 350,
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
    <div className="px-2 text-[#EAEAEA] home-page">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <main className="overflow-hidden">
        <div className="flex header mt-[50px]" id="box" />
        <div className="hero">
          <div className="grid grid-cols-6 h-[530px]">
            <div className="col-span-1 opacity-0 hover:opacity-100 h-full flex items-start profile-image-size">
              <Image src={dea1} />
            </div>
            <div className="flex col-span-4 w-full justify-between items-center mx-auto">
              <div
                className="emri-svg"
                ref={(el) => {
                  nameItem = el;
                }}
              >
                <Image src={Ferideja} alt="Ferideja" />
              </div>
              <div className="mr-auto">
                <h3 className="text-[18px] leading-6 ml-[23px] max-w-[700px] font-ibmplex">
                  Hello I’m Dea, a graphic designer and illustrator based in
                  Tirana/Albania, currently working at Tok Digital Agency. My
                  practice of graphic design is playful and didactic, attached
                  to a meaning and good use of typography. My work is very
                  varied, from branding, editorial, web design and also fun
                  illustrations.
                </h3>
              </div>
            </div>
            <div className="col-span-1 opacity-0 hover:opacity-100 h-full flex items-end profile-image-size">
              <Image src={dea2} />
            </div>
          </div>
        </div>
        <div className="menu container flex text-[77px] items-center justify-center mt-[58px] font-libre">
          <div className="menu-span">
            <span>work</span>
          </div>
          <div className="menu-span ml-4">
            <span>about</span>
          </div>
          <div className="menu-span ml-4">
            <span>contact</span>
          </div>
        </div>
        <div className="container mt-[92px] uppercase h-[463px] private-terminal">
          <div className="grid grid-cols-3 h-full">
            <div className="col-span-2 relative">
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
            <div className="ml-8 flex-col flex justify-between">
              <div className="text-[22px]">
                <div
                  className="date"
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
                className="pr-name text-[42px] leading-none mt-tia-text font-libre mb-4"
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
        <div className="container mt-[205px] uppercase h-[463px] street-party">
          <div className="grid grid-cols-3  h-full">
            <div className="flex-col flex justify-between ml-8 mb-4 text-right mr-8">
              <div className="text-[22px]">
                <div className="date">(2021)</div>
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
                className="pr-name text-[42px] leading-none  font-libre"
                onMouseEnter={imgEnter}
                onMouseLeave={imgLeave}
              >
                <Link href="/party">
                  <a>The STreet Party</a>
                </Link>
              </div>
            </div>
            <div className="col-span-2 relative">
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
        <div className="container mt-[205px] uppercase h-[463px] az-rendering">
          <div className="grid grid-cols-3 h-full">
            <div className="col-span-2 relative">
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
            <div className="flex-col flex justify-between ml-8 mb-4">
              <div className="text-[22px]">
                <div className="date">(2021)</div>
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
                className="pr-name text-[42px] leading-none"
                onMouseEnter={imgEnter}
                onMouseLeave={imgLeave}
              >
                Az Rendering
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-[205px] uppercase h-[463px] arameras">
          <div className="grid grid-cols-3">
            <div className="flex-col flex justify-between ml-8 mb-4 text-right mr-8">
              <div className="text-[22px]">
                <div
                  className="date"
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
                className="pr-name text-[42px] leading-none"
                onMouseEnter={imgEnter}
                onMouseLeave={imgLeave}
              >
                <Link href="/arameras">
                  <a>arameras</a>
                </Link>
              </div>
            </div>
            <div className="col-span-2">
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
        <div className="container mt-[205px] uppercase h-[463px] remix">
          <div className="grid grid-cols-3 h-full">
            <div className="col-span-2 relative max-h-[450px] overflow-hidden">
              <div className="no-hover-image absolute top-0">
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
            <div className="flex-col flex justify-between ml-8 mb-4">
              <div className="text-[22px]">
                <Link href="/remix">
                  <a>
                    <div
                      className="date"
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
                    className="pr-name text-[42px] leading-none"
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
        <div className="container mt-[205px] uppercase h-[463px] solatium">
          <div className="grid grid-cols-3">
            <div className="flex-col flex justify-between ml-8 mb-4 text-right mr-8">
              <div className="text-[22px]">
                <div className="date">(2021)</div>
                <div className="job-desc leading-none">
                  Brand Identity <br />
                  Web Design
                </div>
              </div>
              <div className="pr-name text-[42px] leading-none">solatium</div>
            </div>
            <div className="col-span-2">
              <Image src={solatium} />
            </div>
          </div>
        </div>
        <div className="container mt-[205px] uppercase h-[463px] libri">
          <div className="grid grid-cols-3 h-full">
            <div className="col-span-2 relative">
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
            <div className="flex-col flex justify-between ml-8 mb-4">
              <div className="text-[22px]">
                <Link href="/libri">
                  <div
                    className="date"
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
                className="pr-name text-[42px] leading-none"
                onMouseEnter={imgEnter}
                onMouseLeave={imgLeave}
              >
                That summer of exciting & brilliant discoveries
              </div>
            </div>
          </div>
        </div>
        <div className="container grid grid-cols-2 mt-44 about">
          <div className="experience w-[377px]">
            <h3 className="text-[77px]">experience</h3>
            <div className="flex text-[24px]">
              <p>UPWORK</p>
              <span className="ml-auto">21’ - Present</span>
            </div>
            <div className="flex text-[24px]">
              <p>TOK/Digital Agency</p>
              <span className="ml-auto">21’ - Present</span>
            </div>
            <div className="flex text-[24px]">
              <p>BOOST AL</p>
              <span className="ml-auto">21’ - Present</span>
            </div>
            <div className="download mt-14 text-[77px] flex">
              <h2>resume</h2>{" "}
              <div className="h-9 w-9 ml-[40px]">
                <Image src={downloadIcon} />
              </div>
            </div>
          </div>

          <div className="expertise">
            <h3 className="text-[77px]">areas of expertise</h3>
            <div className="text-[24px]">
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
  );
}
