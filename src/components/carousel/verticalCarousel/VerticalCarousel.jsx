import React from "react";
import { useFirebaseStore } from "../../../store/UseFirebase";
import { useControlModal } from "../../../store/useControlModal";


const VerticalCarousel = (props) => {
  const { deleteDocument } = props;
  const { dataStore } = useFirebaseStore();
  const { setModalVisible, setSelectedItem, setTypeModal } = useControlModal();


  const array = [1,2,3,4,5,6]
  // item : 1,2,3,4,5,6
  // index : 0,1,2,3,4,5





  return (
    <div className="h-96 carousel carousel-vertical rounded-box">
      {dataStore?.map(
        (item, index) => {
        return (
          <div key={index} className="carousel-item h-full">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={item.image} alt="cover" />
              </figure>
              <div
                onClick={() => {
                  deleteDocument(item.id);
                }}
                className="text-3xl text-white absolute right-4 top-4 bg-blue-400 rounded-sm px-3 py-2"
              >
                X
              </div>
              <div
                className="text-3xl text-white absolute right-4 bottom-4"
                onClick={() => {
                  setModalVisible(true);
                  setSelectedItem(item);
                  setTypeModal("updateCollection");
                }}
              >Edit</div>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div className="badge badge-secondary">
                    {item.isLike ? "❤️" : "🥺"}
                  </div>
                </h2>
                <p> List : {item.place}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{item.address}</div>
                  <div className="badge badge-outline">{item.description}</div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      )
      }
    </div>
  );
};

export default VerticalCarousel;
