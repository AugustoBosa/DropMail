
import { useEffect,useState } from "react"
import { useAuth } from "../../hooks/auth"

import { FiCopy, FiRefreshCw, FiAlertCircle, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi"

const baseMail = {
		fromAddr:"Hello",
		headerSubject:"Welcome",
		text:`Hi user,
Your temp e-mail address is ready.
If you need help read the project documentation and do not hesitate to contact us.

All the best,
DropMail`
	}


export function Home(){

	const { address, mails, refreshMail } = useAuth()

	const [activeMail, setActiveMail] = useState({})
	const [refreshTime, setRefreshTime] = useState(15)
	const [progressPercentage, setProgressPercentage] = useState(100)


	

// console.log(circle,	radius,	circumference)


	function openMail(mail){
		setActiveMail(mail)
		localStorage.removeItem("@dropmail:active_mail")
		localStorage.setItem("@dropmail:active_mail",JSON.stringify(mail))

	}

	async function copyAddressToClipboard(){
		try {
		  await navigator.clipboard.writeText(address)
		} catch (error) {
		  alert('Failed to copy address')
		}
	}

	function handleRefreshMail(){
		refreshMail()

	}

	function notifyUser(notificationText = "You have new mail!") {
		if (!("Notification" in window)) {
		 	alert("Browser does not support desktop notification");
		} else if(Notification.permission === "granted"){
		 	const notification = new Notification(notificationText)
		} else if (Notification.permission !== "denied"){
			handlePermissionRequest()
		}
	}

	function handlePermissionRequest(){
		Notification.requestPermission()
	}
	  

	function setProgress(percent) {
		let circle = document.querySelector('circle');
		let radius = circle.r.baseVal.value;
		let circumference = radius * 2 * Math.PI;

		circle.style.strokeDasharray = `${circumference} ${circumference}`;
		
		const offset = circumference - percent / 100 * circumference;

		circle.style.strokeDashoffset = circumference-offset;

		
	}

	useEffect(()=>{
		setProgress(progressPercentage)	
	},[progressPercentage])

	useEffect(() => {
		let time = 15
		const interval = setInterval(() => {
			if(time<=0){
				refreshMail()
				time=15
			}
		
		time=time-0.01

		setRefreshTime(time.toFixed(2))

		setProgressPercentage((time / 15) * 100)
 

		}, 10);
		
	

		return () => {
			clearInterval(interval);
		}
	}, [mails]);
	
	useEffect(()=>{
		let lastOpenedMail = JSON.parse(localStorage.getItem("@dropmail:active_mail")) || baseMail
		setActiveMail(lastOpenedMail)

		if(Notification.permission !== "denied"){
			handlePermissionRequest()
		}

	},[])

	useEffect(() => {	
		const totalMails = localStorage.getItem("@dropmail:mail_counter") || 0
		if(mails.length>totalMails){
			notifyUser()	
			localStorage.removeItem("@dropmail:mail_counter")
			localStorage.setItem("@dropmail:mail_counter",mails.length)
	}}, [mails]);



	return(
		
		<main className="h-[95%] w-[95%] flex flex-col justify-center overflow-hidden ">
			
				<section className="h-[15%] flex flex-col justify-center items-center w-full gap-2  sm:h-1/4 " >
					<div  className="w-full flex flex-col justify-center mx-1/2 sm:w-1/2" >
						<span className="w-full text-left font-light text-xs sm:text-sm">Your temporary e-mail address</span>
						<div className="flex border w-full p-0.5 rounded-md " >
							<h3 className="w-3/4 text-center font-semibold">{address || "Setting up Temporary Mail"}</h3>
							<button onClick={copyAddressToClipboard} className="w-1/4 flex justify-center align-middle gap-2 border-l"> 
								<FiCopy className="h-full"/>
								Copy
							</button>
						</div>
					</div>

					<div className="flex items-center justify-center gap-2">
						<span className="text-gray-500 text-sm">Autorefresh in </span>
					
						<div className="relative">
							<svg className="progress-ring h-6 w-6 -rotate-90">
								<circle 
									className="progress-ring__circle stroke-blue-500"
									strokeWidth="1"
									fill="transparent"
									r="10"
									cx="12"
									cy="12"
								/>

							</svg>
							<span  className="flex items-center justify-center rounded-full  h-6 w-6 font-semibold text-gray-500 text-xs absolute top-0 right-0">
								{Number(refreshTime).toFixed(0)}
							</span>
						</div>




						<button onClick={handleRefreshMail} className="flex items-center justify-center gap-1">
							<div className="flex items-center justify-center rounded-full border border-gray-400 h-6 w-6" >
								<FiRefreshCw className="stroke-gray-400 h-4 w-4"/>
							</div>
							<span className="text-gray-400 font-semibold text-xs">Refresh</span>
						</button>

					</div>
				</section>

				<section className="h-full flex justify-left items-center w-full border rounded-md ">
					

					<div className="flex flex-col h-full w-1/6 border-r-2 sm:w-1/3">
						<h1 className="flex border-b text-left h-9 items-center p-2 text-base">Inbox</h1>

						<nav className="flex flex-col h-full  overflow-y-auto">

							<div className="hover:cursor-pointer border-b p-2 h-20"
									onClick={()=>openMail(baseMail)}>
									<h2 className="w-full truncate font-bold text-base ">{baseMail.fromAddr}</h2>
									<h3 className="w-full truncate text-sm text-blue-500 font-semibold">{baseMail.headerSubject}</h3>
									<p className="w-full text-xs truncate">{baseMail.text}</p>
							</div>

							{mails.map((mail, index) => (
								<div className="hover:cursor-pointer border-b p-2 h-20"
									key={index}
									onClick={()=>openMail(mail)}>
									<h2 className="w-full truncate font-bold text-base ">{mail.fromAddr}</h2>
									<h3 className="w-full truncate text-sm text-blue-500 font-semibold">{mail.headerSubject}</h3>
									<p className="w-full text-xs truncate">{mail.text}</p>
								</div>
							))}
						</nav>

					</div>

					<div className="w-full h-full bg-gray-50 ">
						<h1 className="flex border-b text-left h-9 items-center p-2 font-bold text-base ">			
							{activeMail.fromAddr}
						</h1>

						<div className="w-full h-full p-2">
							<h2 className="font-bold text-base pl-1">{activeMail.headerSubject}</h2>
							<pre className="p-2 border bg-white rounded whitespace-pre-wrap font-sm relative">
								{activeMail.text}

							{activeMail.downloadUrl &&
								<a target="_blank" href={activeMail.downloadUrl} className="flex justify-center items-center border rounded-full h-6 w-6 border-gray-600 absolute right-1 bottom-1">
									<FiDownload/>
								</a>
							
							}
								
							</pre>
						
						</div>

					</div>

				</section>

				<section className="flex justify-between h-5 px-5">
				<span className="flex gap-2 items-center justify-center text-xs"> developed by: Augusto Bosa
					<a className="h-5 flex items-center" target="_blank" href="https://www.linkedin.com/in/augusto-bosa/">
                            <FiLinkedin className=" stroke-blue-400 fill-blue-400"/>
                    </a> 
					<a className="h-5 flex items-center" target="_blank" href="https://github.com/AugustoBosa">
                            <FiGithub className=" stroke-purple-300 fill-purple-300"/>
                    </a> 
				</span>

				<button className="txt-xs font-light flex gap-1 items-center" onClick={handlePermissionRequest}>
					<FiAlertCircle /> Notifications
				</button>
			</section>				
				
		</main>
	)
}