import './Input.css';

export const Input=(props)=>{

    let styles = '';

    if(props.style === "search-input"){
        styles="search-input";
    }else if(props.style === "subscribe-input"){
        styles="subscribe-input";
    }else if(props.style === "email-input"){
        styles="email-input";
    }else if(props.style === "authorization-input"){
        styles="authorization-input";
    }else if(props.style === "send-review-input"){
        styles="send-review-input";
    }else if(props.style === "registration-input"){
        styles="registration-input";
    }


    return (
        <div>
            <input className={styles} onChange={props.onChange} type={props.type} placeholder={props.placeholder}/>
        </div>
    );

}