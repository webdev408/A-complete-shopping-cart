/* eslint-disable react/prop-types */
import { FaEdit, FaPlus, FaShoppingCart, FaTrashAlt } from "react-icons/fa";

const ListItems = ({
  items,
  handleAdd,
  editFruit,
  removeFruit,
  totalPrice,
  addToCart,
}) => {
  return (
    <>
      <div className="container">
        <h2 className="my-4 text-center">My Fruit Basket</h2>
        {items.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <p className="card-text">{item.quantity}lb</p>
              </div>
              <button
                className="btn btn-sm btn-warning"
                onClick={() => editFruit(item.id)}
              >
                <FaEdit />
              </button>
              <div className="block">
                <button
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => removeFruit(item.id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
              <button
                className="btn btn-sm btn-success ms-2"
                onClick={() => addToCart(item)}
              >
                <FaShoppingCart />
              </button>
            </div>
          );
        })}
        <button className="btn btn-primary mt-2" onClick={handleAdd}>
          <FaPlus />
        </button>
      </div>
      <div className="container">
        <h3 className="my-4 text-center">
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
      </div>
    </>
  );
};
export default ListItems;
