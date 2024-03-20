import { Restro_URL } from "../utlis/contants";
import { useDispatch } from "react-redux";
import { addItem } from "../utlis/cartSlice";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
    console.log(item);
  };
 

  return (
    <div>
      {items.map((item) => (
        <div
          className="border-b-2 border-gray-200 m-2 text-left"
          key={item.card.info.id}
        >
          <div className="flex justify-between">
            <div className="py-2 w-9/12">
              <span>{item.card.info.name}</span>
              <br></br>
              <span className="text-sm">
                {item.card.info.defaultPrice / 100}₹
              </span>
              <p className="text-xs break-all">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button
                  className="p-2
               bg-black text-white shadow-2xl rounded-xl"
                  onClick={()=>handleAddItem(item)}
                >
                  {" "}
                  Add +{" "}
                </button>
              </div>
              <img
                src={Restro_URL + item.card.info.imageId}
                className="w-40 rounded-lg"
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
