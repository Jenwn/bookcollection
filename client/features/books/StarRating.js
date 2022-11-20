import React, {useState} from "react";

const StarRating = () => {
    const [ rating, setRating ] = useState(0);
    return (
        <div className="starRate">
            {[...Array(5)].map((star, index)=>{
                index += 1;
                return(
                    <button type="button" key={index}
                    className={index <= rating ? "on" : "off"}
                    onClick={()=> setRating(index)}
                    onDoubleClick={()=>{setRating(0)}}>
                    <span className="star"> &#9733; </span>
                    </button>
                )
            })}

        </div>
    )

}

export default StarRating