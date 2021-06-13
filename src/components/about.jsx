import React from "react";
import "./about.css";

const About = () => {
  return (
    <article className="description-container">
      <p className=" about-text">
        Jesteśmy grupą studentów studiów podyplomowych na Politechnice
        Poznańskiej, których połączyła pasja do nauki i technologii.
        <br /> <br />
        What Year Is Now? (WYIN) to aplikacja open-source, dzięki której
        odkrywanie historii świata przestaje być nudne.
        <br />
        <br />
        Zespół WYIN <br />
        <ul>
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/listewnik/"
              target="_blank"
            >
              Mariusz Listewnik
            </a>
             - pomysłodawca i Product Owner aplikacji
          </li>
          <br />
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/9a177d16f0768546609dd8c813508e3c36a8cd1ada6bfb9f77168bae5d0e0b39/"
              target="_blank"
            >
              Jakub Kołodziejczak
            </a>{" "}
             - techniczny guru projektu
          </li>{" "}
          <br />
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/%C5%82ukasz-mielczarek-6282aa214/"
              target="_blank"
            >
              Łukasz Mielczarek
            </a>{" "}
             - frontend developer z niesamowitymi umiejętnościami dbający o
            estetykę aplikacji
          </li>
          <br />
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/leszek-d%C4%85bek-226ba41b3/"
              target="_blank"
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
            >
              Robert Marecki
            </a>
              - tester manualny dostrzegający najdrobniejsze szczegóły
          </li>
          <br />
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/karolina-kolyszko/"
              target="_blank"
            >
              Karolina Kołyszko
            </a>{" "}
             - analityk dbający o całokształt i atmosferę w projekcie
          </li>
          <br />
        </ul>
        Kontakt
        <br />
        <br /> Jeżeli masz pytania, sugestie bądź wykryłeś błąd, skontaktuj się
        z nami - 
        <a
          rel="noreferrer"
          href="https://gitlab.com/spio-wyin/wyin-fe-webapp/-/issues"
          target="_blank"
        >
          Gitlab
        </a>
      </p>
    </article>
  );
};

export default About;
