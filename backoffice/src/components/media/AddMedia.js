import React, {useEffect, useState} from 'react';
import Header from "../Header";

function AddMedia() {

    const [selectedFile, setSelectedFile] = useState();
    const [imageList, setImageList] = useState();

    const onFileUpload = () => {
        if (!selectedFile) {
            alert("dosya seçili değil");
            return;
        }


        const data = new FormData();
        data.append('file', selectedFile);
        data.append('imageName', selectedFile.name);

        fetch("http://localhost:8080/media/add", {
            method: 'POST',
            mode: 'no-cors',
            body: data
        }).then(response => response.text())
            .then(result => console.warn("result", result))
            .catch(error => console.warn('error', error))

    };
    const onImageChange = event => {
        console.warn("event:", event);
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }

    }
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
        };
        fetch("http://localhost:8080/media/list", requestOptions)
            .then(response => response.text())
            .then(result => setImageList(JSON.parse(result)))
            .catch(error => console.log('error', error))
    }, [selectedFile]);

console.log("imageList",imageList);
    const getFiles = () => {
        if (!imageList) {
            return null;
        }

        let list = [];
        imageList.map(y => {
            list.push(
                <img src={'data:image/png;base64,' + y.fileContent} key={y.mediaId} width="150" style={{margin: 10}}/>
            )
        });
        return (
            <ul>
                {list}
            </ul>
        );
    }
    return (
        <div>
            <Header/>
            <br/>
            <div className="container">
                <div className="col-sm-12 mt-2">

                    <div className="row">
                        <div className="card col-sm-4">
                            <div className="card-header"> Add Media</div>
                            <div className="card-body">
                                <input className="btn btn-info" type="file" name="file" style={{paddingTop: 20 , paddingBottom:"20"}}
                                       onChange={(e) => onImageChange(e)}/><br/><br/>
                                <button  className="btn btn-outline-warning" style={{paddingTop: 15}} onClick={() => onFileUpload()}>Upload Image
                                </button>

                            </div>
                        </div>
                        <div className="card col-sm-8">
                            {getFiles()}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );

}

export default AddMedia;