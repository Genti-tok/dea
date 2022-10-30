import React from "react";
import Image from "next/image";

import Footer from "../../components/footer";
import Cursor from "../../components/customCursor";

import street from "../../assets/tia/street-small.jpg";
import aramerasHero from "../../assets/arameras/hero.jpg";
import arameras1 from "../../assets/arameras/1.jpg";
import arameras2 from "../../assets/arameras/2.jpg";
import arameras3 from "../../assets/arameras/3.jpg";
import arameras4 from "../../assets/arameras/4.jpg";
import arameras5 from "../../assets/arameras/5.jpg";
import arameras6 from "../../assets/arameras/6.jpg";
import arameras7 from "../../assets/arameras/7.jpg";
import arameras8 from "../../assets/arameras/8.jpg";
import arameras9 from "../../assets/arameras/9.jpg";
import arameras10 from "../../assets/arameras/10.jpg";
import arameras11 from "../../assets/arameras/11.jpg";
import arameras12 from "../../assets/arameras/12.jpg";
import arameras13 from "../../assets/arameras/13.jpg";

export default function Arameras() {
  return (
    <div className="arameras-project">
      <Cursor />
      <div className="menu"></div>
      <div>
        <Image src={aramerasHero} alt="arameras hero" />
      </div>
      <div className="container mt-[147px]">
        <div className="flex flex-wrap">
          <div className="proj-desc text-[#EAEAEA] ">
            <h2 className="text-[64px] uppercase">
              ARAMERAS
              <br />
              beach & Lodges
            </h2>
            <div className="labels">
              <div className="flex mt-[50px]">
                <div className="w-[130px]">
                  <p className="text-[#727070] uppercase">YEAR</p>
                </div>
                <div>
                  <p>(2021)</p>
                </div>
              </div>
              <div className="flex mt-[28px]">
                <div className="w-[130px]">
                  <p className="text-[#727070] uppercase">credits</p>
                </div>
                <div>
                  <p className="uppercase">AGENCY tok digital AGENCY</p>
                </div>
              </div>
              <div className="flex mt-[28px]">
                <div className="w-[130px]">
                  <p className="text-[#727070] uppercase">SERVICES</p>
                </div>
                <div>
                  <div>
                    <p className="uppercase">BRAND IDENTITY ART DIRECTION </p>
                    <p className="uppercase">illustrations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[560px] text-[#EAEAEA] text-[22px] ml-[104px] mt-[30px]">
            <p>
              “Arameras Beach Lodges”, is a resort in Arameras private beach.
              The beach is hidden away behind the forests within the “Butrint
              National Park”. The modern and boho features of the lodges blend
              perfectly together to create a luxury atmosphere while offering a
              high quality place to escape, relax and stay.
            </p>
            <br />
            <p>
              As for the logo, it was portrayed through a rustic manner and
              calming motifs. The logo is very minimalistic and the font was
              chosen to show the resort’s status and elegance. Also, the colors
              are calming and take inspiration from the sea. The seahorse was
              chosen for its meaning of luck and good furtune. It is an
              attribute to the sea and is considered to be a symbol of strength
              and power. Overall, the entire image is supposed to create the
              feeling of going to an exclusive place, away from the noise.
              Somewhere relaxing and quite.
            </p>
          </div>
        </div>
      </div>
      <div className="list-images container mt-[123px] ">
        <div className="leading-[0px]">
          <Image src={arameras1} />
        </div>
        <div className="leading-[0px]">
          <Image src={arameras2} />
        </div>
        <div className="leading-[0px]">
          <Image src={arameras3} />
        </div>
        <div className="leading-[0px]">
          <Image src={arameras4} />
        </div>
        <div className="leading-[0px]">
          <Image src={arameras5} />
        </div>
        <div className="leading-[0px]">
          <Image src={arameras6} />
        </div>
        <div className="leading-[0px]">
          <Image src={arameras7} />
        </div>
        <div className="leading-[0px]">
          <Image src={arameras8} />
        </div>
        <div className="leading-[0px]">
          <Image src={arameras9} />
        </div>
        <div className="leading-[0px]">
          <Image src={arameras10} />
        </div>
        <div className="leading-[0px]">
          <Image src={arameras11} />
        </div>
        <div className="leading-[0px]">
          <Image src={arameras12} />
        </div>
        <div className="leading-[0px]">
          <Image src={arameras13} />
        </div>
      </div>
      <div className="container border-t mt-[52px]">
        <div className="grid grid-cols-2 other-projects-hover">
          <div className="text-[#EAEAEA] flex flex-col justify-between">
            <div>
              <h2 className="text-[88px]">The Street arameras</h2>
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
