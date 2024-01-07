import './PaymentPage.css'
import axios from "axios"
import React from "react";
import {DateField, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Button, Divider, TextField} from "@mui/material";


const PaymentPage = () => {
    // ********************** Constants ********************* //

    const SERVER_URL = "";
    // TODO: Solve Router issue
    // const router = useRouter()

    // ************************ Alerts ************************ //

    const toastAlert = (message, alertType) => {
        alert(alertType.toUpperCase() + ": " + message)
    }

    // ************************ Form ************************ //

    const [cardForm, setCardForm] = React.useState({
        cardNumber: "",
        cardOwner: "",
        cardCVV: "",
        cardExpirationDate: null,
    })

    const handleCardNumberChange = (event) => {
        const rawInput = event.target.value.replace(/\D/g, '');
        const formattedInput = rawInput.replace(/(\d{4})/g, '$1 ').trim();

        setCardForm((prevState) => ({
            ...prevState,
            cardNumber: formattedInput,
        }))
    };

    const handleCardOwnerNameChange = (event) => {
        const formattedInput = event.target.value.replace(/[^a-zA-Z ]/g, '');

        setCardForm((prevState) => ({
            ...prevState,
            cardOwner: formattedInput,
        }))
    }

    const sendForm = (event) => {
        console.log(cardForm);

        // TODO: Send Data to server
        // axios.post(
        //     SERVER_URL,
        //     {
        //         cardNumber: cardForm.cardNumber,
        //         cardOwner: cardForm.cardOwner,
        //         cardExpirationDate: cardForm.cardExpirationDate.format('MM/YYYY'),
        //         cardCVV: cardForm.cardCVV
        //     },
        //     {
        //         headers: {'Content-Type': 'application/json'}
        //     }
        // )
        //
        // .then(() => {
        //     // TODO: Redirect to final checkout page
        // })
        //
        // .catch(error => {
        //     console.log(error)
        //     switch (error.response.status) {
        //         case 400:
        //             toastAlert("Your card information has issues regarding its content.", "error")
        //             break
        //
        //         default:
        //             toastAlert("The server is down or has an error.", "error")
        //     }
        // })

        event.preventDefault()
    }

    // ************************ Main Component ************************ //

    return (
        <div id='paymentContainer'>
            <form onSubmit={sendForm} >
                <div id='cardDetailsContainer'>
                    <p style={{fontSize: '5vmin'}}><b>Pay with Card - 40 lei</b></p>

                    <Divider/>

                    <div className="cardDetailContainer">
                        <p> Card Number </p>
                        <TextField
                            required
                            placeholder="XXXX XXXX XXXX XXXX"
                            style={{width: '100%'}}
                            value={cardForm.cardNumber}
                            onChange={handleCardNumberChange}
                            inputProps={{
                                maxLength: 19,
                            }}
                        />
                    </div>

                    <div className="cardDetailContainer">
                        <p> Card Owner Name </p>
                        <TextField
                            required
                            placeholder="John Doe"
                            style={{width: '100%'}}
                            value={cardForm.cardOwner}
                            onChange={handleCardOwnerNameChange}
                        />
                    </div>

                    <div className="cardDetailContainer">
                        <p>Expiration Date</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateField
                                required
                                disablePast={true}
                                views={['month', 'year']}
                                format='MM/YY'
                                value={cardForm.cardExpirationDate}
                                onChange={(date) => {
                                    setCardForm((prevState) => ({
                                        ...prevState,
                                        cardExpirationDate: date,
                                    }))
                                }}
                            />
                        </LocalizationProvider>
                    </div>

                    <div className="cardDetailContainer">
                        <p> CVV </p>
                        <TextField
                            required
                            placeholder="###"
                            style={{width: '27.5%'}}
                            value={cardForm.cardCVV}
                            onChange={(e) => {
                                setCardForm((prevState) => ({
                                    ...prevState,
                                    cardCVV: e.target.value,
                                }))
                            }}
                            inputProps={{
                                maxLength: 3,
                            }}
                        />
                    </div>

                    <Divider variant="middle"/>

                    <div id="transactionOptionsContainer">
                        <Button variant="contained" color="error" size="large"> Cancel </Button>
                        <Button variant="contained" color="success" size="large" type="submit"> Pay </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PaymentPage;