import React, { useRef, useEffect } from "react";
import Reviews from "../components/reviewsP/Reviews";

const ReviewsPage = ()=>{
    const reviewsI = useRef('')
    useEffect(()=>{
        reviewsI.current.classList.toggle('reviewsI')
    },[reviewsI])
    return (
        <div>
            <main ref={reviewsI} className="reviews">
                <Reviews/>
            </main>
        </div>
    )
}

export default ReviewsPage