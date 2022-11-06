import "./App.css";
import React, { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { BiRightArrow } from "react-icons/bi";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section>
        <h1>
          <ThreeCircles
            height="100"
            width="100"
            color="black"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </h1>
      </section>
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
                className={`btn ${index === value && "btn-active"}`}
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
                <div className="duty-wrap">
                  <BiRightArrow className="svg" />
                  <p className="duty" key={index}>
                    {duty}
                  </p>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}

export default App;
