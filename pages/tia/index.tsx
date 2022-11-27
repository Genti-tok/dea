import Image from "next/image";

import Cursor from "../../components/customCursor";
import Footer from "../../components/footer";

import hero from "../../assets/tia/tia-hero.jpg";
import tia1 from "../../assets/tia/tia-1.jpg";
import tia2 from "../../assets/tia/tia-2.jpg";
import tia3 from "../../assets/tia/tia-3.jpg";
import tia4 from "../../assets/tia/tia-4.jpg";
import tia5 from "../../assets/tia/tia-5.jpg";
import tia6 from "../../assets/tia/tia-6.gif";
import tia7 from "../../assets/tia/tia-7.jpg";
import tia8 from "../../assets/tia/tia-8.gif";
import tia9 from "../../assets/tia/tia-9.jpg";
import tia10 from "../../assets/tia/tia-10.jpg";
import tia11 from "../../assets/tia/tia-11.jpg";
import street from "../../assets/tia/street-small.jpg";


export default function Tia() {

    return (
        <div className="tia ">
            <Cursor />
            <div className="menu"></div>
            <div>
                <Image src={hero} alt="tia hero"/>
            </div>
            <div className="container mt-[147px]">
                <div className="flex flex-wrap">
                    <div className="proj-desc text-[#EAEAEA] text-[18px]">
                        <h2 className="text-[74px]">Private terminal <br /> & Exclusive Club</h2>
                        <div className="labels">
                            <div className="flex mt-[50px]">
                                <div className="w-[130px]"><p className="text-[#727070] uppercase">YEAR</p></div>
                                <div><p>(2021)</p></div>
                            </div>
                            <div className="flex mt-[28px]">
                                <div className="w-[130px]"><p className="text-[#727070] uppercase">credits</p></div>
                                <div>
                                    <p className="uppercase">AGENCY tok digital AGENCY</p>
                                    <p className="uppercase">RENDERS STUDIO ATELIER 5</p>
                                </div>
                            </div>
                            <div className="flex mt-[28px]">
                                <div className="w-[130px]"><p className="text-[#727070] uppercase">SERVICES</p></div>
                                <div>
                                    <div>
                                        <p className="uppercase">BRANDING ART DIRECTION</p>
                                        <p className="uppercase">PACKAGING WEB DESIGN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[560px] text-[#EAEAEA] text-[18px] ml-[104px] mt-[30px]">
                        <p>
                            The most VIP way through “Tirana International Airport”, is via a separate terminal on a discreet location, apart  from the main terminal and away from long and noisy queue lines.
                            “Private Terminal & Exclusive Club”, has been developed for passengers who want to spend time in a more private and elegant atmosphere. 
                            The design of this space gave it a new life and a new dimension.
                        </p>
                        <br />
                        <p>
                            With hundreds of flights taking off and landing every day, it is important to create a perfect stop-over for passengers to relax, eat and have a great time.
                            Moreover, the “Private Terminal” includes , a meeting room, cigar room and exclusive lounge.
                            The lounge welcomes people to a relaxing comfort, luxury and custom-tailored services.
                        </p>
                        <br />
                        <p>
                            As for the logo, it is highly inspired by Albanian traditional symbols used mainly on traditional rugs.
                            The idea is to seamlessly merge sundry signs of the Albanian ethnicity and culture, with a vintage but yet luxury mood.
                        </p>
                    </div>
                </div>
            </div>
            <div className="list-images container mt-[123px] ">
                <div className="leading-[0px]"><Image src={tia1}/></div>
                <div className="leading-[0px]"><Image src={tia2}/></div>
                <div className="leading-[0px]"><Image src={tia3}/></div>
                <div className="leading-[0px]"><Image src={tia4}/></div>
                <div className="leading-[0px]"><Image src={tia5}/></div>
                <div className="leading-[0px]"><Image src={tia6}/></div>
                <div className="leading-[0px]"><Image src={tia7}/></div>
                <div className="leading-[0px]"><Image src={tia8}/></div>
                <div className="leading-[0px]"><Image src={tia9}/></div>
                <div className="leading-[0px]"><Image src={tia10}/></div>
                <div className="leading-[0px]"><Image src={tia11}/></div>
            </div>
            <div className="container border-t mt-[52px]">
                <div className="grid grid-cols-2 other-projects-hover">
                    <div className="text-[#EAEAEA] flex flex-col justify-between">
                        <div><h2 className="text-[88px]">The Street Party</h2></div>
                        <div><p className="text-[42px]">2021</p></div>
                    </div>
                    <div className="ml-auto mt-[43px] other-projects-image">
                        <div className="street-small-image"><Image src={street}/></div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}