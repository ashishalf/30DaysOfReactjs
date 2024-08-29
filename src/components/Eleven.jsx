//Upload Image

import React, { useState } from 'react'

function Eleven() {
    const [file, setFile] = useState(null)

    const handleImage = (e)=>{
        const selectedFile = e.target.files[0]
        setFile(selectedFile)
    }

  return (
    <div>
        <input type="file" accept='image/*' onChange={handleImage} />
        {file && <img src={URL.createObjectURL(file)} alt='uploaded'/>}
    </div>
  )
}

export default Eleven