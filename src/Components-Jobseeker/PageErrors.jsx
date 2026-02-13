import React from "react";
import { JHeader } from "./JHeader";
import { Footer } from "../Components-LandingPage/Footer";
import "./TechnicalIssues.css";
import PageErrorsImage from "../assets/page-errors.png";

export default function PageErrors() {

  const pageErrorsData = {
    intro:
      "Below are the most common page-related errors users may experience on the job portal along with their root causes.",

    sections: [
      {
        title: "Job Not Found",
        why: "The job you are trying to view is no longer available.",
        root: "The employer may have removed the job, the job posting may have expired, or the link is outdated."
      },
      {
        title: "Page Not Loading",
        why: "The page takes too long to load or does not open.",
        root: "Slow internet connection, temporary server issue, or high traffic on the platform."
      },
      {
        title: "Blank Screen After Login",
        why: "The dashboard or profile page appears empty.",
        root: "Temporary system issue, incomplete page loading, or session interruption."
      },
      {
        title: "Search Results Not Showing",
        why: "No jobs appear after performing a search.",
        root: "Filters may be too restrictive, no jobs match your criteria, or a temporary search system issue."
      },
      {
        title: "Apply Button Not Responding",
        why: "Clicking the Apply button does not proceed.",
        root: "You may not be logged in, your session may have expired, or the job is no longer accepting applications."
      },
      {
        title: "Profile Changes Not Saving",
        why: "Updates made to your profile do not reflect after saving.",
        root: "Temporary system delay, internet disruption during saving, or incomplete required fields."
      },
      {
        title: "Access Denied Message",
        why: "You are unable to access a specific page.",
        root: "You may not have permission to view that page or your login session has expired."
      },
      {
        title: "Session Expired",
        why: "You are automatically logged out while browsing.",
        root: "Sessions expire after a period of inactivity for security reasons."
      },
      {
        title: "Something Went Wrong Message",
        why: "A general error message appears without details.",
        root: "Temporary technical issue within the platform requiring refresh or retry."
      },
      {
        title: "File or Image Not Displaying",
        why: "Profile pictures, logos, or documents are not visible.",
        root: "Temporary loading issue, browser cache problem, or unsupported file format."
      }
    ]
  };

  return (
    <div className="loginissues-page">
      <JHeader />

      <div className="loginissues-container">

        <h1 className="loginissues-title">
          Job Portal - Common Page Errors & Root Causes
        </h1>

        <p className="loginissues-intro">
          {pageErrorsData.intro}
        </p>

        {/* Hero Image */}
        <div className="loginissues-hero">
          <img
            src={PageErrorsImage}
            alt="Page Errors Help"
            className="loginissues-hero-img"
          />
        </div>

        <div className="loginissues-content">
          {pageErrorsData.sections.map((section, index) => (
            <div key={index} className="loginissues-section">
              <h2>{section.title}</h2>

              <ul className="issue-list">
                <li>
                  <span className="label">Why this error appears:</span> {section.why}
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
