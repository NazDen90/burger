import React, {Component} from 'react';
import Order from "../../components/Order/Order";
import axios from '../../axiosOrder'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({orders: fetchOrders, loading: false})
            })
            .catch(e => {
                this.setState({loading: false})
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order=><Order
                    price={order.price}
                    ingredients={order.ingredients}
                    key={order.id}/>)}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
