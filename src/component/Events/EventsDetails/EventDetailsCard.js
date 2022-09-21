import React from "react";
import { Divider } from "primereact/divider";
import "./EventDetailsCard.css";

const EventDetailsCard = (singleEvent) => {
  return (
    <div className="p-container">
      <div className="p-4 my-4 eventDetailsDiv">
        <div className="">
          <img
            src={singleEvent.singleEvent.img}
            alt=""
            className=" w-full eventDetailsImg"
          />
        </div>
        <div className="pb-4 ">
          <div className="">
            <h1
              className="pt-2 text-center text-2xl md:text-5xl sm:font-normal md:font-semibold lg:font-bold xl:font-bold"
              style={{ color: "#195283" }}
            >
              {singleEvent.singleEvent.name}
            </h1>
            <p
              className="text-center text-lg md:text-3xl font-normal"
              style={{ color: "#F4AA0B" }}
            >
              {singleEvent.singleEvent.subject}
            </p>
            <Divider className="" />
          </div>
          <div className="border-round-md surface-100 ">
            <div className="grid mx-1 md:mx-3">
              <div className="col-12 md:col-4 ">
                <div className="flex flex-column align-items-center justify-content-center mx-3 my-2 p-4">
                  <svg
                    width="68"
                    height="66"
                    fill="none"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192zM224 248c13.3 0 24 10.7 24 24v56h56c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V376H144c-13.3 0-24-10.7-24-24s10.7-24 24-24h56V272c0-13.3 10.7-24 24-24z"
                      fill="#153854"
                    ></path>
                  </svg>
                  <h1 className="text-3xl font-bold my-1">
                    {singleEvent.singleEvent.date}
                  </h1>
                  <p className="text-xl mt-1">Event Date</p>
                </div>
              </div>
              <div className="col-12 md:col-4">
                <div className="flex flex-column align-items-center justify-content-center mx-3 my-2 p-4">
                  <svg
                    width="68"
                    height="70"
                    fill="none"
                    viewBox="0 0 640 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                      fill="#153854"
                    ></path>
                  </svg>
                  <h1 className="text-3xl font-bold my-1">
                    {singleEvent.singleEvent.venu}
                  </h1>
                  <p className="text-xl mt-1">Event Venu</p>
                </div>
              </div>
              <div className="col-12 md:col-4 text-center">
                <div className="flex flex-column align-items-center justify-content-center mx-3 my-2 p-4">
                  <svg
                    width="68"
                    height="70"
                    fill="none"
                    viewBox="0 0 640 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                      fill="#153854"
                    ></path>
                  </svg>
                  <h1 className="text-3xl font-bold my-1">
                    {singleEvent.singleEvent.orginazer}
                  </h1>
                  <p className="text-xl mt-1">Organized By</p>
                </div>
              </div>
            </div>
          </div>
          {/* <Divider /> */}

          <div className="pt-4">
            <p className="px-2 md:px-4 lg:px-6 xl:px-6 text-3xl font-bold eventOverView">
              Event Overview:
            </p>
            <p className="px-2 md:px-4 lg:px-6 xl:px-6 pt-2 eventDetailsText">
              {singleEvent.singleEvent.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsCard;
