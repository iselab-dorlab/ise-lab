import React from 'react';

const ResearchTopic = () => {
    const researchTopics = [
        {
            title: "Artificial Intelligence in Software Engineering",
            description: "Exploring the application of AI techniques in software development and engineering practices.",
            image: "assets/img/topics/ai-software-engineering.jpg",
            link: "https://github.com/username/ai-software-engineering" 
        },
        {
            title: "Large Language Models for Code Generation and Analysis",
            description: "Researching the use of large language models to generate and analyze source code.",
            image: "assets/img/topics/language-models.jpg",
            link: "https://github.com/username/language-models"
        },
        {
            title: "AI in Software Security",
            description: "Investigating how AI can enhance software security and protect against various cyber threats.",
            image: "assets/img/topics/ai-security.jpg",
            link: "https://github.com/username/ai-security"
        },
        {
            title: "Human-Centric AI Systems",
            description: "Developing AI systems that are designed with a focus on user experience and human interaction.",
            image: "assets/img/topics/human-centric-ai.jpg",
            link: "https://github.com/username/human-centric-ai"
        }
    ];

    return (
        <section id="research-topic" className="section content-background">
            <div className="container section-title">
                <h2>Research Topics</h2>
            </div>

            <div className="container">
                <ul className="research-topics-list">
                    {researchTopics.map((topic, index) => (
                        <li key={index} className="research-topic-item">
                            <div className="research-topic-content">
                                <a href={topic.link} target="_blank" rel="noopener noreferrer" className="post-link">
                                    <h3>{topic.title}</h3>
                                </a>
                                <p>{topic.description}</p>
                            </div>
                            <img src={topic.image} alt={topic.title} className="research-topic-image" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default ResearchTopic;
