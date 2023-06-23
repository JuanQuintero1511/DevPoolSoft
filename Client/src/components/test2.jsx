import MercadoPagoButton from "./MercadoPago/MercadoPagoButton"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('TEST-5dddeb1a-ab6f-47f0-aeeb-1f253ef77fe9');


const Test2 = () => {


    return (
        <div className="flex text-center justify-center mt-24 h-screen">
            <div id="wallet_container"><Wallet id="wallet_container" initialization={{ preferenceId:'TEST-5dddeb1a-ab6f-47f0-aeeb-1f253ef77fe9'}} />
            </div>
        </div>
    )
}

export default Test2;