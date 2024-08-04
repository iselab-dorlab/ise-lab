import React from 'react';


const Contact = () => {
  return (
    <section id="contact" className="section content-background">
      <div className="container section-title">
        <h2>Contact</h2>
      </div>

      <div className="container">
        <div className="contact-info">
          <p>
            If you are a student interested in joining or collaborating with our research group, or if you have any questions, please contact us at 
            <a href="mailto:iselab.bkai@gmail.com"> iselab.bkai@gmail.com</a>.
          </p>
        </div>
        <div className="recruitment-info">
          <b>Recruiting Students for the Research Group:</b>
          <p>
            The Intelligent Software Technology Research Group (RISE) is looking for students interested in research in the fields of Artificial Intelligence or Software Engineering. Apply to join us!
          </p>
        </div>
        <div className="opportunities-benefits">
          <b>Opportunities & Benefits:</b>
          <ul>
            <li>Research on interesting topics in Software Engineering and Artificial Intelligence.</li>
            <li>Guidance and collaboration with top professors and researchers from HUST, Melbourne University, Singapore Management University, University of Adelaide.</li>
            <li>Work in a professional, open, and experienced environment.</li>
            <li>Opportunities to publish in leading conferences in Software Engineering and Artificial Intelligence.</li>
            <li>Support for pursuing graduate programs at prestigious universities worldwide.</li>
          </ul>
        </div>
        <div className="duties">
          <b>Duties:</b>
          <p>
            Receive guidance from experienced mentors and conduct research on the following topics:
          </p>
          <ul>
            <li>Artificial Intelligence in Software Engineering</li>
            <li>Large Language Models for Code Generation and Analysis</li>
            <li>Artificial Intelligence in Software Security</li>
          </ul>
          <p>
            As a member of the group, you will be required to:
          </p>
          <ul>
            <li>Complete tasks assigned by mentors</li>
            <li>Review relevant scientific publications</li>
            <li>Implement solutions</li>
            <li>Report weekly</li>
            <li>Communicate and coordinate with stakeholders</li>
            <li>Plan and participate in project meetings</li>
          </ul>
        </div>
        <div className="requirements">
          <b>Requirements:</b>
          <ul>
            <li>Passion for research or plans for graduate studies</li>
            <li>Interest in Software Engineering or Artificial Intelligence</li>
            <li>English skills: reading and writing (fluency is a plus)</li>
          </ul>
        </div>
        <div className="office-address">
          <b>Office:</b> Hanoi University of Science and Technology, Building B1, Room 1001, Tran Dai Nghia Street, Hai Ba Trung District, Hanoi, Vietnam.
        </div>
      </div>
    </section>
  );
};

export default Contact;
