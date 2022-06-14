import React, { useRef, useEffect } from "react";
import Reviews from "../components/componentsUI/reviewsP/Reviews";
import NavPagesHead from "../components/componentsUI/UI/navpage/MyNavPages";
import Container from '../components/componentsUI/Container'
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