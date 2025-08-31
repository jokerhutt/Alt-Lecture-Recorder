import { useNavigate } from "react-router-dom"

export function CoursesGrid ({}) {

    const navigate = useNavigate()


    return (
        <div className="grid grid-cols-1 gap-4">
            
            <div className="w-full h-20 max-h-20">
                <div onClick={() => navigate("courseId")} className="h-20 max-h-20">
                    <img className="object-contain h-40" src="https://images.shiksha.com/mediadata/images/articles/1709292573phpJapcky.jpeg"/>
                </div>
            </div>

        </div>
    )

}