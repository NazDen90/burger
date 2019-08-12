import React from 'react';
import classes from './Order.module.css'

const Order = (props) => {
    const ingredients = [];
    for (let ing in props.ingredients) {
        ingredients.push({name: ing, amount: props.ingredients[ing]})
    }

    const ingredientOutput = ingredients.map(ing=> {
        return <span style={{textTransform: 'capitalize', display: 'inline-block', margin:'0 8px', border:'1px solid #ccc', padding:'10px'}} key={ing.name}>{ing.name}({ing.amount}) </span>
    });
    return (<div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
};

export default Order;
