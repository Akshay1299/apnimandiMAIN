import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "30px", fontWeight: "800" }}>
        About Us
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://img.freepik.com/free-vector/onboarding-concept-illustration_114360-1334.jpg?w=740&t=st=1682532964~exp=1682533564~hmac=f39b2994e5709c321ddf10c81af3594bd3e2506c4034fb238c6320807d24fc3e"
          alt="grocery delivery illustration"
          style={{ width: "50%", maxWidth: "400px", marginRight: "20px" }}
        />
        <div
          style={{
            fontSize: "18px",
            lineHeight: "1.5",
            color: "#444",
          }}
        >
          Welcome to our online grocery delivery website! We are a team
          dedicated to providing you with the best grocery shopping experience
          from the comfort of your own home. We understand the hassle of going
          to the grocery store and waiting in long lines, and that's why we
          offer a convenient and reliable solution. With our easy-to-use
          platform, you can browse through a wide variety of products and have
          them delivered straight to your doorstep. Our team is committed to
          providing high-quality products at competitive prices. We work with
          local suppliers to ensure that you have access to fresh and healthy
          produce, meats, dairy, and other essential items. We value your time
          and strive to make the grocery shopping experience as effortless as
          possible. Whether you need to stock up on pantry staples or want to
          try out new recipes, our website has everything you need. Thank you
          for choosing us as your trusted grocery delivery service. We look
          forward to serving you and making your life easier.
        </div>
        
      </div>
      <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex",textAlign: "center", marginRight: "20px",justifyContent: "center" }}>
            <FaEnvelope size={30} style={{ marginBottom: "10px", paddingRight:"8px" }} />
            <p>apnimandiorg@gmail.com</p>
          </div>
          <div style={{display: "flex", textAlign: "center",justifyContent: "center", marginRight: "20px" }}>
            <FaPhone size={30} style={{ marginBottom: "10px" , paddingRight:"8px" }} />
            <p>+91 1245367890</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center",textAlign: "center" }}>
            <FaMapMarkerAlt size={30} style={{ marginBottom: "10px",  paddingRight:"12px" }} />
            <p>Admin Block,IIIT Lucknow, Ahmamau</p>
          </div>
        </div>
    </div>
  );
};

export default About;
