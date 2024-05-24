import React, { useState, useRef } from 'react';

const Create =({setFileUpload, formData}) => {
  const [imageURL, setImageURL] = useState(null);
  const inpuRef = useRef();

  const handleChange = (event) => {
    setImageURL(event.target.value)
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    setImageURL(URL.createObjectURL(file));
  };

  const handleCancel = () => {
    setImageURL(null);
  };

  const handleSubmit =()=>{

  }

  return (
    <div className='flex flex-row justify-center items-center gap-10 bg-orange-50 h-screen'onSubmit={handleSubmit}>
      <div className=' bg-orange-400 border-2 border-black border-dashed rounded-lg h-96 w-96 relative '
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        name='uploadImage'
        value={imageURL}
        onChange={(event)=> {handleDrop(event)
        setFileUpload}}
      >
        
        {imageURL && (
          <>
            <img src={imageURL} alt="Dropped" style={{ maxWidth: 'full', maxHeight: 'full', justifyContent: "center"}} />
            <button onClick={handleCancel} style={{ position: 'absolute', top: '10px', right: '10px' }}>Cancel</button>
          </>
        )}
        {!imageURL && <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>Drag & drop image here
        <h1>Or</h1>
              <input type="file" 
              onChange={setFileUpload}
              hidden
              ref={inpuRef}
              />
              <button className='font-medium border-2 border-black'
              onClick={()=> inpuRef.current.click()}
              >Select Files</button>
        </p>}
        
      </div>

      <div className='flex flex-col'>
        <div className='w-full'>
            <label htmlFor="recipeName" className="mb-2 flex text-orange-400 justify-start">Recipe Name</label>
            <input 
            type="text" 
            name="recipeName" 
            autoComplete='off'
            className=" border border-orange-400 sm:text-sm rounded-2xl focus:border-orange-400 block w-96 p-2.5 dark:placeholder-gray-400" 
            placeholder="recipeName" 
            required/>
        </div>

        <div className='pt-8 w-full'>
            <label htmlFor="email" className="mb-2 flex text-orange-400 justify-start">Email</label>
            <input 
            type="text" 
            name="email" 
            autoComplete='off'
            className=" border border-orange-400 sm:text-sm rounded-2xl focus:border-orange-400 block w-96 p-2.5 dark:placeholder-gray-400" 
            placeholder="@gmail.com" 
            required/>
        </div>
      </div>
    </div>
  );
}

export default Create;







// import React, { useState, useRef } from 'react'

// const Create = () => {
//   const [files, setFiles] = useState(null);
//   const inpuRef = useRef();
//   const handleDragOver=(event)=>{
//     event.preventDefault();
//   }
//   const handleDrop=(event)=>{
//     event.preventDefault();
//     setFiles(event.dataTransfer.files)
//   }
//   const handleUpload=()=>{}

//   if (files) return (
//     <div className='upload'>
//       <ul>
//         {
//           Array.from(files).map((file, idx)=> <li key={idx}>{file.name}</li> )
//         }
//       </ul>
//       <div>
//         <button onClick={()=> setFiles(null)}>Cancel</button>
//         <button onClick={handleUpload}>Upload</button>
//       </div>

//     </div>
//   )
//   return (
//     <div className='bg-orange-50 h-screen'>Create
//     <div className='flex flex-row dragDropAndField'>
//       <>
//       {
//         !files && (
//           <div className='flex flex-col justify-center items-center bg-blue-50 border-2 border-blue-400 border-dashed rounded-lg h-360 p-20 dragZone'
//           onDragOver={handleDragOver}
//           onDrop={handleDrop}
//           >
//             <h1>Drag and Drop Files to upload</h1>
//             <h1>Or</h1>
//             <input type="file" 
//             onChange={(event)=> setFiles(event.target.files)}
//             hidden
//             ref={inpuRef}
//             />
//             <button className='p-12 font-medium'
//             onClick={()=> inpuRef.current.click()}
//             >Select Files</button>

//           </div>
//         )
//       }
//       </>
//       <div className='fields'>

//       </div>

//     </div>
//     </div>
//   )
// }

// export default Create