import React from "react";
import "./App.scss";
import { LectureCardComponent } from "./components/lecture-card/lecture-card";

function App() {
  return (
    <div className="main-container">
      <div className="month-container">
        <div className="title">Сентябрь 2020</div>
      </div>
      <div className="days-row">
        <div className="time"></div>
        <div>
          <span>10</span> Понедельник
        </div>
        <div>
          <span>11</span>Вторник
        </div>
        <div>
          <span>12</span>Среда
        </div>
        <div>
          <span>13</span>Четверг
        </div>
        <div>
          <span>14</span>Пятница
        </div>
        <div>
          <span>15</span>Суббота
        </div>
        <div>
          <span>16</span>Воскресенье
        </div>
      </div>
      <div className="schedule-table">
        <div className="pairs-time-container">
          <div className="time">
            <p>08:30</p>
            <p>—</p>
            <p>09:50</p>
          </div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
        </div>
        <div className="day-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="day-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="day-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div><LectureCardComponent /></div>
          <div></div>
          <div></div>
        </div>
        <div className="day-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="day-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="day-container">
          <div>
            <LectureCardComponent />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="day-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
