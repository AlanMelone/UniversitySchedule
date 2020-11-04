import React from "react";
import './lecture-card.scss';

export function LectureCardComponent() {
  return (
    <div className="lecture-card-container">
      <div>
        <p className="lecture-type">Лекция</p>
        <p className="title">Программирование и теория информации</p>
      </div>
      <p className="professor">Мациевский Сергей Михайлович</p>
      <p className="place">213 каб. (ГК)</p>
    </div>
  );
}
