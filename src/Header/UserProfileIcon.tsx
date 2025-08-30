type UserProfileIconProps = {
    userPfp?: string;
    userName: string;
    size?: string;
}

export function UserProfileIcon ({userPfp, userName, size="w-10 h-10 max-h-10 max-w-10"}: UserProfileIconProps) {
    return (
        <div className={` ${size} rounded-xl flex items-center justify-center bg-red-400 border border-black`}>
            {userPfp ? ( 
                <img src={userPfp}/>
             ) : (
            <p className="text-white">DG</p>
            )}
        </div>
    )
}