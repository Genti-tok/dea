import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Footer from "../../components/footer";
import street from "../../assets/tia/street-small.jpg";
import Cursor from "../../components/customCursor";

import hero from "../../assets/libri/librihero.jpg";
import libri2 from "../../assets/libri/2.jpg";
import libri3 from "../../assets/libri/3.jpg";
import libri4 from "../../assets/libri/4.jpg";
import libri5 from "../../assets/libri/5.jpg";
import libri6 from "../../assets/libri/6.jpg";
import libri7 from "../../assets/libri/7.jpg";
import libri8 from "../../assets/libri/8.jpg";
import libri9 from "../../assets/libri/9.jpg";
import libri10 from "../../assets/libri/10.jpg";
import libri11 from "../../assets/libri/11.jpg";
import libri12 from "../../assets/libri/12.jpg";
import libri13 from "../../assets/libri/13.jpg";
import libri14 from "../../assets/libri/14.jpg";
import libri15 from "../../assets/libri/15.jpg";
import libri16 from "../../assets/libri/16.jpg";
import libri17 from "../../assets/libri/17.jpg";

export default function Libri() {
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // const [cursorVariant, setCursorVariant] = useState("default");
  // // console.log(mousePosition);

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     // console.log(e);
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };
  //   window.addEventListener("mousemove", mouseMove);
  //   return () => {
  //     window.addEventListener("mousemove", mouseMove);
  //   };
  // }, []);
  // const variants = {
  //   default: {
  //     x: mousePosition.x - 9,
  //     y: mousePosition.y - 9,
  //   },
  //   text: {
  //     height: 36,
  //     width: 36,
  //     x: mousePosition.x - 18,
  //     y: mousePosition.y - 18,
  //     mixBlendMode: "difference",
  //   },
  //   img: {
  //     height: 72,
  //     width: 72,
  //     x: mousePosition.x - 36,
  //     y: mousePosition.y - 36,
  //     mixBlendMode: "difference",
  //   },
  // };
  return (
    <div className="libri-project">
      {/* <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      /> */}
      <Cursor />
      <div className="menu"></div>
      <div>
        <Image src={hero} alt="libri hero" />
      </div>
      <div className="container mt-[147px]">
        <div className="flex flex-wrap">
          <div className="proj-desc text-[#EAEAEA] text-[18px]">
            <h2 className="text-[74px] uppercase">
              That summer <br /> of exciting & <br /> brilliant <br />{" "}
              discoveries
            </h2>
            <div className="labels">
              <div className="flex mt-[50px]">
                <div className="w-[130px]">
                  <p className="text-[#727070] uppercase">YEAR</p>
                </div>
                <div>
                  <p>(2022)</p>
                </div>
              </div>
              <div className="flex mt-[28px]">
                <div className="w-[130px]">
                  <p className="text-[#727070] uppercase">credits</p>
                </div>
                <div>
                  <p className="uppercase">book author niiru sigh</p>
                </div>
              </div>
              <div className="flex mt-[28px]">
                <div className="w-[130px]">
                  <p className="text-[#727070] uppercase">SERVICES</p>
                </div>
                <div>
                  <div>
                    <p className="uppercase">cover design ART DIRECTION </p>
                    <p className="uppercase">editorial design illustration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[560px] text-[#EAEAEA] text-[18px] ml-[104px] mt-[30px]">
            <p>
              “The Summer of Exciting Discoveries” is a math book created by 3rd
              grade children.
            </p>
            <br />
            <p>
              The stories included in the book were concepted and thought by the
              children during their summer vacation on how math was applied in
              everyday life. All the stories were gathered from Mrs. Niru, their
              teacher, that eventually put them together into a book. It is a
              math book that helps children learn in a new way.
            </p>
            <br />
            <p>
              I was commissioned to design the cover, editorial and the
              illustrations of the book according to the different events told
              by the children. The challenge in itself was to make an
              illustration style that created an aesthetically playful and yet
              interesting math book for children of that age.
            </p>
            <br />
            <p>
              With this book, kids will explore math in an amusing and
              entertaining way while learning about real numbers and many other
              math topics.
            </p>
          </div>
        </div>
      </div>
      <div className="list-images container mt-[123px] ">
        <div className="leading-[0px]">
          <Image src={libri2} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri3} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri4} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri5} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri6} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri7} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri8} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri9} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri10} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri11} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri12} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri13} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri14} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri15} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri16} />
        </div>
        <div className="leading-[0px]">
          <Image src={libri17} />
        </div>
      </div>
      <div className="container border-t mt-[52px]">
        <div className="grid grid-cols-2 other-projects-hover">
          <div className="text-[#EAEAEA] flex flex-col justify-between">
            <div>
              <h2 className="text-[88px]">The Street Party</h2>
            </div>
            <div>
              <p className="text-[42px]">2021</p>
            </div>
          </div>
          <div className="ml-auto mt-[43px] other-projects-image">
            <div className="street-small-image">
              <Image src={street} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
