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
    const [clientData, setClientData] = React.useState({
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

    const filterNumber = (number) => { return number.replace(/[^0-9]/g, '') }
    const filterText = (text) => { return text.replace(/[^a-zA-Z ]/g, '') }
    const filterAddress = (address) => { return address.replace(/[^a-zA-Z0-9,._ ]/g)}

    return (
        <div id="checkoutPageContainer">
            <div id="contactInformationContainer">
                <div className="contactInfoSubsection">
                    <p className="contactInfoTitle"> Contact Information </p>

                    <TextField
                        required
                        placeholder="Email"
                        style={{width: '100%'}}
                        type="email"
                        value={clientData.email}
                        onChange={event => {
                            setClientData((prevState) => ({
                                ...prevState,
                                email: event.target.value
                            }))
                        }}
                    />
                </div>

                <div className="contactInfoSubsection">
                    <p className="contactInfoTitle"> Shipping address </p>

                    <div className="contactInfoSubcontainer">
                        <TextField
                            required
                            placeholder="First name"
                            style={{width: '45%'}}
                            value={clientData.firstName}
                            onChange={event => {
                                setClientData((prevState) => ({
                                    ...prevState,
                                    firstName: filterText(event.target.value)
                                }))
                            }}
                        />

                        <TextField
                            required
                            placeholder="Last name"
                            style={{width: '45%'}}
                            value={clientData.lastName}
                            onChange={event => {
                                setClientData((prevState) => ({
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
                        value={clientData.company}
                        onChange={event => {
                            setClientData((prevState) => ({
                                ...prevState,
                                company: event.target.value
                            }))
                        }}
                    />

                    <TextField
                        required
                        placeholder="Address"
                        style={{width: '100%'}}
                        value={clientData.address}
                        onChange={event => {
                            setClientData((prevState) => ({
                                ...prevState,
                                address: filterAddress(event.target.value)
                            }))
                        }}
                    />

                    <TextField
                        required
                        placeholder="City"
                        style={{width: '100%'}}
                        value={clientData.city}
                        onChange={event => {
                            setClientData((prevState) => ({
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
                            value={clientData.county}
                            onChange={event => {
                                setClientData((prevState) => ({
                                    ...prevState,
                                    county: filterText(event.target.value)
                                }))
                            }}
                        />

                        <TextField
                            required
                            placeholder="Country"
                            style={{width: '30%'}}
                            value={clientData.country}
                            onChange={event => {
                                setClientData((prevState) => ({
                                    ...prevState,
                                    country: filterText(event.target.value)
                                }))
                            }}
                        />

                        <TextField
                            required
                            placeholder="ZIP"
                            style={{width: '30%'}}
                            value={clientData.zip}
                            onChange={event => {
                                setClientData((prevState) => ({
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
                        value={clientData.phoneNumber}
                        onChange={event => {
                            setClientData((prevState) => ({
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

            <Divider orientation="vertical" sx={{border: "black", width: "1px !important"}}></Divider>

            <div id="summaryContainer">
                <p style={{fontSize: "10vmin"}}><b>Checkout</b></p>

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

                <Button variant="contained">Continue to payment</Button>
            </div>


        </div>
    );
}

export default CheckoutPage;