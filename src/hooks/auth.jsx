import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"


export const AuthContext = createContext({})

const AuthToken = "PERSESENOL"

function AuthProvider({children}){

    const [address, setAddress] = useState("")
    const [mails, setMails] = useState([]) 


    async function createSession(){
		const response= await api.get(`/${AuthToken}?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D`)

        localStorage.removeItem("@dropmail:session_id")
        localStorage.setItem("@dropmail:session_id",response.data.data.introduceSession.id)
        localStorage.removeItem("@dropmail:active_mail")
        localStorage.removeItem("@dropmail:mail_counter")



        fetchSession()
	}

    async function fetchSession(){
        const savedSession = localStorage.getItem("@dropmail:session_id")

        const response = await api.get(`/${AuthToken}?query=query%20(%24id%3A%20ID!)%20%7Bsession(id%3A%24id)%20%7B%20addresses%20%7Baddress%7D%2C%20mails%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%20%7D&variables=%7B%22id%22%3A%22${savedSession}%22%7D`)
        console.log(response.data.data)
        if(response.data.data.session==null){
            createSession()
        }else{
            setMails(response.data.data.session.mails)
            setAddress(response.data.data.session.addresses[0].address)
        }
             
    }

    async function refreshMail(){
        console.log("REFRESHED")

        const savedSession = localStorage.getItem("@dropmail:session_id")

        const response = await api.get(`/${AuthToken}?query=query%20(%24id%3A%20ID!)%20%7Bsession(id%3A%24id)%20%7B%20addresses%20%7Baddress%7D%2C%20mails%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%20%7D&variables=%7B%22id%22%3A%22${savedSession}%22%7D`)
        console.log(response.data.data)

        setMails(response.data.data.session.mails)
    }

    useEffect(()=>{
        fetchSession()
    },[address])

    return(
        <AuthContext.Provider value={{ 
                                        address,
                                        mails,
                                        refreshMail
                                    }}> 
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}




export {AuthProvider, useAuth}