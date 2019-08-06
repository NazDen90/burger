import React from 'react';
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    const ingSummary = Object.keys(props.ingredients)
        .map(key => <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span> : {props.ingredients[key]}
        </li>);
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.purchaseCancel} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.purchaseContinue} btnType='Success'>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;
