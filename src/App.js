import "./App.css";
import React, { useState, useEffect } from "react";
import { BiRightArrow } from "react-icons/bi";
import Loading from "./Loading";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setTimeout(() => setLoading(false), 500);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <main className="loading">
        <Loading />
      </main>
    );
  }

  const { title, dates, duties, company } = jobs[value];

  return (
    <section className="section">
      <div>
        <h1 className="title">Experience</h1>
        <div className="underline" />
      </div>
      <div className="section-jobs">
        <div className="buttons">
          {jobs.map((job, index) => {
            return (
              <button
                className={`btn-company ${
                  index === value && "btn-company-active"
                }`}
                key={job.id}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <article>
          <div className="summary">
            <h4 className="jobtitle">{title}</h4>
            <h4 className="company">{company}</h4>
            <p className="dates">{dates}</p>
          </div>
          <div className="text">
            {duties.map((duty, index) => {
              return (
                <div className="duty-wrap" key={index}>
                  <BiRightArrow className="svg" />
                  <p className="duty">{duty}</p>
                </div>
              );
            })}
          </div>
        </article>
      </div>
      <button className="btn">More info</button>
    </section>
  );
}

export default App;
