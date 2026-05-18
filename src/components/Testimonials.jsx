import { testimonials } from "../data/ProjectData";
import { FaStar } from "react-icons/fa";

function Testimonials(){
    return(
        <section id="testimonials">
            <h2>What business owners are saying</h2>
            <div className="testimonials-container">
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="testimonials-card">
                        <div className="star-rating">
                            {Array.from({length: testimonial.rating}).map((_, index) => (
                                <FaStar key={index} color="#f5a623" />
                            ))}
                        </div>
                        <p className="testimonial-quote">{testimonial.quote}</p>
                        <p className="testimonial-name">{testimonial.name}</p>
                        <p className="testimonial-occupation">{testimonial.occupation}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Testimonials