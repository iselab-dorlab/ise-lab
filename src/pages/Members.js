import React from 'react';

const TeamMember = ({ imgSrc, links, name, position }) => (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div className="team-member">
            <div className="member-img">
                <img src={imgSrc} className="img-fluid" alt={name} />
                <div className="social">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                            <i className={link.iconClass}></i>
                        </a>
                    ))}
                </div>
            </div>
            <div className="member-info">
                {/* <a className="post-link" href={name.split(' ').join('-').toLowerCase() + '.md'}>{name}</a> */}
                <a className="post-link">{name}</a>

                <span>{position}</span>
            </div>
        </div>
    </div>
);

// Main component
const Member = () => {
    const professors = [
        {
            imgSrc: 'assets/img/members/buithimaianh.jpg',
            links: [
                { href: 'https://scholar.google.com/citations?user=aZosWNYAAAAJ&hl=en&oi=ao', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: 'https://soict.hust.edu.vn/ts-bui-thi-mai-anh.html', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Bùi Thị Mai Anh',
            position: 'Giảng viên, Khoa Khoa học Máy tính, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/buiquoctrung.jpg',
            links: [
                { href: 'https://scholar.google.com/citations?user=vxFDCLUAAAAJ&hl=en&fbclid=IwY2xjawEa6ghleHRuA2FlbQIxMAABHRxdg3lU5A-j7v-lxk6CF2HZEiQzrWbwcFIlGHXNfDm_XQqxv0HAbZz3ig_aem_hKthW4wIc230sUNS7R2Png', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: 'https://soict.hust.edu.vn/ts-bui-quoc-trung.html', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Bùi Quốc Trung',
            position: 'Giảng viên, Khoa Khoa học Máy tính, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/PhuongNguyen.png',
            links: [
                { href: 'https://scholar.google.com/citations?user=vxFDCLUAAAAJ&hl=en', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: 'https://www.disim.univaq.it/ThanhPhuong', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Nguyễn Thanh Phương',
            position: 'Giáo sư, Khoa Khoa học Máy tính, Đại học L’Aquila, Italy'
        },
    ];

    const phdStudents = [
        {
            imgSrc: 'assets/img/members/buithimaianh.jpg',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: 'https://soict.hust.edu.vn/ts-bui-thi-mai-anh.html', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Bùi Thị 1',
            position: 'Khoa Khoa học Máy tính, Đại học Bách khoa Hà Nội'
        },
        // Add more PhD student objects here
    ];

    const masterStudents = [
        {
            imgSrc: 'assets/img/members/buithimaianh.jpg',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: 'https://soict.hust.edu.vn/ts-bui-thi-mai-anh.html', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Bùi Thị 11',
            position: 'Khoa Khoa học Máy tính, Đại học Bách khoa Hà Nội'
        },
        // Add more master student objects here
    ];

    const alumni = [
        {
            imgSrc: 'assets/img/members/nguyentramy.jpg',
            links: [
                { href: 'https://scholar.google.com/citations?user=glGlmu0AAAAJ&hl=en', iconClass: 'fa-brands fa-google-scholar' },
                { href: 'https://www.linkedin.com/in/tramy96tq/', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Nguyễn Trà My',
            position: 'Thạc sĩ, Khoa Khoa học Máy tính, Đại học Chung-Ang, Hàn Quốc'
        },
        {
            imgSrc: 'assets/img/members/thien.jpg',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Nguyễn Đức Thiên',
            position: 'Founder Codese - Code đi đừng sợ, Project Manager at Sotatek, JSC'
        },
        {
            imgSrc: 'assets/img/members/dinh.jpg',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Trần Thị Dinh',
            position: 'PhD student at GSSI, Italia'
        },
        {
            imgSrc: 'assets/img/members/hoanh.jpg',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Hồ Anh',
            position: 'PhD Student at Melbourne'
        },
    ];

    return (
        <section id="members" className="section content-background">
            <div className="container section-title">
                <h2>Team members</h2>
            </div>

            <div className="container section-title">
                <h3>Professor</h3>
                <div className="row gy-4">
                    {professors.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>

                <br />
                <h3>PhD Students</h3>
                <div className="row gy-4">
                    {phdStudents.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>

                <br />
                <h3>Master Students</h3>
                <div className="row gy-4">
                    {masterStudents.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>

                <br />
                <h3>Alumni</h3>
                <div className="row gy-4">
                    {alumni.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Member;
