export default function Button({Icon,children,mode="filled", ...props}) {
    //Here we are receving props by object destructuring 
    //Here ...props will extract all the remaining props passed
    return (
        <button className={`button ${mode}-button ${Icon ? 'icon-button' : ''}`} {...props}>
           {Icon && <span className="button-icon"><Icon/></span>}
           <span>{children}</span>
        </button>
        )
   }