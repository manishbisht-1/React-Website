import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `my name is : ${data.fullname}, my ph. no is ${data.phone}, my email is ${data.email},and my message is :${data.msg}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="" className="form_label">
                  Enter full name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sdd"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label for="" className="form_label">
                  Contact No.
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="sdd"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter you contact no."
                />
              </div>
              <div className="mb-3">
                <label for="" className="form_label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="sdd"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your email-address"
                />
              </div>

              <div className="mb-3">
                <label for="" className="form_label">
                  Message here.
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  id="dsds"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
