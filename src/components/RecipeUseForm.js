import { useState } from 'react'

const useForm = (recipe) => {
    var [val, setval] = useState(recipe);
    return [val, (event) => {
        setval({
            ...val,[event.target.name]:event.target.value
            
        })
    }]
}

export default useForm
