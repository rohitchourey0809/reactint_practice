import React, { useState } from "react";

const GradingSystemReact = () => {
  const [scoredata, Setscoredata] = useState({
    eng: "",
    mat: "",
    phy: "",
    comp: "",
    sci: "",
  });
  console.log(scoredata);

  const [Total, SetTotal] = useState("");
  const [Average, SetAverage] = useState("");
  const [Grade, SetGrade] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    Setscoredata({ ...scoredata, [id]: value });
  };

  const TOTAL = () => {
    console.log("clicked");
    var total =
      +scoredata.eng +
      +scoredata.mat +
      +scoredata.comp +
      +scoredata.phy +
      +scoredata.sci;

    SetTotal(total);
  };
  const AVERAGE = () => {
    console.log("clicked");
    var total =
      +scoredata.eng +
      +scoredata.mat +
      +scoredata.comp +
      +scoredata.phy +
      +scoredata.sci;

    const average = total / 5;
    SetAverage(average);
  };

  const GRADE = () => {
    console.log("clicked");
    var total =
      +scoredata.eng +
      +scoredata.mat +
      +scoredata.comp +
      +scoredata.phy +
      +scoredata.sci;

    const average = total / 5;
    if (average >= 80 && average <= 100) {
      var gra = "your grade A";
      SetGrade(gra);
    } else if (average >= 75 && average <= 80) {
     gra = "your grade A";
      SetGrade(gra);
    } else if (average >= 70 && average <= 75) {
       gra = "your grade B";
      SetGrade(gra);
    } else if (average >= 65 && average <= 70) {
       gra = "your grade C+";
      SetGrade(gra);
    } else if (average >= 60 && average <= 65) {
       gra = "your grade C";
      SetGrade(gra);
    } else if (average >= 50 && average <= 60) {
       gra = "your grade D";
      SetGrade(gra);
    } else {
      var gra = "your grade F";
      SetGrade(gra);
    }
  };

  console.log(Total);
  return (
    <>
      <div>
        <div id="main">
          <div id="head">
            <h2>Grading System</h2>
            <label>English</label>
            <input
              onChange={handleChange}
              value={scoredata.eng}
              type="text"
              id="eng"
            />
            <br />
            <label>Maths</label>
            <input
              onChange={handleChange}
              value={scoredata.mat}
              type="text"
              id="mat"
            />
            <br />
            <label>Physics</label>
            <input
              onChange={handleChange}
              value={scoredata.phy}
              type="text"
              id="phy"
            />
            <br />
            <label>Computer</label>
            <input
              onChange={handleChange}
              value={scoredata.comp}
              type="text"
              id="comp"
            />
            <br />
            <label>Science</label>
            <input
              onChange={handleChange}
              value={scoredata.sci}
              type="text"
              id="sci"
            />
            <br />
            <button onClick={TOTAL}>Total</button>
            <button onClick={AVERAGE}>Average</button>
            <button onClick={GRADE}>Grade</button>
          </div>
        </div>
        <div id="result">
          <div id="head1">
            <h1>Total:{Total}</h1>
          </div>
          <div id="total"></div>

          <div id="head2">
            <h1>Average:{Average}%</h1>
          </div>
          <div id="average"></div>

          <div id="head3">
            <h1>Grade:{Grade}</h1>
          </div>
          <div id="grade"></div>
        </div>
      </div>
    </>
  );
};

export default GradingSystemReact;
