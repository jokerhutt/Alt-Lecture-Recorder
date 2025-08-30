import { HeroIcon, type IconName } from "../commons/HeroIcon"

type HomeCardProps = {
    name: string,
    icon: IconName
}
export function HomeCard ({name, icon}: HomeCardProps) {

    return (
        <div className="w-full text-white gap-2 h-36 flex justify-between p-8 rounded-xl items-center bg-leidenBlue">
            <div className="w-full h-full flex items-center">
                <p className="font-bold text-3xl">{name}</p> 
            </div>
            <div className="w-20 h-full flex justify-center items-center">
                <HeroIcon className="h-10" iconName={icon}/>
            </div>
        </div>
    )

}