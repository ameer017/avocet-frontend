import { Link } from "react-router-dom";
import "./Buy.scss"

function Buy(data) {
  const newTo = {
    pathname: `/productPage/${data.data.productId}`,
  };

  return (
    <Link to={newTo}>
      <div className="buy">
        <div>
          <div>
            <p>ID: {data.data.productId}</p>
            <p> Title: {data.data.title} </p>
            <p> Amount: {data.data.amount} Celo</p>
            <p> Location: {data.data.location} </p>
            <p> Weight: {data.data.weight} kg</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Buy;
