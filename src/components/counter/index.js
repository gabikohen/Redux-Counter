import {deposit,withdraw} from "../../store/amount/action";
import { selectCurrentAmount } from "../../store/amount/reducer";
import {connect} from "react-redux"


const mapStateProps = (state) => {
    return{
        amount:selectCurrentAmount(state),
    }
    
}
const counter = ({amount,deposit,withdraw}) => {
  return (
    <div>
      <h1>{amount} </h1>
       {/* tengo que poner la funcion ()=> funcion anonima 
       El primer parametro es para rescar algo y el segundoe enviar
      connect()*/}
      <button onClick = {()=> deposit()}>Deposit $10</button>
      <button onClick = {() => withdraw()}>Withdraw $10</button>
    </div>
  );
};


export default connect(mapStateProps,{deposit,withdraw})(counter)
