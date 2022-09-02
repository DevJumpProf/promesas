const getNombreAsync= async (idPost)=>{
try {
    const resPost = await fetch (`http://jsonplaceholder.typicode.com/posts/${idPost}`)
    const post = await resPost.json()
    const resUser = await  fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
    const user = await resUser.json()
    console.log(user)
} catch (error) {
    console.log(error)
}
}
getNombreAsync(42)