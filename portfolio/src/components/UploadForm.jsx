import React, { useState } from 'react';
import ProgressBar from './progressbar';
import { Container, Button, Row, Col } from 'react-bootstrap';


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];
   
    const hiddenFileInput = React.useRef(null);
    
    const handleUpload = (e) => {
        hiddenFileInput.current.click();
    }
    const handleChange = (e) => {

        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');

        }
        else {
            setFile(null);
            setError('Select a jpg or png file only'); //catch exception error for non jpg/png files
        }

    };


    return ( 
        <Container className="text-center">
            <form>
                <Button onClick={handleUpload}>
                    Upload an Image
                </Button>
                <input 
                    type="file" 
                    style ={{display: 'none'}}
                    ref={hiddenFileInput}
                    onChange={handleChange}
                />
            
                <div className ="text-white">
                    <Container className="p-50">

                        { error && <div className="error">{ error }</div>} 
                        { file && <div>{ file.name }</div> }
                        { file && <ProgressBar file={file} setFile={setFile} /> }    
                      
                    </Container>
   
                </div>
            </form>
        </Container>
    

     
    )
}
export default UploadForm;