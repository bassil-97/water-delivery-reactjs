import React from 'react';
import './OrderButton.css';

import { redirectToOrder } from '../../helpers/helpers';

export default function OrderButton() {
    return (
        <button type="button" className="order__btn" onClick={redirectToOrder}>Make an order</button>
    )
}
