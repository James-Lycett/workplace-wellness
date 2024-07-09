import { useState, useEffect } from 'react'

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(null)

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkIsMobile()

        window.addEventListener("resize", checkIsMobile)

        return () => window.removeEventListener("resize", checkIsMobile)
    }, [])

    return isMobile
}

export default useIsMobile
