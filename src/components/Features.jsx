import { features } from "../data/ProjectData";

function Features(){
    return(
        <section id="features">
            <h2>Why businesses choose PayEase</h2>
            <p className="features-subtext">Everything you need to move money with confidence</p>
            <div className="features-container">
                {features.map(feature => (
                    <div key={feature.id} className="features-card">
                        <span>{feature.icon}</span>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Features