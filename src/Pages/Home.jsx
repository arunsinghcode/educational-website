import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">

        <h4 className="welcome-text">Welcome to Education4All</h4>

        <h1>
          Unlock Your Potential <br />
          with <span>Quality Education</span>
        </h1>

        <p>
          Explore top courses and enhance your skills with us
        </p>

        <div className="search-box">
          <input type="text" placeholder="What do you want to learn?" />
          <button>Get Started</button>
        </div>

      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="feature-card">📚 Find Courses</div>
        <div className="feature-card">👨‍🏫 Expert Teachers</div>
        <div className="feature-card">🎓 Get Certifications</div>
      </div>

      {/* ===== MODES WE TRAIN ===== */}
      <div className="modes-section">

        <h2>Modes We Train</h2>

        <div className="modes-container">

          <div className="mode-card">
            <div className="mode-icon">👨‍🏫</div>
            <h3>Offline Classes</h3>
            <p>
              Offline classes involve face-to-face interaction,
              structured schedules, hands-on learning.
            </p>
          </div>

          <div className="mode-card">
            <div className="mode-icon">💻</div>
            <h3>Online Live Classes</h3>
            <p>
              Online classes provide remote learning flexibility
              through digital platforms.
            </p>
          </div>

        </div>

      </div>

      {/* ===== BRANCHES ===== */}
      <div className="branches-section">

        <h2>Our Offline Branches</h2>

        

        <div className="branches-grid">

          {[
            "Bengaluru",
            "Hyderabad",
            "Chennai",
            "Pune",
            "Mumbai",
            "Noida",
            "Mysore",
            "Gurugram",
            "Bhubaneswar",
            "Kolkata",
            "Ahmedabad",
            "Delhi"
          ].map((city, index) => (
            <div className="branch-card" key={index}>
              <h3>{city}</h3>
              <p>Branches</p>
            </div>
          ))}

        </div>


      </div>

    </div>
  );
}

export default Home;