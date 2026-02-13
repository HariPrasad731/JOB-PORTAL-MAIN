import React from "react";
import { JHeader } from "./JHeader";
import { Footer } from "../Components-LandingPage/Footer";
import "./TechnicalIssues.css";
import FileUploadImage from "../assets/file-upload-error.png";

export default function FileUploadProblems() {

  const fileUploadData = {
    intro:
      "Below are the most common file upload related issues users may experience on the job portal along with their root causes.",

    sections: [
      {
        title: "Resume Upload Fails",
        why: "Your resume does not upload successfully.",
        root: "The file format may not be supported, the file size may exceed the limit, or the internet connection may be unstable."
      },
      {
        title: "File Format Not Supported",
        why: "The system displays an unsupported file format message.",
        root: "The uploaded file is not in an accepted format such as PDF or DOCX."
      },
      {
        title: "File Size Too Large",
        why: "The upload is rejected due to size restrictions.",
        root: "The document exceeds the maximum file size allowed by the platform."
      },
      {
        title: "Upload Stuck at Processing",
        why: "The upload bar does not complete or remains stuck.",
        root: "Slow internet connection, temporary server delay, or interrupted upload process."
      },
      {
        title: "Profile Picture Not Updating",
        why: "The new profile image does not appear after upload.",
        root: "Unsupported image format, caching issue, or incomplete upload."
      },
      {
        title: "Document Preview Not Visible",
        why: "The uploaded document cannot be previewed.",
        root: "Corrupted file, unsupported format, or temporary display issue."
      },
      {
        title: "Multiple File Upload Error",
        why: "The system does not allow uploading more than one document.",
        root: "Platform restrictions allowing only one resume or document at a time."
      },
      {
        title: "Upload Button Not Responding",
        why: "Clicking the upload button does nothing.",
        root: "Browser issue, disabled scripts, or temporary system error."
      },
      {
        title: "File Removed Automatically",
        why: "The uploaded file disappears.",
        root: "File validation failure, unsupported format, or system refresh interruption."
      },
      {
        title: "Permission Denied During Upload",
        why: "The upload is blocked by device or browser.",
        root: "Storage permission not granted or browser security settings preventing upload."
      }
    ]
  };

  return (
    <div className="loginissues-page">
      <JHeader />

      <div className="loginissues-container">

        <h1 className="loginissues-title">
          Job Portal - File Upload Problems & Root Causes
        </h1>

        <p className="loginissues-intro">
          {fileUploadData.intro}
        </p>

        {/* Hero Image */}
        <div className="loginissues-hero">
          <img
            src={FileUploadImage}
            alt="File Upload Help"
            className="loginissues-hero-img"
          />
        </div>

        <div className="loginissues-content">
          {fileUploadData.sections.map((section, index) => (
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
