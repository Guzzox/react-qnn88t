import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  // To set two dates to two variables
  var date1 = new Date("11/25/2020");
  const messages = [
    "tu fais partie de ma vie",
    "je suis dans tes bras",
    "je suis à tes côtés",
    "je suis ton copain",
    "je suis ton loulou d'amour",
    "je t'aime",
    "que tu apportes du bonheur dans ma vie"
  ];
  const backgrounds = [
    "https://lh3.googleusercontent.com/pw/ACtC-3fJVoV__4C-KIjUjoSjpHXXX28xI_IeHwmm87uA7NiXDWtgBk5KbNXGPtcy10MqonTDo8NCe_IEht57CCH3t2nSrxcE3Uvc0bOl4yTY8MHAHk9QKRfaeUCp97CLPJZPjXliEwbrQ2mxMiGBukDFsGZ9=w703-h937-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/ACtC-3cDXia-5KTP7wR2DPv9SmxvD0lHg7IocrYwEBPIAi5cuLA8MQdJKCvYlYnCLSCAUPHHVaIiJLA9oTEvoC7lPbe7PSIF-WPAuhPvUYFK7Pk3P5452hgrW5tJFSV67zCMRxcu29hmExwNyXnFFgV7x62P=w528-h938-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/ACtC-3dsGFhEHG2QT6MmmC4GmQoWrB7oA2TCBc5Po-JPMTIBkbd9paZb7VThDkNhNgGMzQzso8eDj7VhjhFY0kJ3_HSXITqgP0xv75SK5fnIZ617fPiKGx1Rwzqb1_cBiDewwvoTuYU8mNIeAbsZJDP2Ewtt=w528-h938-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/ACtC-3fYcLSNntpk53kA3Q8makR3hPlUdAFTVGOATLyoJXrvR-LF6RJzwoLpLTGazyoAGIR4yaCW9IVkKsAYxPoxY-VpaH_Q2dx2q3w0iSHye7wGrmHufV1ozmo8bpOSZsiI25c65bcdRjp8DnGjoFkCpR5R=w703-h937-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/ACtC-3eOZ2BjrCbSRgcgM7pTetMrt-AmW48Q8pnY6zcJ3jcQHHBZ-3fv2-0H-s0T4pfILyh-zCjFboZuSF-ELD5IR6nwd2s-_twSN6RJ1N_p3s_9g__Nak23fGbD9-0oeVWa3wgGnI1JsXiMwfa29xpfVCMn=w528-h938-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/ACtC-3dyEltS5nyws1glQaokoehF4BovqQDyHvkK49qD96zEgh-7eqwhDuECECuEFYQisgmuilTDrpDPOqFs1Pn0-D0OgkmRK4REIkErwxg3QMMRLHHB1fOVSHz-R-yNOsWoVxf4tpPZJ2RuDO6VTHl6bWOj=w703-h937-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/ACtC-3eihNsm7LDRe-zHzt4I_uTmujx67-R_DbdbMA1tDqbFQB5t2jcCXR5ruvgCzlylmPWEmayzwo-636RghtxAx8EwgQjqwfsRPnJTik86dziiXdxGH61TP0ZI4H7RLBvvfMtdM8ZgefgrcuWvDbSwXWt4=w703-h937-no?authuser=0"
  ];
  const [date2, setDate2] = useState(new Date());
  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();
  // To calculate the no. of days between two dates
  const [DifferenceInDays, setDifferenceInDays] = useState(
    parseInt(Difference_In_Time / (1000 * 3600 * 24))
  );

  const [message, setMessage] = useState("je t'aime");
  const [background, setBackground] = useState(
    "https://lh3.googleusercontent.com/pw/ACtC-3fJVoV__4C-KIjUjoSjpHXXX28xI_IeHwmm87uA7NiXDWtgBk5KbNXGPtcy10MqonTDo8NCe_IEht57CCH3t2nSrxcE3Uvc0bOl4yTY8MHAHk9QKRfaeUCp97CLPJZPjXliEwbrQ2mxMiGBukDFsGZ9=w703-h937-no?authuser=0"
  );

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      setDate2(new Date());
      var Difference_In_Time = date2.getTime() - date1.getTime();
      setDifferenceInDays(parseInt(Difference_In_Time / (1000 * 3600 * 24)));
      setMessage(messages[i]);
      setBackground(backgrounds[i]);
      i++;
      if (i == messages.length) {
        i = 0;
      }
    }, 3000);
  }, []);

  return (
    <div
      className="background"
      style={{ backgroundImage: `url( "${background}")` }}
    >
      <div className="container">
        <div className="center">
          <h1 className="days">
            <b>{DifferenceInDays}</b> jours
          </h1>
          <p className="citation">que {message}</p>
        </div>
      </div>
    </div>
  );
}
