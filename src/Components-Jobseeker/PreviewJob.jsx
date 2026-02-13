import React from "react";
import { JHeader } from "./JHeader";
import { Footer } from "../Components-LandingPage/Footer";
import "./PreviewJob.css";

import {
  FaStar,
  FaClock,
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const PreviewJob = () => {
  return (
    <div className="preview-page">
      <JHeader />

      <div className="preview-container">
        <div className="preview-title-box">
          <h2 className="preview-title">Preview Job</h2>
        </div>

        <div className="job-card">
          <div className="job-card-top">
            <div>
              <h2 className="job-title">UX/UI Designer</h2>

              <div className="inline-row">
                <span>Wipro</span>
                <div className="v-divider"></div>
                <FaStar className="star-icon" />
                <span>4.3</span>
                <div className="v-divider"></div>
                <span>55k+ reviews</span>
              </div>

              <div className="inline-row">
                <FaClock className="row-icon" />
                <span>3 months training</span>
                <div className="v-divider"></div>
                <span>₹ 20,000 - 25,000/month</span>
              </div>

              <div className="inline-row">
                <FaBriefcase className="row-icon" />
                <span>2 to 3 years of experience</span>
              </div>

              <div className="inline-row">
                <FaMapMarkerAlt className="row-icon" />
                <span>Chennai</span>
              </div>
            </div>

            <div className="company-logo">W</div>
          </div>

          <div className="job-bottom-row">
            <span className="job-type">Full-Time</span>
            <span className="suggest-role">
              Suggest more roles like this
            </span>
          </div>

          <div className="horizontal-divider"></div>

          <div className="job-meta-footer">
            <span>Posted: 3 days ago</span>
            <div className="v-divider"></div>
            <span>Openings: 2</span>
            <div className="v-divider"></div>
            <span>Applicants: 100+</span>
          </div>
        </div>

        <div className="details-card">
          <div className="highlight-box">
            <h4>Job highlights</h4>
            <ul>
              <li>Candidates With 2 To 3 Years Of Relevant Experience Preferred.</li>
              <li>Proven Work Experience (2+ Years) As A UI/UX Designer Or In A Similar Role.</li>
              <li>Strong Communication Skills</li>
            </ul>
          </div>

          <div className="section">
            <h3>Company Overview</h3>
            <p>
              Driving Digital Transformation With Innovation And Intelligence.
              Founded In 1945, Wipro Is A Leading Global Information Technology Company.
              With Presence In Over 60 Countries.
            </p>
          </div>

          <div className="section">
            <h3>Job description</h3>
            <p>
              We Are Looking For A Talented UI/UX Designer With 2 To 3 Years Of
              Professional Experience To Join Our Growing Team.
            </p>
          </div>

          <div className="section">
            <h3>Responsibilities</h3>
            <ul>
              <li>Create Wireframes And Prototypes</li>
              <li>Conduct User Research</li>
              <li>Ensure Design Consistency Across Platforms</li>
              <li>Collaborate With Product Teams</li>
            </ul>
          </div>

          <div className="info-block">
            <p><strong>Role:</strong> UI/UX Designer</p>
            <p><strong>Industry Type:</strong> IT Services</p>
            <p><strong>Department:</strong> Design</p>
            <p><strong>Job Type:</strong> Full-Time</p>
            <p><strong>Experience Level:</strong> 2 to 3 years</p>
            <p><strong>Location:</strong> Chennai</p>
          </div>

          <div className="section">
            <h3>Key Skills</h3>
            <div className="skills">
              <span>user research</span>
              <span>user flow</span>
              <span>ux</span>
              <span>figma</span>
              <span>wireframe</span>
              <span>problem solving</span>
            </div>
          </div>

          <div className="bottom-divider"></div>

          <div className="bottom-row">
            <div className="share-section">
              <span className="share-label">Share this job</span>

              <div className="share-icons">
                <div className="social-icon linkedin">
                  <FaLinkedinIn />
                </div>

                <div className="social-icon facebook">
                  <FaFacebookF />
                </div>

                <div className="social-icon twitter">
                  <FaXTwitter />
                </div>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-outline">Cancel</button>
              <button className="btn-primary">Post</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PreviewJob;
