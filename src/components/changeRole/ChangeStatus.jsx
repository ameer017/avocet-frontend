import React, {useState} from 'react'
import { FaCheck } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { RESET, getOrders, updateOrder, upgradeOrder } from '../../redux/features/auth/orderSlice'

const ChangeStatus = ({_id}) => {
    const [status, setStatus] = useState('')
    const dispatch = useDispatch()

    const changeStatus = async (e) => {
        e.preventDefault();

        if(!status) {
            toast.error('Please, select a status');
        }

        const orderData = {
            status: status,
            id: _id
        }

        await dispatch(upgradeOrder(orderData));
        await dispatch(getOrders())
        await dispatch(RESET())
    }

  return (
    <div className='sort'>
        <form
        className="--flex-start"
        onSubmit={(e) => changeStatus(e, status)}
        >
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value=''>-- select --</option>
                <option value='processed'>Processed</option>
                <option value='Under Processing'>Under Processing</option>
            </select>
            <button className='--btn --btn-primary'>
                <FaCheck size={15} />
            </button>
        </form>
    </div>
  )
}

export default ChangeStatus