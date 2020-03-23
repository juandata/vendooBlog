import React from "react";

import './Button.css';

const Button = props => {
    const style = {
        backgroundImage : `url(${props.Img})`
    }
    return <button style={style} className="Button"><div className="ButtonEffect"><div className="ButtonInner"><div>View More</div></div></div></button>
}

export default Button;
