import "./roadmap.css";

const roadmapData = [
  {
    id: 1,
    percent: "10%",
    subBold:
      " Phase 1: The beginning",
    content: `To us, the community comes first. The goal is to make our drop as successful as possible, to have the freedom to develop Shiba
Social Club. 

We will announce our drop release date once we are satisfied with the project’s quality and technical parts. We will also be working tirelessly with our community to guarantee our social media platforms are at a high aesthetic standard and create new concepts over time.`,
  },
  {
    id: 2,
    percent: "20%",
    subBold:
      "Club member exclusive merch unlocking!",
    content: `We're working with a high-end/quality manufacturer to release the first merch collection of the Shiba Social Club that will be available only for the holder. 

    Through careful and detailed design guidance, we will make sure to create unique statement items before, during, and after the launch of this drop. You can already see some of the pieces on our Shiba...`,
  },
  {
    id: 3,
    percent: "40%",
    subBold:
      "Receive your personal piece of art at home.",
    content: `We want to bring our concept to your home with a high-quality piece of art. Every holder (for more than 1 month) will receive a canva with their own NFT. After several talks with artists, we have decided to reward the holders of a legendary with a handmade painting from a talented, well-known artist. `,
  },
  {
    id: 5,
    percent: "50%",
    subBold:
      "Funding our first community project.",
    content: `We love the NFT space. It allowed us to do what we love and help us find you!
To keep that appreciation of the space going, we are going to introduce a Launchpad with $100K from our smart contract to fund it. 

As a member of the Shiba Social Club, YOU will have the opportunity to submit a project idea, and the DAO (Decentralized Autonomous Organization) that is created will vote on which project to launch! `,
  },
  {
    id: 6,
    percent: "70%",
    subBold:
      "Join the club! Be part of exclusive events around the world.",
    content: `As we all know, Shiba Social Club is exactly that: a social club! We want to hang out! So, we will be hosting IRL events for our holders. The first event will take place 1 month after the drop, and the community will vote to choose the location between different cities in the world.

After discussion with some of the most influential people in the NFT and Crypto industry, we are currently working to bring them to the events. But shhhh. Let's keep it secret for the moment 😉

All events will be private, only for our holders. Food and drinks will be provided for all holders. Legendary holders will be invited to events with an all inclusive package (flight, hotel, food, drinks and special activities). Imagine yourself with all Shiba members, holding a glass of champagne and hanging out with celebrities. 

Since we know that some of our Club Members will not be able to attend, we will broadcast all of our events LIVE, and soon in the metaverse...`,
  },
  {
    id: 7,
    percent: "100%",
    subBold:
      "The world must know who we are",
    content: `We want to show you that you made the best choice to be part of the club and grow your investment.Our goal is to be in the top 10 NFT projects within a month and the top 3 within three months. 

    To reach our goal, we'll do massive marketing campaigns in the biggest cities in the world. We need to be seen everywhere (Airport, Taxi, Subway).`,
  },
  {
    id: 8,
    percent: "110%",
    subBold:
      "Phase 2: The Metaverse is coming, as well as many more benefits for our holders.",
    content: `Once we complete all of the stages, phase two will begin. After all, what is a better way to have your Shiba than in the metaverse? Don't miss the train. Stay tuned. Much more is coming..`,
  }
];

function RoadMap() {
  return (
    <section id="roadmap" className="section--spacing">
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="h1 text-uppercase roadmap--title f-akira col-12 text-center">
            roadmap
          </h2>
          <div className="roadmap--container col-xl-10 col-12">
            <div className="roadmap--line"></div>
            <div className="roadmap--wrapper">
              {roadmapData.map(({ id, percent, subBold, content }) => (
                <div key={id} className="roadmap--item">
                  <h2 className="h1 roadmap--item-title f-akira">
                    {percent}
                  </h2>
                  <span className="roadmap--point"></span>
                  <h4>
                    <b className='f-akira h5 title '>{subBold}</b>
                    <br />
                    <br />
                    <span className='new-line'>{content}</span>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
