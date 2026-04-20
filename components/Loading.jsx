
"use client"
import React from 'react'
import { Html } from '@react-three/drei'

/**
 * Optimizations:
 * 1. Removed h-screen/w-full: Html center already handles centering.
 * 2. Added pointer-events-none: Ensures the loader doesn't block 3D clicks once fading out.
 * 3. Simplified DOM structure: Better for the R3F render loop.
 */
const Loading = () => {
    return (
        <Html
            center
            as="div"
            className="pointer-events-none select-none"
        >
            <div className="flex flex-col items-center justify-center gap-3">
                {/* Optional: Add a simple CSS spinner for better UX */}
                <div className="w-10 h-10 border-4 border-t-yellow-400 border-white/20 rounded-full animate-spin" />

                <p className="animate-pulse sm:text-xl text-md transition-all font-bold text-white whitespace-nowrap drop-shadow-lg">
                    Loading Experience...
                </p>
            </div>
        </Html>
    )
}

export default React.memo(Loading); // Memoize to prevent unnecessary re-renders during 3D updates