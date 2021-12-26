import Vianney from "../../../../assets/vianney.jpg";
import Ali from "../../../../assets/ali.jpg";
import Samy from "../../../../assets/about3.jpg";
import Mike from "../../../../assets/about4.jpg";

import "./team.css";

const data = [
  {
    id: `2_Guest`,
    name: 'Mike',
    description: 'THE CAPTAIN',
    img: Mike,
    insta: "https://www.instagram.com/michael_monin"
  },
  {
    id: `1_Guest`,
    name: 'Vianney ',
    description: 'THE PILOT',
    img: Vianney,
    insta: "https://www.instagram.com/vianney_merian"
  },
  {
    id: `3_Guest`,
    name: 'Samy',
    description: 'THE ASTRONAUT',
    img: Samy,
    insta: "https://www.instagram.com/samybennani"
  },
  {
    id: `4_Guest`,
    name: 'Ali',
    description: 'THE GENIUS',
    img: Ali,
    insta: "https://www.instagram.com/ill_lawi"
  }
]

function Team() {
  return (
    <>
      <section id="team" className="section--spacing pb-6">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 team--content mb-4">
              <h6 className="text-uppercase">Meet the crew</h6>
              <h2 className="d-block text-uppercase f-akira">
                All stars team
              </h2>
            </div>
            <div className="col-12 team--wrapper pt-3 pt-lg-5">
              {data.map(({id,name,description,img,insta}) => (
                <div key={id} className='team--item col-lg-3 col-6'>
                  <img src={img} alt={name} loading="lazy" />
                  <h3 className='mt-3 mb-2 fw-bold f-tt-medium'>{name}</h3>
                  <h6>{description}</h6>
                    
                    { name === 'x' && (
                      <a className="" href={insta} target="_blank"rel="noreferrer">
                      <i className="fab fa-instagram"></i>
                      </a>
                    )} 
                    
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
