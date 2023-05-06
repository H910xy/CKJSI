import React from "react";
import { useFirebaseStore } from "../../../store/UseFirebase";

const VerticalCarousel = () => {
  const { dataStore } = useFirebaseStore();

  return (
    <div className="h-96 carousel carousel-vertical rounded-box">
      {dataStore?.map((item, index) => {
        return (
          <div key={index} className="carousel-item h-full">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={item.coverUrl} alt="cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div className="badge badge-secondary">
                    {item.isLike ? "❤️" : "🥺"}
                  </div>
                </h2>
                <p>
                    Album:  {item.album} 
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{item.singer}</div>
                  <div className="badge badge-outline">{item.releaseAt}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalCarousel;
