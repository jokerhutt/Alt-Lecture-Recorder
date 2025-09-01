import { useNavigate } from "react-router-dom";

type RecordingImageProps = {
    image: string;
} 
export function RecordingImage ({image} : RecordingImageProps) {
    
    const navigate = useNavigate()

    return (
      <img onClick={() => navigate("/recordings/1")} className="object-cover hover:brightness-75 hover:cursor-pointer w-full h-40" src={image} />
    )
}