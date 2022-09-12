import React, {useState, useEffect}from "react";
import AddReview from "./AddReview";
import DeletePost from "./DeletePost";



function HomePage(){
    const [blogPost, setBlogPost]=useState([]);
    const [newReview,setNewReview]=useState([])
    const [showReviews, setShowreviews] = useState(false)
    

    useEffect(()=>{
        fetch('http://localhost:9292/posts')
     
        .then((r)=> r.json())
        .then((data)=> setBlogPost(data))
    }, [newReview])


    function handleAddReview(newReviews){
      setNewReview([...newReview, newReviews])
     
    }


  function handleDeletePost(id){
    const updatedPost = blogPost.filter((p) => p.id !== id);
    setBlogPost(updatedPost)

  }

  function handleHideReviews(){
    setShowreviews((showReviews) => !showReviews)
  }

 
  
  
    return (
     <div style={{margin:"auto", width:'60%', marginTop: 0 +"px", marginBottom: 30+ "px"}}>
        <h3 style={{textAlign:'center'}}></h3>
        <div style={{overflow:'scroll', height: 700+ "px"}}>
            {blogPost.map((post) => {
            return (          
                <div style={{marginBottom: 20+"px"}} class="card text-center"  key={post.id} >
                <div class="card-header">
                 <p> Published ~ {new Date(post.created_at).toLocaleDateString()} - {new Date(post.created_at).toLocaleTimeString()} </p>
                </div>
                <div className="card-body" key={post.id}>
                  <h5 className="card-title"><span><h4 class="btn btn-primary">{post.Author}</h4> </span> |{post.Title} </h5>
                  <p className="card-text">{post.Content}</p>
                  
                  <div className="review">
                    {showReviews ? (
                      <div>
                      <h5 style={{color:"blue", textAlign:"center"}}>Reviews</h5>
                      <div className="reviews-card">
                        {post.reviews.map((review)=> {
                          return (
                          <div className="reviews" style={{textAlign: "left"}}>
                              <p> <span style={{color: 'blue'}}>{review.name} </span>  ~  
                               {review.comment}  
                                <span style={{color: 'blue'}}>{new Date(review.created_at).toLocaleTimeString()}</span> </p>
  
                          </div>
                          )
                        }
                        )}
                      </div>
                        <AddReview onHandleAddReview={handleAddReview} id={post.id}/> 
                        <DeletePost onDeletePost={handleDeletePost} id={post.id}/>

                      </div>
                      ) : (null)}
                      <button onClick={handleHideReviews}>See Reviews</button>

                  </div>


                  {/* <button class="btn btn-primary" onClick={handleDeletePost}>Delete</button> */}

                </div>
                <div class="card-footer text-muted">
                  
                </div>
              </div>
              
            )
        })}  
        
     </div>
  </div>

    )
}

export default HomePage;
