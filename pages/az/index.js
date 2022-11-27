import Image from "next/image";

import Cursor from "../../components/customCursor";
import Footer from "../../components/footer";

import hero from "../../assets/az/az-hero.jpg";
import az1 from "../../assets/az/1.png";
import az2 from "../../assets/az/2.png";
import az3 from "../../assets/az/3.jpg";
import az4 from "../../assets/az/4.png";
import az5 from "../../assets/az/5.png";
import az6 from "../../assets/az/6.jpg";
import az7 from "../../assets/az/7.png";
import az8 from "../../assets/az/8.jpg";
import az9 from "../../assets/az/9.png";
import az10 from "../../assets/az/10.png";
import street from "../../assets/tia/street-small.jpg";

export default function AZRendering() {
  return (
    <div className="azrendering font-ibmplex">
      <Cursor />
      <div className="menu"></div>
      <div>
        <Image src={hero} alt="tia hero" />
      </div>
      <div className="container mt-[147px]">
        <div className="flex flex-wrap justify-between">
          <div className="proj-desc text-[#EAEAEA] text-[18px]">
            <h2 className="text-[74px] font-libre">
              Az <br /> Rendering
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
                  {/* <p className="uppercase">RENDERS STUDIO ATELIER 5</p> */}
                </div>
              </div>
              <div className="flex mt-[28px]">
                <div className="w-[130px]">
                  <p className="text-[#727070] uppercase">SERVICES</p>
                </div>
                <div>
                  <div>
                    <p className="uppercase">BRAND IDENTITY</p>
                    {/* <p className="uppercase">PACKAGING WEB DESIGN</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[560px] text-[#EAEAEA] text-[18px] ml-[104px] mt-[30px]">
            <p>
              AZ Rendering is a brand that produces chemical fertilizer and
              promotes circular economy. <br /> In a circular economy, waste is
              designed out of product manufacturing and materials are kept in
              use.
            </p>
            <br />
            <p>
              The logo was designed to create a reliable and very simple visual
              presentation. <br /> Because circular economy is a model of
              production and consumption of existing materials and products, the
              logo showcases just that:
              <br /> Produce Use Recycle.
            </p>
          </div>
        </div>
      </div>
      <div className="list-images container mt-[123px] ">
        <div className="leading-[0px]">
          <Image src={az1} />
        </div>
        <div className="leading-[0px]">
          <Image src={az2} />
        </div>
        <div className="leading-[0px]">
          <Image src={az3} />
        </div>
        <div className="leading-[0px]">
          <Image src={az4} />
        </div>
        <div className="leading-[0px]">
          <Image src={az5} />
        </div>
        <div className="leading-[0px]">
          <Image src={az6} />
        </div>
        <div className="leading-[0px]">
          <Image src={az7} />
        </div>
        <div className="leading-[0px]">
          <Image src={az8} />
        </div>
        <div className="leading-[0px]">
          <Image src={az9} />
        </div>
        <div className="leading-[0px]">
          <Image src={az10} />
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
