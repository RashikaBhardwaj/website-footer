import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mainFooter">
        <div className="firstFooter">
          <h3 className="Footer"> <strong>Laxmi Devi Institute of<br /> Engineering & Technology</strong></h3>
          <p className="para">Alwar-Tijara-Delhibrb <br />Highway<br />Chikani, Alwar, <br />Rajasthan<br />India –  301028</p>
          <p className="Footer">+91-7073477274</p>
          <p className="Footer">+91-9829103101</p>
          <p className="para">director@lietalwar.org</p>
        </div>
        <div className="secondFooter">
          <h3 className="heading">Quick Links</h3>
          <p><a href="">About us</a></p>
          <p><a href="">Admission</a></p>
          <p><a href="">Apply @ LIET</a></p>
          <p><a href="">Board of Management</a></p>
          <p><a href="">Grievance Redressal</a></p>
        </div>
        <div className="thirdFooter">
          <h3 className="heading">Courses</h3>
          <p><a href="">B. Tech.</a></p>
          <p><a href="">M. Tech.</a> </p>
          <p><a href="">MBA</a></p>
          <p><a href="">Polytechnic</a> </p>
        </div>
        <div className="fourthFooter">
          <h3 className="heading">External Links</h3>
          <p><a href="">AICTE</a></p>
          <p><a href="">BTU</a></p>
          <p><a href="">BTER</a></p>
          <p><a href="">DELNET</a></p>
        </div>
      </div>
    </>
  );
}
