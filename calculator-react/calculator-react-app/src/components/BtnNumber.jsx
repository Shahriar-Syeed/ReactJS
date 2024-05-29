export default function BtnNumber({valueOfBtn, ...props}){
    return(
        <button {...props} value={valueOfBtn}>{valueOfBtn}</button>
    )
}