import React, {useState} from "react";

function AddReview({onHandleAddReview, id, reviews}){
    const [comment, setComment]=useState('')

    function addReviewSubmit(event){
        event.preventDefault()

        const newReviews = {
            comment:comment,
            post_id: id
        }
        fetch (`http://localhost:9292/reviews`,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newReviews)

        })
        .then((r) => r.json())
        .then((data) => onHandleAddReview(data))
        // console.log(comment)

    
       
}

export default AddReview;