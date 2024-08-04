import React from 'react';



const PublicationItem = ({ link, title, authors, conference, year, location, pageRange, doi }) => (
  <li>
    <a className="post-link" href={link}>{title}</a>
    <br />
    {authors}, <em>{conference}</em>, {location}, {year}, pp. {pageRange}, doi: {doi}.
  </li>
);


const Publication = () => {
  const journalArticles = [
    {
      link: 'https://ieeexplore.ieee.org/abstract/document/10013860',
      title: 'Separation of Concerns in Extended Epidemiological Compartmental Models',
      authors: 'Bùi Thị Mai Anh, Dương Việt Anh, Bùi Quốc Trung',
      conference: '2022 RIVF International Conference on Computing and Communication Technologies (RIVF)',
      year: '2022',
      location: 'Ho Chi Minh City, Vietnam',
      pageRange: '677-682',
      doi: '10.1109/RIVF55975.2022.10013860'
    },
    // Add more journal articles here
  ];

  const conferenceProceedings = [
    {
      link: 'https://ieeexplore.ieee.org/abstract/document/10013860',
      title: 'Separation of Concerns in Extended Epidemiological Compartmental Models',
      authors: 'Bùi Thị Mai Anh, Dương Việt Anh, Bùi Quốc Trung',
      conference: '2022 RIVF International Conference on Computing and Communication Technologies (RIVF)',
      year: '2022',
      location: 'Ho Chi Minh City, Vietnam',
      pageRange: '677-682',
      doi: '10.1109/RIVF55975.2022.10013860'
    },
    // Add more conference proceedings here
  ];

  return (
    <section id="publication" className="section content-background">
      <div className="container section-title">
        <h2>Publication</h2>
      </div>

      <div className="container">
        <h3>Journal articles</h3>
        <ul>
          {journalArticles.map((item, index) => (
            <PublicationItem key={index} {...item} />
          ))}
        </ul>

        <h3>Conference Proceedings</h3>
        <ul>
          {conferenceProceedings.map((item, index) => (
            <PublicationItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Publication;
