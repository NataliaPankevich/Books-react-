import './Input.css';

export const Input=(props)=>{

    let styles = '';

    if(props.style === "search-input"){
        styles="search-input";
    }else if(props.style === "subscribe-input"){
        styles="subscribe-input";
    }else if(props.style === "email-input"){
        styles="email-input";
    }




    return (
        <div>
            <input className={styles} type={props.type} placeholder={props.placeholder} value={props.value}/>
        </div>
    );

}