import Image from "next/image";

import Cursor from "../../components/customCursor";
import Footer from "../../components/footer";

import hero from "../../assets/remix/remix-hero.gif";
import remix1 from "../../assets/remix/1.jpg";
import remix2 from "../../assets/remix/2.gif";
import remix3 from "../../assets/remix/3.gif";
import remix4 from "../../assets/remix/4.gif";
import remix5 from "../../assets/remix/5.gif";
import remix6 from "../../assets/remix/6.jpg";
import remix7 from "../../assets/remix/7.jpg";
import remix8 from "../../assets/remix/8.jpeg";
import street from "../../assets/tia/street-small.jpg";

export default function Remix() {
  return (
    <div className="remix font-ibmplex">
      <Cursor />
      <div className="menu"></div>
      <div>
        <Image src={hero} alt="tia hero" />
      </div>
      <div className="container mt-[147px]">
        <div className="flex flex-wrap justify-between">
          <div className="proj-desc text-[#EAEAEA] text-[18px]">
            <h2 className="text-[74px] font-libre uppercase">remix</h2>
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
                  {/* <p className="uppercase">RENDERS STUDIO ATELIER 5</p> */}
                </div>
              </div>
              <div className="flex mt-[28px]">
                <div className="w-[130px]">
                  <p className="text-[#727070] uppercase">SERVICES</p>
                </div>
                <div>
                  <div>
                    <p className="uppercase">
                      BRAND IDENTITY ART DIRECTION <br />
                      illustrations{" "}
                    </p>
                    {/* <p className="uppercase">PACKAGING WEB DESIGN</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[560px] text-[#EAEAEA] text-[18px] ml-[104px] mt-[30px]">
            <p>
              “Remix Music Festival”, was held for the first time in Tirana as a
              collaboration between Italy and Albania. The festival was the
              summer season opener and presented genres from electronic music to
              reggae, and from alternative rock to hip hop. Festival-goers were
              invited to party under the stars to the sound of the best local
              and italian artists and DJ’s.
            </p>
            <br />
            <p>
              To represent the personality of the event, in the design, there
              were used colours details to conceptualise the diverse and
              inclusive musical language that “Remix Music Festival” promotes.
              And, the result was the creation of a graphic identity that would
              put the audience in the mood of the festival and invite them into
              the atmosphere of the city’s alternative culture.
            </p>
          </div>
        </div>
      </div>
      <div className="list-images container mt-[123px] ">
        <div className="leading-[0px]">
          <Image src={remix1} />
        </div>
        <div className="leading-[0px]">
          <Image src={remix2} />
        </div>
        <div className="leading-[0px]">
          <Image src={remix3} />
        </div>
        <div className="leading-[0px]">
          <Image src={remix4} />
        </div>
        <div className="leading-[0px]">
          <Image src={remix5} />
        </div>
        <div className="leading-[0px]">
          <Image src={remix6} />
        </div>
        <div className="leading-[0px]">
          <Image src={remix7} />
        </div>
        <div className="leading-[0px]">
          <Image src={remix8} />
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
