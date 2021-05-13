import React, {useState} from 'react'
import { FaStar } from "react-icons/fa";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, sethover] = useState(null);

    return (
    <div>
     {[...Array(5)].map((star, i) => {
         const ratingValue = i + 1;
         return (
            <label> 
                <input 
                 type="radio"
                 name="rating"
                 value={ratingValue}
                 onClick={()=> setRating(ratingValue)}
                
                 />
                 <FaStar className="star"
                 color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                 onMouseEnter={() => sethover(ratingValue)}
                 onMouseLeave={() => sethover(null)}
                
                 />
            </label> 
         );   
     })}
      <p>Sua avaliação é {rating}</p>
    </div>
    );
};

export default StarRating;