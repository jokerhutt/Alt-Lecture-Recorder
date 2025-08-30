type UserProfileIconProps = {
    userPfp?: string;
    userName: string;
}

export function UserProfileIcon ({userPfp, userName}: UserProfileIconProps) {
    return (
        <div className="w-10 h-10 max-h-10 max-w-10 rounded-xl flex items-center justify-center bg-red-400 border border-black">
            {userPfp ? ( 
                <img src={userPfp}/>
             ) : (
            <p className="text-white">DG</p>
            )}
        </div>
    )
}