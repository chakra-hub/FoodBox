import { createContext } from "react"
const UserContext = createContext({
    user:{
        name:"Chakradhar Pradhan",
        email:"chakra_hub@gmail.com"
    }
})

export default UserContext