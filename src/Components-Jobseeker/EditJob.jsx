import React, { useState, useRef, useEffect } from "react";
import "./EditJob.css";
import { Footer } from "../Components-LandingPage/Footer";

const CustomMultiSelect = ({ options, placeholder, isExperience = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-select-container" ref={dropdownRef}>
      <div 
        className={`custom-select-header ${isOpen ? "active" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="placeholder-text">{placeholder}</span>
        <i className={`fas fa-chevron-down single-arrow ${isOpen ? "rotate" : ""}`}></i>
      </div>

      {isOpen && (
        <div className={`custom-dropdown-overlay ${isExperience ? "experience-grid" : "education-grid"}`}>
          <div className="grid-content">
            {options.map((option, index) => (
              <label key={index} className="checkbox-item">
                <input type="checkbox" className="custom-checkbox" />
                <span className="option-label">{option}</span>
              </label>
            ))}
            
            {isExperience && (
              <div className="experience-extra-input">
                <span className="extra-label">For {">"}20 years</span>
                <input type="text" placeholder="Enter experience" className="manual-exp-input" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default function EditJob() {
  const educationOptions = [
    "M.Tech (301)", "B.Sc (132)", "ITI Certification (2)", "MCA (280)", "BS (2)", 
    "Bachelor Of Science (B.Sc.) In Business Economics (2)", "MBA/PGDM (136)", 
    "B.Tech/B.E. (1865)", "Any Graduate (4607)", "MS/M.Sc (Science) (134)", 
    "BCA (119)", "Any Postgraduate (4541)", "LLM (70)", "Diploma (34)", 
    "Graduation Not Required (25)", "CA (28)", "B.B.A/ B.M.S (27)", 
    "Post Graduation Not Required (50)", "PG Diploma (21)", "B.A (23)", 
    "Other Post Graduate (8)", "Medical-MS/MD (10)", "B.Com (15)", "B.Ed (2)", "M.Com (6)"
  ];

  const experienceOptions = [
    "Fresher", "1 Year", "2 Years", "3 Years", "4 Years", "5 Years", "6 Years",
    "7 Years", "8 Years", "9 Years", "10 Years", "11 Years", "12 Years", "13 Years",
    "14 Years", "15 Years", "16 Years", "17 Years", "18 Years", "19 Years", "20 Years"
  ];

  return (
    <>
      <div className="edit-job-page">
        <div className="edit-job-wrapper">
          <h1 className="title">Edit a Job</h1>
          <p className="subtitle">Complete the steps below to reach thousands of qualified candidates</p>

          <div className="form-card">
            <div className="row">
              <label>Job title</label>
              <input placeholder="e.g., Fullstack Developer" className="standard-input" />
            </div>

            <div className="row">
              <label>Category/Department</label>
              <div className="custom-select-container">
                <div className="custom-select-header">
                  <span className="placeholder-text">Select</span>
                  <i className="fas fa-chevron-down single-arrow"></i>
                </div>
              </div>
            </div>

            <div className="row">
              <label>Experience</label>
              <CustomMultiSelect options={experienceOptions} placeholder="Select" isExperience={true} />
            </div>

            <div className="row">
              <label>Education</label>
              <CustomMultiSelect options={educationOptions} placeholder="Select" />
            </div>

            <div className="row">
              <label>Key skills</label>
              <input placeholder="Type a skill (e.g., React, Node.js, etc)" className="standard-input" />
            </div>

            <div className="row">
              <label>Industry</label>
              <input 
                placeholder="Information Technology & Services / Digital Product Design" 
                className="standard-input" 
              />
            </div>

            <div className="row">
              <label>Job type</label>
              <div className="field-card radio-card">
                <div className="job-type-group">
                  <label className="job-option"><input type="radio" name="jobType" /> <span>Full time</span></label>
                  <label className="job-option"><input type="radio" name="jobType" /> <span>Part time</span></label>
                  <label className="job-option"><input type="radio" name="jobType" /> <span>Remote</span></label>
                </div>
              </div>
            </div>

            <div className="row">
              <label>Salary</label>
              <div className="field-card">
                <div className="from-to">
                  <span>From</span><input className="small-input" />
                  <span>To</span><input className="small-input" />
                </div>
              </div>
            </div>

            <div className="row">
              <label>Location</label>
              <div className="field-card">
                <div className="location-grid">
                  <div className="location-item"><span>City</span><input className="loc-input" /></div>
                  <div className="location-item"><span>State</span><input className="loc-input" /></div>
                  <div className="location-item"><span>Country</span><input className="loc-input" /></div>
                  <div className="location-item"><span>Pin</span><input className="loc-input" /></div>
                </div>
              </div>
            </div>

            <div className="row">
              <label>Training period</label>
              <div className="field-card">
                <div className="from-to">
                  <span>From</span><input className="small-input" />
                  <span>To</span><input className="small-input" />
                </div>
              </div>
            </div>

            <div className="row">
              <label>Vacancy duration</label>
              <div className="field-card">
                <div className="from-to">
                  <span>From</span><input className="small-input" />
                  <span>To</span><input className="small-input" />
                </div>
              </div>
            </div>

            <div className="row description-row">
              <label>Job description</label>
              <textarea placeholder="Describe the role, responsibilities, requirements, and what makes this opportunity unique..." />
            </div>
          </div>

          <div className="buttons">
            <button className="btn cancel-btn">Cancel</button>
            <button className="btn preview-btn">Preview</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}