import { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleTab, setToggleTab] = useState(0);
  const toggleTabIndex = (index) => {
    setToggleTab(index);
  };
  return (
    <section className="section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleTab === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTabIndex(1)}
          >
            <i className="uil uil-graduation-cap quailifcation__icon"></i>
            Education
          </div>
          <div
            className={
              toggleTab === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTabIndex(2)}
          >
            <i className="uil uil-briefcase-alt quailifcation__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__section">
          <div
            className={
              toggleTab === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Website Design </h3>
                <span className="qualifcation__subtile">Span - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> Art Director </h3>
                <span className="qualification__subtitle">
                  Span - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Website Design </h3>
                <span className="qualification__subtitle">
                  Span - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleTab === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> Experience </h3>
                <span className="qualification__subtitle">
                  Span - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Experience
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Experience Art Director{" "}
                </h3>
                <span className="qualification__subtitle">
                  Span - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Experience
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Website Experience Design
                </h3>
                <span className="qualification__subtitle">
                  Span - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Experience - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Qualifications;
