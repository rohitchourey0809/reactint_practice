import React from 'react'
import { useState } from 'react'
import FileList from './FileList'
import FileUpload from './FileUpload'

const UploadComp = () => {
    const [files,setFiles] = useState([{
        name: "myFile.pdf"
    }])

    const removeFile = (filename)=>{
        setFiles(files.filter(file=>file.name !== filename))
    }

    console.log("UplloadFliles",files)
  return (
    <div className='Upload'>
      <p className='title'>Upload File</p>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
      <FileList files={files} removeFile={removeFile}/>
    </div>
  )
}

export default UploadComp
