
function GradientBackground({children}){
    return(
        <div className="min-h-screen w-full bg-gradient-to-br from-[#FE3F8B] via-[#CC5FC1] to-[#9D7FF7] flex items-center justify-center">
            {children}
        </div>
    );
}
export default GradientBackground;