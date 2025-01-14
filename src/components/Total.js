import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";
import { totalCarrito } from "../Reducer";
import { useStateValue } from '../StateProvider';


const Total = () => {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="divInicial" sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h5>Articulos totales: {basket?.lenght}</h5>
            <h5> {accounting.formatMoney(totalCarrito(basket), 'COP')} </h5>
            <Button className="boton" variant="contained" color="secondary" sx={{ marginTop: "2rem" }} >Pagar </Button>
        </div>
    )
}
export default Total