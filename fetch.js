const getNombreFetch = (idPost)=>{
fetch (`http://jsonplaceholder.typicode.com/posts/${idPost}`)
.then (res=>{
    return res.json()
})
.then(post=>{
    console.log(post.userId);
    fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
    .then(res=>{
        return res.json()
    })
    .then  (user=>{
        console.log(user)
    })
})
}
getNombreFetch(42)