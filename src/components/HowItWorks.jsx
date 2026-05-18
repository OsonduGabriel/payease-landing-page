import { steps } from "../data/ProjectData";

function HowItWorks(){
    return(
        <section id="working">
            <h2>How PayEase works</h2>
            <p>Get started in 3 simple steps</p>
            <div className="steps-container">
                {steps.map(step => (
                    <div key={step.id} className="steps-card">
                        <p>{step.step}</p>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowItWorks