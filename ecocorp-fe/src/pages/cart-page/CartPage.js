import React from "react";
import "./CartPage.css"
import {useNavigate} from 'react-router-dom';
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
    const navigate = useNavigate();
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
            <p style={{fontSize: "6vmin", margin: "4vmin", paddingBottom: "10px"}}> <b> Your Order </b></p>

            <TableContainer component={Paper} sx={{width: "85%"}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"> <p style={{fontSize: "1.65rem"}}>Item</p> </TableCell>
                            <TableCell align="center"> <p style={{fontSize: "1.65rem"}}>Price</p> </TableCell>
                            <TableCell align="center"> <p style={{fontSize: "1.65rem"}}>Quantity</p> </TableCell>
                            <TableCell align="center"> <p style={{fontSize: "1.65rem"}}>Total</p> </TableCell>
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
                                            <p style={{fontSize: "1.45rem"}}><b>{cartItem.title}</b></p>
                                            <p style={{fontSize: "2vmin"}}> {cartItem.description} </p>
                                        </div>
                                    </span>
                                </TableCell>

                                <TableCell align="center"> <p style={{fontSize: "1.25rem"}}>{cartItem.price} lei</p></TableCell>
                                <TableCell align="center"> <p style={{fontSize: "1.25rem"}}>{cartItem.quantity}</p> </TableCell>
                                <TableCell align="center"> <p style={{fontSize: "1.25rem"}}>{computeTotalForItem(cartItem)} lei</p> </TableCell>
                            </TableRow>
                        )}

                        <TableRow>
                            <TableCell align="left"> <p style={{fontSize: "1.25rem"}}><b>Subtotal <br/> Shipping <br/> Total </b></p> </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell align="right">
                                <p style={{fontSize: "1.25rem"}}><b>
                                    {computeSubtotal()} lei <br/> {computeShippingFee()} lei <br/> {computeTotal()} lei
                                </b></p>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <div id="optionButtonsContainer">
                <button className="button-class" onClick={() => {navigate(-1);}}> Back </button>
                <button className="button-class" onClick={() => {navigate("/checkout");}}> Checkout </button>
            </div>
        </div>
    );
}

export default CartPage;