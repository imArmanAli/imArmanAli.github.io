import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo, isHireable } from "../../portfolio";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";

export default function GithubProfileCard({ prof }) {
  if (isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">{contactInfo.title}</h1>

        <div className="row">
          {/* LEFT SIDE: Text Info */}
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>

            <h2 className="bio-text">{emoji(`"${contactInfo.bio}"`)}</h2>

            {/* Location */}
            <div className="location-div">
              <span className="desc-prof">
                📍 Location: {prof.location || contactInfo.location}
              </span>
            </div>

            {/* Open to opportunities */}
            <div className="opp-div">
              <span className="desc-prof">
                🚀 Open for opportunities: {prof.hireable}
              </span>
            </div>

            {/* Contact Info */}
            <div className="contact-info-div">
              {contactInfo.number && (
                <p className="desc-prof">
                  {" "}
                  <a className="contact-detail" href={"tel:" + contactInfo.number}>
                    {contactInfo.number}
                  </a>
                </p>
              )}
              {contactInfo.email_address && (
                <p className="desc-prof">
                  {" "}
                  <a
                    className="contact-detail-email"
                    href={"mailto:" + contactInfo.email_address}
                  >
                    {contactInfo.email_address}
                  </a>
                </p>
              )}
            </div>

            <SocialMedia />
          </div>

          {/* RIGHT SIDE: Avatar Image */}
          <div className="image-content-profile">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
