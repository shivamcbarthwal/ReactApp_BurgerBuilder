import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-order';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Shivam Barthwal',
                address: {
                    street: '22 T Chemin de Heredia',
                    zipCode: '31500',
                    country: 'France'
                },
                email: 'shivamKingdom@outlook.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({ loading: false, purchasing: false});
        }  )
        .catch(error => {
            this.setState({ loading: false, purchasing: false});
        } );

    }

    render() {
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Information</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
                    <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Your Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }

}

export default ContactData;