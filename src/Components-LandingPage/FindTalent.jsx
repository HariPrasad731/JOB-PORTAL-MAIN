import React from "react"
import "./FindTalent.css"
import { JHeader } from "../Components-Jobseeker/JHeader"
import { Footer } from "./Footer"

function FindTalent() {
  return (
    <>
      <JHeader />

      <div className="findtalent-wrapper">

        {/* Header Section */}
        <div className="findtalent-top">
          <h1>Discover Top Talent</h1>
          <p>Search, filter and connect with professionals ready to work.</p>
        </div>

        {/* Search Bar */}
        <div className="findtalent-searchbar">
          <input type="text" placeholder="Search by skills, role, or keyword" />
          <input type="text" placeholder="Location" />
          <button>Search</button>
        </div>

        <div className="findtalent-content">

          {/* Sidebar Filters */}
          <div className="findtalent-sidebar">
            <h3>Filters</h3>
            <label>
              <input type="checkbox" /> 0-2 Years
            </label>
            <label>
              <input type="checkbox" /> 3-5 Years
            </label>
            <label>
              <input type="checkbox" /> 5+ Years
            </label>
            <label>
              <input type="checkbox" /> Available Immediately
            </label>
          </div>

          {/* Talent List */}
          <div className="findtalent-list">

            <div className="talent-card">
              <div className="talent-avatar">AK</div>
              <div>
                <h3>Arjun Kumar</h3>
                <p>Frontend Developer • 3 Years Experience</p>
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Tailwind</span>
              </div>
            </div>

            <div className="talent-card">
              <div className="talent-avatar">PS</div>
              <div>
                <h3>Priya Sharma</h3>
                <p>UI/UX Designer • 5 Years Experience</p>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Design Systems</span>
              </div>
            </div>

            <div className="talent-card">
              <div className="talent-avatar">RV</div>
              <div>
                <h3>Rahul Verma</h3>
                <p>Full Stack Developer • 4 Years Experience</p>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">React</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default FindTalent
