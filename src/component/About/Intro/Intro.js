import React from "react";
import aboutImg from "../../../assets/image/about/Mission-vision.gif";
import intoImg from "../../../assets/image/about/NRB-About.gif";

import "./Intro.css";

const Intro = () => {
  return (
    <div className="">
      <div className="">
        <img
          src={aboutImg}
          alt="intro_Image"
          className="mb-4   md:h-25rem lg:h-30rem xl:h-30rem w-full"
        />
      </div>
      <div className="p-container nrbAboutIntro py-1 px-4 ">
        <div className="grid">
          <div className="sm:col-12 md:col-12 lg:col-6 xl:col-6 md:mt-4 lg:mt-8 xl:mt-8  ">
            <img
              src={intoImg}
              alt="intro_Image"
              className="nrbIntroImg sm:h-20rem md:h-25rem lg:h-30rem xl:h-27rem w-full mt-4"
            />
          </div>
          <div className="sm:col-12 md:col-12 lg:col-6 xl:col-6  ">
            <h1 className="nrbIntro-title  lg:pl-5 xl:pl-5  mt-2">
              About NRB Global
            </h1>
            <p className="intro-details  lg:ml-5 xl:ml-5 mt-4">
              NRB Global (Non-Resident Bangladeshi - Global) is a non-political
              organization of Bangladeshis living abroad. This is the first
              organization to a unit about 15 Million Bangladeshis all over the
              world.NRB Global is the bridge between Bangladesh and Bangladeshis
              living abroad. <br /> <br /> NRB Global believes that the
              experience of Bangladeshis living abroad can be a great asset to
              the development of Bangladesh.oreign currency remitted by the
              Bangladeshis constitutes a large part of the national economy:
              amounting to as high as 14% of GDP in some year. <br /> <br />
              Besides sending hefty remittances, each NRB is a 'Brand
              Ambassador' aboard for our homeland.From NASA to Massachusetts
              (MIT), Restaurant business in London, small business in New York,
              real estate business in the Middle East, active parliamentarians
              in the US and UK.
              <br /> <br />
              Imagine the benefit of uniting all the successful and talented
              Bangladeshi NRB, under one Global platform, to work shoulder to
              shoulder and hand in hand for the betterment of our motherland.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
