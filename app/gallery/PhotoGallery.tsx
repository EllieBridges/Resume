import Image from "next/image"

const PhotoGallery = () => {
    return(
        <div className="relative grid grid-cols-3 gap-4">
            <div className="..."><Image src='/profilePic.png' alt='me' fill={true}/></div>
            <div className="..."><Image src='/profilePic.png' alt='me' fill={true}/></div>
            <div className="..."><Image src='/profilePic.png' alt='me' fill={true}/></div>
            <div className="col-span-2 ..."><Image src='/profilePic.png' alt='me' fill={true}/></div>
            <div className="...">05</div>
            <div className="...">06</div>
        </div>
    )
}

export default PhotoGallery;