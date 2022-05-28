import { useEffect, useState } from "react"

const useTools = () => {
    const [tools, setTools] = useState();
    useEffect(() => {

        fetch('https://immense-caverns-52550.herokuapp.com/tools')
            .then(ref => ref.json())
            .then(data => setTools(data))
    }, [])
    return [tools, setTools];
}
export default useTools;