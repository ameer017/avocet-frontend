import React, { useEffect } from "react";
import { BiUserCheck, BiUserMinus, BiUserX } from "react-icons/bi";
import { FaBoxOpen, FaCube, FaMoneyBill, FaUsers } from "react-icons/fa";
import InfoBox from "../infoBox/InfoBox";
import './OrderStats.scss'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CALC_COMPLETED_ORDER, CALC_TOTAL_AMOUNT } from "../../redux/features/auth/orderSlice";

// Icons
const icon1 = <FaCube size={40} color="#fff" />;
const icon2 = <FaBoxOpen size={40} color="#fff" />;
const icon3 = <FaMoneyBill size={40} color="#fff" />;
const icon4 = <BiUserX size={40} color="#fff" />;

const OrderStats = () => {

  const dispatch = useDispatch();
  const { orders } = useSelector(
    (state) => state.order
  );
  
  const completedOrders = orders.filter((order) => order.status === "processed").length;

  useEffect(() => {

    dispatch(CALC_COMPLETED_ORDER());
    dispatch(CALC_TOTAL_AMOUNT());
  }, [dispatch, orders]);

  return (
    <div className="user-summary">
        <h3 className="--mt">Order Stats</h3>

        <div className="info-summary">
            <InfoBox icon={icon1} title={"Total Orders"} count={orders.length} bgColor={"card3"}/>
            <InfoBox icon={icon2} title={"Processed"} count={completedOrders} bgColor={"card2"}/>
        </div>
    </div>
  )
}

export default OrderStats