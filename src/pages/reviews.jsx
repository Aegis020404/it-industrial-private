import React, { useRef, useEffect } from "react";
import Reviews from "../components/reviewsP/Reviews";
import NavPagesHead from "../components/UI/navpage/MyNavPages";
import Container from './../components/Container'
const ReviewsPage = ()=>{
    const reviewsI = useRef('')
    useEffect(()=>{
        reviewsI.current.classList.toggle('reviewsI')
        document.body.scrollTo({top:0,behavior:'smooth'})
    },[reviewsI])
    const infoPage = [{text: 'Отзывы'}]
    return (
        <>
             <Container>
                <main ref={reviewsI} className="reviews">
                    <NavPagesHead navItems={infoPage}/>
                    <Reviews/>
                </main>
            </Container>
        </>
       
    )
}

export default ReviewsPage