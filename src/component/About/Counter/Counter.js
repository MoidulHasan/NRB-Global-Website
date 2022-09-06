import React from "react";
import "./Counter.css";
import CountUp from "react-countup";
import "primeicons/primeicons.css";

const Counter = () => {
  return (
    <div className="grid counterDiv mt-4">
      <div className="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
        <div className="surface-100">
          {/* <i
              className="pi pi-user-plus counterIcon"
              style={{ fontSize: "3em" }}
            ></i> */}
          <h1 className="counter">
            <CountUp end={5} />
            K+
          </h1>
          <p className="counterText">Total Member</p>
        </div>
      </div>
      <div className="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
        <div className="counterCol">
          {/* <i
              className="pi pi-user-plus counterIcon"
              style={{ fontSize: "3em" }}
            ></i> */}
          <h1 className="counter">
            <CountUp end={559} />+
          </h1>
          <p className="counterText">Executive Member</p>
        </div>
      </div>
      <div className="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
        <div className="counterCol">
          {/* <i
              className="pi pi-user-plus counterIcon"
              style={{ fontSize: "3em" }}
            ></i> */}
          <h1 className="counter">
            <CountUp end={10} />+
          </h1>
          <p className="counterText">Premium Member</p>
        </div>
      </div>
      <div className="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
        <div className="counterCo">
          {/* <i
              className="pi pi-user-plus counterIcon"
              style={{ fontSize: "3em" }}
            ></i> */}
          <h1 className="counter">
            <CountUp end={300} />+
          </h1>
          <p className="counterText">General Member</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
