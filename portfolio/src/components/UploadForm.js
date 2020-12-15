import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpg'];
    

    const handleChange = (e) => {
        let selected = e.target.file[0];

        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setFile('');
        }
        else {
            setFile(null);
            setError('Select a jpg or png file only'); //catch exception error for non jpg/png files
        }
    }

    return ( 
        <form>
            <label>
                <input type = "file" onChange = {handleChange}/>
                <span>+</span>
            </label>
           
            <div>
                { error && <div className = "error">{ error }</div>}
                { file && <div>{ file.name }</div>}
            </div>
        </form>
    )
}
export default UploadForm;