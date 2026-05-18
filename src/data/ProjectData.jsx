import { FaMoneyBillTransfer, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin} from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";
import { RiCustomerService2Fill, RiSecurePaymentFill } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";

export const navLinks = [
    {id: 1, href: "#features", label: "Feature"},
    {id: 2, href: "#working", label: "How it works"},
    {id: 3, href: "#testimonials", label: "Testimonial"}
]

export const features = [
    {id:1, title: "Instant Transfers", icon:<FaMoneyBillTransfer />,description:"Money moves in seconds, not hours"},
    {id:2, title: "Zero Hidden Fees", icon:<BiSolidHide />,description:"See exactly what you pay before you send"},
    {id:3, title: "Send to Any Bank ", icon:<BsBank2 />,description:"Works with all Nigerian banks and mobile wallets"},
    {id:4, title: "Quick custom service ", icon:<RiCustomerService2Fill />,description:"24*7 accessible and quick resolution via online and physical customer service channels"},
    {id:5, title: "Secure transaction", icon:<RiSecurePaymentFill />,description:"PayEase combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims."}
]

export const steps = [
    {id:1, step:"01", title:"Create Your Account", description:"Create your PayEase account with your phone number in minutes"},
    {id:2, step:"02", title:"Fund Your Wallet", description:"Fund your PayEase wallet from any Nigerian bank instantly"},
    {id:3, step:"03", title:"Transfer Instantly", description:"Send money to anyone, any bank in seconds - any time, anywhere"}
]

export const testimonials = [
    {id:1, name:"Kemi Adeleke", occupation:"Caterer, Ajah", quote:"Fast, reliable and works with my GTBank account. I recommend PayEase to every business owner I know.", rating:5},
    {id:2, name:"Seun Afolabi", occupation:"Shoe seller, Computer Village", quote:"I was skeptical at first but the transparency of charges won me over. No surprises, ever.", rating:4},
    {id:3, name:"Fatima Usman", occupation:"Wholesale Dealer, Trade Fair", quote:"I receive payments from 4 different banks daily. PayEase handles all of them without any issue.", rating:4},
    {id:4, name:"Amina Bello", occupation:"Fabric Trader, Lagos Island", quote:"I paid my supplier in Kano within seconds. No delays, no stress. PayEase has changed how I run my business.", rating:5}
]

export const social = [
    {id:1, href:"#", label: <FaFacebook />},
    {id:2, href:"#", label: <FaYoutube />},
    {id:3, href:"#", label: <FaXTwitter />},
    {id:4, href:"#", label: <FaInstagram />},
    {id:5, href:"#", label: <FaLinkedin />}
]