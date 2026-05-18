import { useState } from "react";
// import emailjs from "@emailjs/browser"

function SignUp(){

    const [formData, setformData] = useState({
        Name : "",
        Email: "",
        phone: "",
        Business_Name: "",
        Password: "",
        Confirm_Password: ""
    })

    const [isSubmitted, setIsSubmitted]  = useState(false)
    const [showToast, setShowToast] = useState(false)

    const [status, setStatus] = useState("")

    function handleChange(event){
        // ..formData spreads all the fields. [event.target.name]overwrites only the input that changed
        setformData({...formData, [event.target.name]: event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault() //stops page loading
            if(formData.Password !== formData.Confirm_Password){
                setStatus("error")
                return //stop here if they're not the same
            }
        setStatus("sending")

        try {
        // await emailjs.send(
        //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
        //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        //     formData,
        //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        // )
            setStatus("success")
            setIsSubmitted(true)
            setShowToast(true)
            setTimeout(() => {setShowToast(false)}, 3000)
            handleReset()
        } catch(error) {
            console.error(error)
            setStatus("error")
        } finally{
            setTimeout(() => setStatus(""), 4000) //wipe status message after 4s when done with everything
        }
    }

    function handleReset(){
        setformData({
            Name : "",
            Email: "",
            phone: "",
            Business_Name: "",
            Password: "",
            Confirm_Password: ""
        })
    }

    return(
        <section id="signup">
            {showToast && <div className="toast">Account Successfully created!!</div>}
            {isSubmitted ? (
                <div className="success-message"><h2>Welcome to PayEase!</h2> <p>We'll be in touch soon.</p></div>
            ) : (
                <div className="form_section">
                <h2>Create Your Account</h2>
                <p className="form-subtext">Join 5000+ business owners today. Free to sign up</p>
                <form onSubmit={handleSubmit} className="signForm">
                    <div className="input_box">
                        <input name= "Name" value={formData.Name} onChange={handleChange} type="text" placeholder="Enter your Full names" className="input_data" aria-label="Name" required />
                        <div className="input_underline"></div>
                    </div>
                    <div className="input_box">
                        <input name= "Email" value={formData.Email} onChange={handleChange} type="email" placeholder="Email address" className="input_data" aria-label="Email" required />
                        <div className="input_underline"></div>
                    </div>
                    <div className="input_box">
                        <input name= "phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Your Phone Number" className="input_data" aria-label="phone" required />
                        <div className="input_underline"></div>
                    </div>
                    <div className="input_box">
                        <input name= "Business_Name" value={formData.Business_Name} onChange={handleChange} type="text" placeholder="Your Business Name" className="input_data" aria-label="Business Name" />
                        <div className="input_underline"></div>
                    </div>
                    <div className="input_box">
                        <input name= "Password" value={formData.Password} onChange={handleChange} type="password" placeholder="Password" className="input_data" aria-label="Password" required />
                        <div className="input_underline"></div>
                    </div>
                    <div className="input_box">
                        <input name= "Confirm_Password" value={formData.Confirm_Password} onChange={handleChange} type="password" placeholder="Confirm Password" className="input_data" aria-label="Confirm Password" required />
                        <div className="input_underline"></div>
                    </div>
                    <br />
                        <input type="submit" className="submit" value="Get Started Free" disabled={status === "sending"} />
                        {status === "sending" && <p className="form_status sending">Creating your account ......</p>}
                        {status === "success" && <p className="form_status success">Account created successfully</p>}
                        {status === "error" && <p className="form_status error">Something went wrong. Please try again</p>}
                        <button type="button" className="reset" onClick={handleReset}>Clear form</button>
                </form>
            </div>
            )}
            
        </section>
    )
}
export default SignUp