import React from "react";
import Image from "next/image";

import Footer from "../../components/footer";
import Cursor from "../../components/customCursor";

import street from "../../assets/tia/street-small.jpg";
import partyHero from "../../assets/party/hero.jpeg";
import party1 from "../../assets/party/1.jpg";
import party2 from "../../assets/party/2.jpg";
import party3 from "../../assets/party/3.jpg";
import party4 from "../../assets/party/4.jpg";
import party5 from "../../assets/party/5.jpeg";
import party6 from "../../assets/party/6.jpg";
import party7 from "../../assets/party/7.png";
import party8 from "../../assets/party/8.jpg";
import party9 from "../../assets/party/9.gif";
import party10 from "../../assets/party/10.jpg";

export default function Party() {
  return (
    <div className="party-project px-[37px] md:px-0">
      <Cursor />
      <div className="menu"></div>
      <div>
        <Image src={partyHero} alt="party hero" />
      </div>
      <div className="container mt-[147px]">
        <div className="flex flex-wrap">
          <div className="proj-desc text-[#EAEAEA] text-[18px]">
            <h2 className="text-[74px] uppercase">
              The STreet <br />
              Party
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

          <div className="max-w-[560px] text-[#EAEAEA] text-[18px] ml-[104px] mt-[30px]">
            <p>
              In Tirana, a music festival called “Street Party” takes place
              every year at the heart of the city.
            </p>
            <br />
            <p>
              Since 2016 “Street Party” has been and still is one of the main
              music events of Tirana. It has become an annual event for bands
              and DJ’s from Albania and all around the world.
            </p>
            <br />
            <p>
              March the 14th marks the celebration of “Summer Day”, a national
              feast that originates from the pagan beliefs of Albanian’s
              Illyrian ancestors and in order to celebrate the rebirth of nature
              after the end of winter everyone comes together for impressive
              music, and all-around good vibes.
            </p>
            <br />
            <p>
              This year’s edition was held as a tribute against the war in
              Ukraine and in addition to that elements were created that refer
              to the country’s flag colours and also the vibrant colours of the
              summer season.
            </p>
          </div>
        </div>
      </div>
      <div className="list-images container mt-[123px] ">
        <div className="leading-[0px]">
          <Image src={party1} />
        </div>
        <div className="leading-[0px]">
          <Image src={party2} />
        </div>
        <div className="leading-[0px]">
          <Image src={party3} />
        </div>
        <div className="leading-[0px]">
          <Image src={party4} />
        </div>
        <div className="leading-[0px]">
          <Image src={party5} />
        </div>
        <div className="leading-[0px]">
          <Image src={party6} />
        </div>
        <div className="leading-[0px]">
          <Image src={party7} />
        </div>
        <div className="leading-[0px]">
          <Image src={party8} />
        </div>
        <div className="leading-[0px]">
          <Image src={party9} />
        </div>
        <div className="leading-[0px]">
          <Image src={party10} />
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
