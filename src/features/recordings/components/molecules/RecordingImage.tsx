type RecordingImageProps = {
    image: string;
} 
export function RecordingImage ({image} : RecordingImageProps) {
    return (
      <img className="object-cover w-full h-40" src={image} />
    )
}