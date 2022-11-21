import React from 'react'
import './FileUpload.scss'
import 'axios' 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
<script src="https://kit.fontawesome.com/84cf5e6007.js" crossorigin="anonymous"></script>

const FileUpload = ({files,setFiles}) => {
    const uploadHandler =(event)=>{
        const file=event.target.files[0];
        file.isUploading=true;
        setFiles([...files,file])
        
        const formdata =new FormData();
        formdata.append(
            file.name,
            file,
            file.name
        )

        // axios.post("http://localhost:8080",formdata)
    }
  return (
    <>
      <div className='file-card'>
        <div className="file-inputs">
            <input type="file" onChange={uploadHandler}/>
            <button>
                Upload
            </button>
        </div>
        <p className='main'>Support Files</p>
        <p className='info'>JPG,PDF,PNG</p>
      </div>
    </>
  )
}

export default FileUpload
