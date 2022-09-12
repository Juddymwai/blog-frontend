import React, {useState} from "react";

function AddReview({onHandleAddReview, id, reviews}){
    const [comment, setComment]=useState('')

    function addReviewSubmit(event){
        event.preventDefault()

        const newReviews = {
            comment:comment,
            post_id: id
        }
        fetch (`https://new-blog22.herokuapp.com/reviews`,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newReviews)

        })
        .then((r) => r.json())
        .then((data) => onHandleAddReview(data))
        // console.log(comment)

        
        
    }
    return (
        <div>
            <form onSubmit={addReviewSubmit}>
                <input style={{width: 40+"vw", margin: "auto"}} type="text" class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e)=> setComment(e.target.value)} required/>
                <button type="submit">Add a Comment</button>
                            
                
            </form>

        </div>
    )
       
}

export default AddReview;