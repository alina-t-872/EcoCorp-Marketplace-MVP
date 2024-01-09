import React from "react";
import "./CartPage.css"
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

// TODO: API for fetching the cart list
// async function fetchCartList() {
//     let cartList = []
//
//     await axios.get(SERVER_URL)
//         .then(response => {cartList = response.data})
//         .catch(error => console.log(error))
//
//     return{
//         props: {
//             cartList: cartList
//         }
//     }
// }

// function CartPage(cartList) {}
function CartPage() {
    let cartList = [
        {
            img: '../../assets/golf.png',
            title: "Golf 4",
            description: "Vand om",
            quantity: 4,
            price: 20.00,
        },
        {
            img: '../../assets/golf.png',
            title: "Golf 4",
            description: "Vand om",
            quantity: 1,
            price: 20.00,
        },
        {
            img: '../../assets/golf.png',
            title: "Golf 4",
            description: "Vand om",
            quantity: 1,
            price: 20.00,
        },
        {
            img: '../../assets/golf.png',
            title: "Golf 4",
            description: "Vand om",
            quantity: 1,
            price: 20.00,
        }
    ]

    const computeTotalForItem = (cartItem) => {
        return cartItem.quantity * cartItem.price;
    }

    const computeSubtotal = () => {
        let sum = 0

        cartList.map(cartItem => sum += cartItem.price * cartItem.quantity)

        return sum
    }

    const computeShippingFee = () => {
        return computeSubtotal() < 200 ? 50 : 0
    }

    const computeTotal = () => {
        return computeSubtotal() + computeShippingFee()
    }

    return (
        <div id="cartPageContainer">
            <p style={{fontSize: "8vmin", margin: "4vmin"}}> <b> Your Order </b></p>

            <TableContainer component={Paper} sx={{width: "85%"}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"> <p>Item</p> </TableCell>
                            <TableCell align="center"> <p>Price</p> </TableCell>
                            <TableCell align="center"> <p>Quantity</p> </TableCell>
                            <TableCell align="center"> <p>Total</p> </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {cartList.map(cartItem =>
                            <TableRow
                                key={cartItem.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    <span className="itemPresentation">
                                        <img
                                            src={require('../../assets/golf.png')}
                                            alt={cartItem.title}
                                            className="imageItem"
                                        />

                                        <div className="itemDetails">
                                            <p><b>{cartItem.title}</b></p>
                                            <p style={{fontSize: "2vmin"}}> {cartItem.description} </p>
                                        </div>
                                    </span>
                                </TableCell>

                                <TableCell align="center"> <p>{cartItem.price} lei</p></TableCell>
                                <TableCell align="center"> <p>{cartItem.quantity}</p> </TableCell>
                                <TableCell align="center"> <p>{computeTotalForItem(cartItem)} lei</p> </TableCell>
                            </TableRow>
                        )}

                        <TableRow>
                            <TableCell align="left"> <p><b>Subtotal <br/> Shipping <br/> Total </b></p> </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell align="right">
                                <p><b>
                                    {computeSubtotal()} lei <br/> {computeShippingFee()} lei <br/> {computeTotal()} lei
                                </b></p>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            {/*TODO: Set button actions */}
            <div id="optionButtonsContainer">
                <Button variant="contained" size="large"> Back </Button>
                <Button variant="contained" size="large"> Checkout </Button>
            </div>
        </div>
    );
}

export default CartPage;