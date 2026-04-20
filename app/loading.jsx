
import React from 'react'

const Loader = () => {
    return (
        <div className="flex w-full h-screen flex-col items-center justify-center gap-3">
            {/* Optional: Add a simple CSS spinner for better UX */}
            <div className="w-10 h-10 border-4 border-t-yellow-400 border-white/20 rounded-full animate-spin" />

            <p className="animate-pulse sm:text-xl text-md transition-all font-bold text-white whitespace-nowrap drop-shadow-lg">
                Loading Experience...
            </p>
        </div>
    )
}

export default React.memo(Loader);