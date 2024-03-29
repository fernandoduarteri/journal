

export const fileUpload = async ( file ) =>{
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dsodzbjjd/image/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react_jorunal');
    formData.append('file', file);

try {
    const respuesta = await fetch ( cloudUrl, {
        method: 'POST',
        body: formData
    }) ;

    if (respuesta.ok){
        const cloudResp = await respuesta.json();
        return cloudResp.secure_url
    }else{
        throw await respuesta.json();
    }
} catch (error) {
    console.log(error);
    throw error;
}
}


