import logo from '../assets/investment-calculator-logo.png';
export default function({id}){
    return(
        <header id={id}>
            <img src={logo} alt="Logo showing a money bag." />
            <h1>React Investment Calculator</h1>
        </header>
    )
}