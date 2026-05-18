import { social } from "../data/ProjectData"
import { FaMoneyBill1Wave } from "react-icons/fa6";

function Footer(){
        return(
            <footer>
                <div>
                    <h1 className="footer-title">PayEase <FaMoneyBill1Wave className="footer-money-icon"/></h1>
                    <p>Send Money Instantly, Grow Your Business Faster.</p>
                </div>
                <div className="footer-icons">
                    {social.map(icon => (
                        <a key={icon.id} href= {icon.href}> {icon.label} </a>
                    ))}
                </div>
                <div className="footer-items">
                    <div>
                        <h2>Company</h2>
                        <p>About Us</p>
                    </div>
                    <div>
                        <h2>Product</h2>
                        <a href="#features">Features</a>
                        <p>Security</p>
                    </div>
                    <div>
                        <h2>Support</h2>
                        <a href="#signUp">Contact Us</a>
                        <p>Get Help</p>
                    </div>
                </div>
                <div className="footer-tag">
                    <p>&copy; 2025 PayEase &middot; Privacy Policy &middot; Terms of Service</p>
                </div>
            </footer>
        )
}
export default Footer