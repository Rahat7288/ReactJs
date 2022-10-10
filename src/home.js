import { useState } from "react";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'my new website', body: 'web body', author: 'ami', id: 1},
        {title: 'my new website2', body: 'web body2', author: 'ami', id: 2},
        {title: 'my new website3', body: 'web body3', author: 'ami', id: 3},

    ])
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                // we need different key for verify for list item
                <div className="blog-priview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <h2>{blog.body}</h2>
                    <h3>{blog.author}</h3>

                </div>
            ))}
            
        </div>
     );
}
 
export default Home;