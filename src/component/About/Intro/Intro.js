import React from "react";
import "./Intro.css";
import aboutInrtoImg from "../../../assets/image/aboutRefactor/aboutIntroPeople.png";
import flagGif from "../../../assets/image/aboutRefactor/About Cover Cutted.gif";
import aboutInroImg2 from "../../../assets/image/aboutRefactor/aboutIntroImgTwo.png";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

const Intro = () => {
  return (
    <div className="">
      <div className="p-container my-3">
        <img
          src={flagGif}
          alt="intro_Image"
          className=" h-16rem md:h-25rem lg:h-30rem xl:h-30rem w-full aboutPageMainImage"
        />
      </div>
      <div className="p-container">
        <div className=" nrbAboutIntro py-2 ">
          <div className="flex align-items-center justify-content-center">
            <h4 className="font-bold text-4xl md:text-6xl my-4 nrbIntro-title inline-block">
              Who are We?
            </h4>
          </div>
          <div className="aboutPageNRBInformation">
            <div className="grid">
              <div className="col-12 md:col-6 px-4 ">
                <div className="pt-2 md:pt-6">
                  <h4 className="font-bold mt-4 mb-6 text-3xl lg:text-5xl text-blue-900">
                    NRB GLobal
                  </h4>
                  <p className="text-base md:text-xl text-blue-900 font-bold aboutNRBInfoDetail">
                    NRB Global (Non-Resident Bangladeshi – Global) is a
                    non-political organization of Bangladeshis living abroad.
                    This is the first organization to a unit about 15 Million
                    Bangladeshis all over the world. NRB Global is the bridge
                    between Bangladesh and Bangladeshis living abroad.
                  </p>

                  <div className="flex justify-content-start mt-3 md:mt-8">
                    <Link to="/gmRegistration" className="linkDecoration ">
                      <Button
                        label="Join NRB Global"
                        className="p-button-rounded p-button-raised p-button-info p-button-outlined"
                        icon="pi pi-angle-right"
                        iconPos="right"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 px-4 md:px-0 aboutImgColumn">
                <div className="aboutIntroFirstImg flex justify-content-end">
                  <img src={aboutInrtoImg} alt="about intro of company" />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="col-12 md:col-6 px-4 ">
                <div className="aboutIntroFirstImg flex justify-content-start">
                  <img src={aboutInroImg2} alt="about intro of company" />
                </div>
              </div>
              <div
                className="col-12 md:col-6 px-4 md:px-0 
              flex justify-content-center flex-column"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 12 10"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 fill-orange-600"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.4655 1.6721C9.84947 2.43612 9.04145 3.33384 9.04145 4.36526C9.73027 4.44166 10.2999 4.71225 10.7502 5.17703C11.2006 5.64181 11.4258 6.1798 11.4258 6.79101C11.4258 7.44043 11.2072 7.98797 10.7701 8.43365C10.333 8.87933 9.78325 9.10216 9.12093 9.10216C8.37913 9.10216 7.73669 8.81248 7.19359 8.2331C6.65048 7.65371 6.37894 6.95019 6.37894 6.1225C6.37894 3.63943 7.82277 1.69758 10.7105 0.296875L11.4655 1.6721ZM5.76238 1.6721C4.13307 2.43612 3.31843 3.33384 3.31843 4.36526C4.02049 4.44166 4.5967 4.71225 5.04708 5.17703C5.49745 5.64181 5.72264 6.1798 5.72264 6.79101C5.72264 7.44043 5.50077 7.98797 5.05701 8.43365C4.61326 8.87933 4.06023 9.10216 3.39791 9.10216C2.65611 9.10216 2.01698 8.81248 1.4805 8.2331C0.944017 7.65371 0.675781 6.95019 0.675781 6.1225C0.675781 3.63943 2.113 1.69758 4.98747 0.296875L5.76238 1.6721Z"
                  ></path>
                </svg>
                <p className="text-base md:text-xl text-blue-900 font-medium aboutIntroTextSecond">
                  NRB Global believes that the experience of Bangladeshis living
                  abroad can be a great asset to the development of Bangladesh.
                  Foreign currency remitted by the Bangladeshis constitutes a
                  large part of the national economy: amounting to as high as
                  14% of GDP in some year. Besides sending hefty remittances,
                  each NRB is a 'Brand Ambassador' aboard for our homeland. From
                  NASA to Massachusetts (MIT), Restaurant business in London,
                  small business in New York, real estate business in the Middle
                  East, active parliamentarians in the US and UK. Imagine the
                  benefit of uniting all the successful and talented Bangladeshi
                  NRB, under one Global platform, to work shoulder to shoulder
                  and hand in hand for the betterment of our motherland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
