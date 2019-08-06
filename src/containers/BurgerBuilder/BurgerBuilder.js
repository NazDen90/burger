import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
    };

    purchaseHandler = () => {
        this.setState({purchasing: true})
    };

    purchaseContinueHandler = () => {
        alert('You continue!');
    };
    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(key => ingredients[key])
            .reduce((next, curr) => next + curr, 0);
        this.setState({purchasable: sum > 0})
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = INGREDIENT_PRICES[type] + oldPrice;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    };


    render() {
        const disableInfo = {...this.state.ingredients};
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing}
                       modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  purchaseCancel={this.purchaseCancelHandler}
                                  purchaseContinue={this.purchaseContinueHandler}
                                  price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingAdded={this.addIngredientHandler}
                               ingRemoved={this.removeIngredientHandler}
                               disabled={disableInfo}
                               price={this.state.totalPrice}
                               purchasable={this.state.purchasable}
                               ordered={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
