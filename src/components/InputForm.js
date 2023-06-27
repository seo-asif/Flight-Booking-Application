import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TbBriefcase } from "react-icons/tb";

const InputForm = () => {
  const [info, setInfo] = useState({});

  const handleFromSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    e.target.reset();
  };

  const getUserData = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div className="input-container">
      <form
        action="submit"
        className="form-section"
        onSubmit={handleFromSubmit}
      >
        {/* *********************** Destination From ****************************** */}
        <div className="destination-form">
          <p>Destination From</p>
          <div className="destination-form-input">
            <span>
              <HiOutlineLocationMarker className="icon" />
            </span>
            <select name="from" id="" onChange={getUserData}>
              <option value="" hidden>
                Please Select
              </option>
              <option value="dhaka">Dhaka</option>
              <option value="chottogram">Chottogram</option>
              <option value="khulna">Khulna</option>
              <option value="rangpur">Rangpur</option>
              <option value="sylhet">Sylhet</option>
              <option value="coxbazar">Cox's Bazar</option>
            </select>
          </div>
        </div>

        {/* *********************** Destination To ****************************** */}

        <div className="destination-form">
          <p>Destination to</p>
          <div className="destination-form-input">
            <span>
              <HiOutlineLocationMarker className="icon" />
            </span>
            <select name="to" id="" onChange={getUserData}>
              <option value="" hidden>
                Please Select
              </option>
              <option value="dhaka">Dhaka</option>
              <option value="chottogram">Chottogram</option>
              <option value="khulna">Khulna</option>
              <option value="rangpur">Rangpur</option>
              <option value="sylhet">Sylhet</option>
              <option value="coxbazar">Cox's Bazar</option>
            </select>
          </div>
        </div>
        {/* *********************** Date Input ****************************** */}
        <div className="destination-form">
          <p>Journey Date</p>
          <div className="destination-form-input">
            <input type="date" name="date" id="" onChange={getUserData} />
          </div>
        </div>
        {/* *********************** Select Guest ****************************** */}

        <div className="destination-form">
          <p>Guests</p>
          <div className="destination-form-input">
            <span>
              <HiOutlineUserCircle className="icon" />
            </span>
            <select name="guests" id="" onChange={getUserData}>
              <option value="" hidden>
                Please Select
              </option>
              <option value="1">1 Person</option>
              <option value="2">2 Person</option>
              <option value="3">3 Person</option>
              <option value="4">4 Person</option>
            </select>
          </div>
        </div>

        {/* *********************** Select Class ****************************** */}

        <div className="destination-form">
          <p>Class</p>
          <div className="destination-form-input">
            <span>
              <TbBriefcase className="icon" />
            </span>
            <select name="guests" id="" onChange={getUserData}>
              <option value="" hidden>
                Please Select
              </option>
              <option value="Business">Business</option>
              <option value="Economy">Economy</option>
            </select>
          </div>
        </div>

        <div className="button-submit">
          <button type="submit"> Book Now</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
