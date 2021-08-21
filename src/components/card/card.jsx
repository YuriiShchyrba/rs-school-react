import React from 'react';
import '../../style.css';

const Card = (props) => (
  <div className="card__wrapper">
    <div className="card">
      <img className="card__img" src={props.cardInfo.imgSrc} alt="" />
      <div className="card__general_info">
        <h3 className="general_info__header">{props.cardInfo.productName}</h3>
        <p className="general_info__creator">{props.cardInfo.productInfo}</p>
      </div>
      <div className="card__separation_line" />
      <div className="card__category">{props.cardInfo.productCategory}</div>
      <div className="card__reaction">
        <div className="reaction__likes">
          <img className="likes__icon" src="./assets/like.svg" alt="" />
          <p className="likes__info">{props.cardInfo.amountOfLikes}</p>
        </div>
        <div className="reaction__views">
          <img className="views__icon" src="./assets/views.svg" alt="" />
          <p className="views__info">{props.cardInfo.amountOfViews}</p>
        </div>
        <div className="reaction__favourite">
          <img className="favourite__icon" src="./assets/favourite.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
);
export default Card;
