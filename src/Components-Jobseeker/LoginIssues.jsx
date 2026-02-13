import React from "react";
import { JHeader } from "./JHeader";
import { Footer } from "../Components-LandingPage/Footer";
import "./TechnicalIssues.css";
import LoginHelpImage from "../assets/login-help.png";

export default function LoginIssues() {

  const loginIssuesData = {
    intro:
      "Below are the most common login-related issues users experience on job portals along with their root causes.",

    sections: [
      {
        title: "Incorrect Email or Password",
        why: "User cannot log in despite entering credentials.",
        root: "Typing errors, incorrect password, changed password not remembered, or using an unregistered email ID."
      },
      {
        title: "Account Not Verified",
        why: "User signs up but cannot log in.",
        root: "Email verification link not clicked, verification link expired, or incorrect email entered during registration."
      },
      {
        title: "Account Locked",
        why: "Account temporarily locked after failed attempts.",
        root: "Multiple failed login attempts triggering security protection."
      },
      {
        title: "OTP Not Received",
        why: "User does not receive OTP during login.",
        root: "Network delay, incorrect mobile number, SMS blocked, or temporary delivery failure."
      },
      {
        title: "Social Login Failure",
        why: "Login via Google or LinkedIn fails.",
        root: "Browser pop-up blocked, social account not verified, or login session interrupted."
      },
      {
        title: "Session Expired Automatically",
        why: "User gets logged out unexpectedly.",
        root: "Security session timeout due to inactivity or login from another device."
      },
      {
        title: "Access Denied After Login",
        why: "User logs in but cannot access certain pages.",
        root: "Role mismatch, incomplete profile, or account restriction."
      },
      {
        title: "Login Button Not Responding",
        why: "Clicking login does nothing.",
        root: "Slow internet connection, browser issue, or temporary system error."
      },
      {
        title: "Multiple Account Confusion",
        why: "System indicates account already exists.",
        root: "Account previously created using a different login method."
      },
      {
        title: "Suspicious Activity Detected",
        why: "Additional verification requested during login.",
        root: "Login attempt from new device, unusual location, or security monitoring triggered."
      }
    ]
  };

  return (
    <div className="loginissues-page">
      <JHeader />

      <div className="loginissues-container">

        <h1 className="loginissues-title">
          Job Portal - Common Login Issues & Root Causes
        </h1>

        <p className="loginissues-intro">
          {loginIssuesData.intro}
        </p>

        {/* HERO IMAGE */}
        <div className="loginissues-hero">
          <img
            src={LoginHelpImage}
            alt="Login Issues Help"
            className="loginissues-hero-img"
          />
        </div>

        <div className="loginissues-content">
          {loginIssuesData.sections.map((section, index) => (
            <div key={index} className="loginissues-section">
              <h2>{section.title}</h2>

              <ul className="issue-list">
                <li>
                  <span className="label">Why this happens:</span> {section.why}
                </li>
                <li>
                  <span className="label">Root Cause:</span> {section.root}
                </li>
              </ul>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}
