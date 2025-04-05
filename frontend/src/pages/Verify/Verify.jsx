import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParms, setSearchParams] = useSearchParams();
    const success = searchParms.get("success");
    const orderId = searchParms.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();
    
    const verifyPayment = async () => {
        const response = await axios.post(url + "/api/order/verify", { success, orderId });
        if (response.data.success) {
            navigate("/myorders");
        } else {
            navigate("/");
        }
    }

    useEffect(() => {
        verifyPayment();
    }, []);
    
    return (
        <div className='verify'>
            <div className="spinner">
                {/* You can add spinner animation here */}
            </div>
        </div>
    )
}

export default Verify;
