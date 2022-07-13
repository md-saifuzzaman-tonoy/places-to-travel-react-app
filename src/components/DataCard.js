import React from "react";

const DataCard = (props) => {

    const empty = "No Data available to show"

  return (
    <>
      {props.data.map((each) => {
        const { title, description, img, id } = each;
        return (
          <div className="card" key={id}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a onClick={() => props.addToFav(id)} className="btn btn-primary">
                Add To Favourite
              </a>
            </div>
          </div>
        );
      })}
      {!props.data.length && empty}
    </>
  );
};

export default DataCard;
