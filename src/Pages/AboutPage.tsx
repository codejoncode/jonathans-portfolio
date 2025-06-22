import React from "react";

const AboutPage = () => {
  return (
    <section id="about" className="container py-5">
      <h2 className="mb-4">About Me</h2>
      <p>
        Before I ever touched a line of professional code, I was solving
        problems—real ones. Working odd jobs to support my family, I found
        myself automating spreadsheets, organizing workflows, and optimizing
        everyday tasks with Excel. That hunger to solve things better is what
        led me to programming. Through online courses on Codecademy, Alison, and
        YouTube, I discovered a world where creativity and logic intersected. I
        taught myself Python for data analysis, dove into JavaScript, and built
        tools to make life—and work—more efficient. I didn’t come from a
        traditional CS background, but I learned how to teach myself, how to
        troubleshoot, and how to keep going when the docs didn’t make sense at 2
        AM. My early tech roles weren’t glamorous, but they taught me how to
        think. From customer service to quality assurance, I learned how to
        really listen, how to explain complex things clearly, and how to build
        systems that support people. I studied network security, SEO, and
        project management—not for a certificate on the wall, but because each
        piece helped me sharpen my skills. Today, I’m a full-stack developer and
        technical problem solver. But more than that, I’m someone who’s built
        this career with purpose. I believe that great software starts with
        empathy, that clarity beats cleverness, and that learning never stops.
      </p>
      <section className="container py-5" id="timeline">
        <h2 className="text-center mb-5">My Journey</h2>

        <div className="timeline position-relative">

        {/* Started Coding */}
          <div className="timeline-item mb-5">
            <div className="d-flex">
              <div className="timeline-icon bg-primary text-white me-4 p-3 rounded-circle">
                💡
              </div>
              <div>
                <h5>Discovered Code</h5>
                <p className="mb-1 text-muted">September 2014</p>
                <img
                  src="/codecademy_begining.jpg"
                  alt="Early Resume"
                  className="img-fluid rounded"
                  style={{ maxWidth: "400px" }}
                />
                <p>
                  Taught myself Python and JavaScript using Codecademy, while
                  juggling jobs to support my family. I would work 40 hours a week plus an 
                  additional 20 hours learning various languages. 
                </p>
              </div>
            </div>
          </div>

          {/* Pre-Coding Resume */}
          <div className="timeline-item mb-5">
            <div className="d-flex">
              <div className="timeline-icon bg-secondary text-white me-4 p-3 rounded-circle">
                📄
              </div>
              <div>
                <h5>Before Tech – Resume Snapshot</h5>
                <p className="mb-1 text-muted">Up to Sept 2014</p>
                <img
                  src="/Before Professional Coding Experience.jpg"
                  alt="Early Resume"
                  className="img-fluid rounded"
                  style={{ maxWidth: "400px" }}
                />
                <img
                  src="/Before Professional Coding Experience2.jpg"
                  alt="Early Resume"
                  className="img-fluid rounded"
                  style={{ maxWidth: "400px" }}
                />
                <p className="mt-2">
                  Experience in QA, customer service, and data workflows—this is
                  where my problem-solving mindset was born.
                </p>
              </div>
            </div>
          </div>
          {/* Bloom Institute */}
          <div className="timeline-item mb-5">
            <div className="d-flex">
              <div className="timeline-icon bg-success text-white me-4 p-3 rounded-circle">
                🎓
              </div>
              <div>
                <h5>Graduated Bloom Institute of Technology</h5>
                <p className="mb-1 text-muted">2019</p>
                <img
                  src="/After Lambda School.jpg"
                  alt="Current Resume"
                  className="img-fluid rounded"
                  style={{ maxWidth: "400px" }}
                />
                <p>
                  All of the projects here except the events app was built while learning at Bloom Institute of Technology.
                  I would also add during the same time I built a Sudoku app, Calendar app, emulator and C and several other projects
                  that are not listed on this resume. 
                </p>
              </div>
            </div>
          </div>

          {/* Modern Resume + Projects */}
          <div className="timeline-item">
            <div className="d-flex">
              <div className="timeline-icon bg-dark text-white me-4 p-3 rounded-circle">
                🚀
              </div>
              <div>
                <h5>Today</h5>
                <p className="mb-1 text-muted">2025</p>
                <img
                  src="/After Lambda"
                  alt="Current Resume"
                  className="img-fluid rounded"
                  style={{ maxWidth: "400px" }}
                />
                <p>
                  Delivering impactful software, contributing to real-world
                  projects, and always learning.{" "}
                  <a href="#projects">See recent projects</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutPage;
