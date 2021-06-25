import React from "react";
import "./about.css";

const About = () => {
  function renderIntroduction() {
    return (
      <article className="description-about">
        <h2 className="about-header-text-h2">O nas</h2>
        Jesteśmy grupą studentów studiów podyplomowych na Politechnice
        Poznańskiej, których połączyła pasja do nauki i technologii.
        <br /> <br />
        What Year Is Now? (WYIN) to aplikacja open-source, dzięki której
        odkrywanie historii świata staje się jeszcze ciekawsze.
        <h3 className="about-header-text-h3">Kontakt</h3>
        Jeżeli masz pytania, sugestie bądź wykryłeś błąd,&nbsp;
        <a
          rel="noreferrer"
          href="https://gitlab.com/spio-wyin/wyin-fe-webapp/-/issues"
          target="_blank"
          className="about-link"
        >
          skontaktuj się z nami.
        </a>
      </article>
    );
  }

  function renderTeamInfo() {
    return (
      <article className="description-about">
        <h3 className="about-header-text-h3">Zespół WYIN</h3>
        <ul className="about-list align-text-left">
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/listewnik/"
              target="_blank"
              className="about-link"
            >
              Mariusz Listewnik
            </a>
             - pomysłodawca i Product Owner aplikacji
          </li>
          <br />
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/karolina-kolyszko/"
              target="_blank"
              className="about-link"
            >
              Karolina Kołyszko
            </a>{" "}
             - analityk dbający o wymagania projektowe, spójną wizję i atmosferę w projekcie
          </li>{" "}
          <br />
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/%C5%82ukasz-mielczarek-6282aa214/"
              target="_blank"
              className="about-link"
            >
              Łukasz Mielczarek
            </a>{" "}
             - frontend developer z wizją, ogromną pasją i entuzjazmem
          </li>
          <br />
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/leszek-d%C4%85bek-226ba41b3/"
              target="_blank"
              className="about-link"
            >
              Leszek Dąbek
            </a>{" "}
             - tester automatyczny dbający o jakość aplikacji
          </li>
          <br />
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/robert-marecki/"
              target="_blank"
              className="about-link"
            >
              Robert Marecki
            </a>
              - tester manualny dostrzegający najdrobniejsze szczegóły
          </li>
          <br />
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/9a177d16f0768546609dd8c813508e3c36a8cd1ada6bfb9f77168bae5d0e0b39/"
              target="_blank"
              className="about-link"
            >
              Jakub Kołodziejczak
            </a>{" "}
             - techniczny guru projektu
          </li>
          <br />
        </ul>
      </article>
    );
  }

  return (
    <section className="main-container">
      <article className="about-content-container-mobile mobile-element">
        <div className="description-container-about">
          {renderIntroduction()}
        </div>
        <div className="description-container-about border-top">
          {renderTeamInfo()}
        </div>
      </article>
      <article className="about-content-container-desktop desktop-element">
        <div className="description-container-about">
          {renderIntroduction()}
        </div>
        <div className="description-container-about border-left">
          {renderTeamInfo()}
        </div>
      </article>
    </section>
  );
};

export default About;
