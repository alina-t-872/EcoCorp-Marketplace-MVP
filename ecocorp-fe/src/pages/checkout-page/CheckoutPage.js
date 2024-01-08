import React from "react";
import {Button, Divider, TextField} from "@mui/material";
import "./CheckoutPage.css"

// TODO: Set API for order data
// await async function getServerSideProps() {
//     let orderDetails= null;
//
//     await axios.get(SERVER_URL)
//         .then(response => orderDetails = response.data)
//         .catch(error => console.log(error))
//
//     return{
//         props: {
//             boards: orderDetails
//         }
//     }
// }

// function CheckoutPage(orderDetails) {}
function CheckoutPage(){
    const [clientInformation, setClientInformation] = React.useState({
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        city: "",
        county: "",
        country: "",
        zip: "",
        phoneNumber: ""
    })

    const submitContactInformation = (event) => {
        console.log(clientInformation)

        // TODO: Send Data to server
        // axios.post(SERVER_URL, clientInformation, { headers: {'Content-Type': 'application/json'}})
        //
        // .then(() => {
        //     // TODO: Redirect to payment page
        // })
        //
        // .catch(error => {
        //     console.log(error)
        //     switch (error.response.status) {
        //         case 400:
        //             toastAlert("Client information has issues regarding its content.", "error")
        //             break
        //
        //         default:
        //             toastAlert("The server is down or has an error.", "error")
        //     }
        // })

        event.preventDefault()
    }

    const filterNumber = (number) => { return number.replace(/[^0-9]/g, '') }
    const filterText = (text) => { return text.replace(/[^a-zA-Z ]/g, '') }
    const filterAddress = (address) => { return address.replace(/[^a-zA-Z0-9,._ ]/g)}

    return (
        <div id="checkoutPageContainer">
            <form onSubmit={submitContactInformation}>
                <div id="contactInformationContainer">
                    <div className="contactInfoSubsection">
CS                        <p className="contactInfoTitle"> <b>Contact Information</b> </p>

                        <TextField
                            required
                            placeholder="Email"
                            style={{width: '100%'}}
                            type="email"
                            value={clientInformation.email}
                            onChange={event => {
                                setClientInformation((prevState) => ({
                                    ...prevState,
                                    email: event.target.value
                                }))
                            }}
                        />
                    </div>

                    <div className="contactInfoSubsection">
                        <p className="contactInfoTitle"> <b>Shipping address</b> </p>

                        <div className="contactInfoSubcontainer">
                            <TextField
                                required
                                placeholder="First name"
                                style={{width: '45%'}}
                                value={clientInformation.firstName}
                                onChange={event => {
                                    setClientInformation((prevState) => ({
                                        ...prevState,
                                        firstName: filterText(event.target.value)
                                    }))
                                }}
                            />

                            <TextField
                                required
                                placeholder="Last name"
                                style={{width: '45%'}}
                                value={clientInformation.lastName}
                                onChange={event => {
                                    setClientInformation((prevState) => ({
                                        ...prevState,
                                        lastName: filterText(event.target.value)
                                    }))
                                }}
                            />
                        </div>

                        <TextField
                            required
                            placeholder="Company"
                            style={{width: '100%'}}
                            value={clientInformation.company}
                            onChange={event => {
                                setClientInformation((prevState) => ({
                                    ...prevState,
                                    company: event.target.value
                                }))
                            }}
                        />

                        <TextField
                            required
                            placeholder="Address"
                            style={{width: '100%'}}
                            value={clientInformation.address}
                            onChange={event => {
                                setClientInformation((prevState) => ({
                                    ...prevState,
                                    address: filterAddress(event.target.value)
                                }))
                            }}
                        />

                        <TextField
                            required
                            placeholder="City"
                            style={{width: '100%'}}
                            value={clientInformation.city}
                            onChange={event => {
                                setClientInformation((prevState) => ({
                                    ...prevState,
                                    city: filterText(event.target.value)
                                }))
                            }}
                        />

                        <div className="contactInfoSubcontainer">
                            <TextField
                                required
                                placeholder="County"
                                style={{width: '30%'}}
                                value={clientInformation.county}
                                onChange={event => {
                                    setClientInformation((prevState) => ({
                                        ...prevState,
                                        county: filterText(event.target.value)
                                    }))
                                }}
                            />

                            <TextField
                                required
                                placeholder="Country"
                                style={{width: '30%'}}
                                value={clientInformation.country}
                                onChange={event => {
                                    setClientInformation((prevState) => ({
                                        ...prevState,
                                        country: filterText(event.target.value)
                                    }))
                                }}
                            />

                            <TextField
                                required
                                placeholder="ZIP"
                                style={{width: '30%'}}
                                value={clientInformation.zip}
                                onChange={event => {
                                    setClientInformation((prevState) => ({
                                        ...prevState,
                                        zip: filterNumber(event.target.value)
                                    }))
                                }}
                                inputProps={{
                                    maxLength: 10,
                                }}
                            />
                        </div>



                        <TextField
                            required
                            placeholder="Phone Number"
                            style={{width: '100%'}}
                            value={clientInformation.phoneNumber}
                            onChange={event => {
                                setClientInformation((prevState) => ({
                                    ...prevState,
                                    phoneNumber: filterNumber(event.target.value)
                                }))
                            }}
                            inputProps={{
                                maxLength: 10,
                            }}
                        />
                    </div>
                </div>

                <div id="summaryContainer">
                    <p style={{fontSize: "7vmin"}}><b>Checkout</b></p>

                    <div id="orderSummary">
                        <div className="orderDetails">
                            <p> Subtotal </p>
                            <p> 140 lei </p>
                        </div>
                        <div className="orderDetails">
                            <p> Shipping </p>
                            <p> 50 lei </p>
                        </div>
                        <div className="orderDetails">
                            <p><b> Total </b></p>
                            <p><b> 190 lei </b></p>
                        </div>
                    </div>

                    <Button variant="contained" type="submit">Continue to payment</Button>
                </div>

            </form>
        </div>
    );
}

export default CheckoutPage;