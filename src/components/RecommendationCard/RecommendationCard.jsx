function RecommendationCard({recommendation}){
    
   
    
    return(
        <div className="max-w-md mx-auto mt-6
        rounded-3xl bg-white/20 backdrop-blur-lg shadow-xl border 
        border-white/20 p-6">
         
            <h2 className="text 2xl font-bol mb-4">🍃 Zephyr Recommends </h2>
            
            <p className="leading-7">{recommendation}</p>

            <p className="text-sm mt-6 opacity-70">✨ Personalized by Zephyr AI</p>
        
        </div>
    );
}

export default RecommendationCard;