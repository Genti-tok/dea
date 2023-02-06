import Image from "next/image";

import Cursor from "../../components/customCursor";
import Footer from "../../components/footer";

import Ferideja from "../../assets/dea-Imeraj.svg";

import hero from "../../assets/sol/hero.jpg";
import sol1 from "../../assets/sol/sol1.jpg";
import sol2 from "../../assets/sol/sol2.jpg";
import sol3 from "../../assets/sol/sol3.jpg";
import sol4 from "../../assets/sol/sol4.jpg";
import sol5 from "../../assets/sol/sol5.jpg";
import sol6 from "../../assets/sol/sol6.jpg";
import sol7 from "../../assets/sol/sol7.jpg";
import sol8 from "../../assets/sol/sol8.jpg";
import sol9 from "../../assets/sol/sol9.jpg";
import sol10 from "../../assets/sol/sol10.jpg";
import sol11 from "../../assets/sol/sol11.jpg";
import sol12 from "../../assets/sol/sol12.jpg";
import sol13 from "../../assets/sol/sol13.jpg";
import sol14 from "../../assets/sol/sol14.jpg";
import sol15 from "../../assets/sol/sol15.jpg";
import street from "../../assets/tia/street-small.jpg";

export default function Sol() {
  return (
    <div className="tia font-ibmplex">
      <div className="hidden md:block">
        <Cursor />
      </div>
      <div className="h-[110px] sticky top-0 z-10 bg-[#0E0E0F]">
        <div className="menu-wrapper flex container items-center h-full">
          <div className="logo hidden md:block">
            <Image src={Ferideja} alt="Ferideja" />
          </div>
          <div className="menu flex items-center text-[#EAEAEA] w-full text-[40px] md:text-[97px] items-center justify-center  font-libre">
            <div className="menu-span">
              <span>work,</span>
            </div>
            <div className="menu-span ml-4">
              <span>about,</span>
            </div>
            <div className="menu-span ml-4">
              <span>contact</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image src={hero} alt="tia hero" />
      </div>
      <div className="px-[37px] md:px-2">
        <div className="container mt-[21px] md:mt-[147px]">
          <div className="flex flex-wrap">
            <div className="proj-desc text-[#EAEAEA] text-[12px] md:text-[18px]">
              <h2 className="text-[30px] md:text-[74px] font-libre uppercase">
                Private terminal <br /> & Exclusive Club
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
                    <p className="uppercase">RENDERS STUDIO ATELIER 5</p>
                  </div>
                </div>
                <div className="flex mt-[28px]">
                  <div className="w-[130px]">
                    <p className="text-[#727070] uppercase">SERVICES</p>
                  </div>
                  <div>
                    <div>
                      <p className="uppercase">BRANDING ART DIRECTION</p>
                      <p className="uppercase">PACKAGING WEB DESIGN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[560px] text-[#EAEAEA] text-[12px] md:text-[18px] md:ml-[104px] mt-[30px]">
              <p>
                The most VIP way through “Tirana International Airport”, is via
                a separate terminal on a discreet location, apart from the main
                terminal and away from long and noisy queue lines. “Private
                Terminal & Exclusive Club”, has been developed for passengers
                who want to spend time in a more private and elegant atmosphere.
                The design of this space gave it a new life and a new dimension.
              </p>
              <br />
              <p>
                With hundreds of flights taking off and landing every day, it is
                important to create a perfect stop-over for passengers to relax,
                eat and have a great time. Moreover, the “Private Terminal”
                includes , a meeting room, cigar room and exclusive lounge. The
                lounge welcomes people to a relaxing comfort, luxury and
                custom-tailored services.
              </p>
              <br />
              <p>
                As for the logo, it is highly inspired by Albanian traditional
                symbols used mainly on traditional rugs. The idea is to
                seamlessly merge sundry signs of the Albanian ethnicity and
                culture, with a vintage but yet luxury mood.
              </p>
            </div>
          </div>
        </div>
        <div className="list-images container mt-[123px] ">
          <div className="leading-[0px]">
            <Image src={sol1} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol2} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol3} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol4} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol5} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol6} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol7} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol8} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol9} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol10} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol11} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol12} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol13} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol14} />
          </div>
          <div className="leading-[0px]">
            <Image src={sol15} />
          </div>
        </div>
        <div className="container border-t mt-[52px]">
          <div className="grid grid-cols-2 other-projects-hover mt-5 md:mt-0">
            <div className="text-[#EAEAEA] flex flex-col justify-between">
              <div>
                <h2 className="text-[22px] md:text-[88px]">The Street Party</h2>
              </div>
              <div>
                <p className="text-[18px] md:text-[42px]">2021</p>
              </div>
            </div>
            <div className="ml-auto md:mt-[43px] other-projects-image">
              <div className="street-small-image">
                <Image src={street} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
