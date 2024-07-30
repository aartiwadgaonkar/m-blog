import React, { useState } from 'react'
import { addBlog } from '../../redux/blog/blogAction'
import { useDispatch } from 'react-redux'
export default function AddBlog() {
    const [preview, setPreview] = useState()
    const dispatch = useDispatch()
    const [blogData, setBlogData] = useState({
        title: "dds",
        desc: "fd"
    })
    const handleChange = (e) => {
        console.log(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]))
        setBlogData({ ...blogData, image: e.target.files[0] })
    }
    const handleAddBlog = () => {
        const fd = new FormData()
        fd.append("title", blogData.title)
        fd.append("desc", blogData.desc)
        fd.append("image", blogData.image)
        for (const x of fd.entries()) {
            console.log(x, x);
        }
        // dispatch(addBlog(fd))
    }
    return (
        <div>
            <input type="file" onChange={handleChange} />
            <button onClick={handleAddBlog}>add Blog</button>
            <hr />
            <img src={preview} alt="" height={100} width={100} />
        </div>
    )
}


// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addBlog } from '../../redux/blog/blogAction'

// const AddBlog = () => {
//     const dispatch = useDispatch()
//     const [image, setImage] = useState()
//     const [preview, setPreview] = useState()
//     const [blogData, setBlogData] = useState({
//         title: "",
//         desc: ""
//     })
//     const handleImage = e => {
//         setImage(e.target.files[0])
//         const x = URL.createObjectURL(e.target.files[0])
//         setPreview(x)
//     }
//     const handleAddBlog = () => {
//         const fd = new FormData()
//         fd.append("title",blogData.title)
//         fd.append("desc",blogData.desc)
//         fd.append("image",image)

//         // for (const x of fd.entries()) {
//         //     console.log(x);
//         // }
//         dispatch(addBlog(fd))
//     }
//     return <>
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-6 offset-sm-3">
//                     {/* <pre>
//                         {JSON.stringify(image, null, 2)}
//                     </pre> */}
//                     <div class="card mt-5">
//                         <div class="card-header">Add Blog</div>
//                         <div class="card-body">
//                             <input className='form-control' type="text" placeholder='title' />
//                             <input className='form-control' type="text" placeholder='desc' />
//                             <input
//                                 onChange={handleImage}
//                                 className='form-control'
//                                 type="file"
//                             />
//                             <br />
//                             <img src={preview} alt="" height={100} />
//                             <button
//                                 onClick={handleAddBlog}
//                                 className='btn-btn-outline-primary'>Add Blog</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
// }

// export default AddBlog