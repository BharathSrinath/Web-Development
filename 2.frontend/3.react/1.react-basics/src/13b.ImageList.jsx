import ImageShow from "./13c.ImageShow"
import "./13b.ImageList.css"
export default function ImageList({images}){
    const renderedImages = images.map((image) => {
        return <ImageShow image={image} key={image.id}/>
    })
    return (
        <div className="image-list">
            {renderedImages}
        </div>
    )
} 