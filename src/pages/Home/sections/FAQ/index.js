import { useRef } from "react";
import "./faq.css";

const faqData = [
  {
    id: 1,
    title: "What is an NFT",
    content:
      "NFT stands for 'non-fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.",
  },
  {
    id: 2,
    title: "How can I buy a Shiba NFT",
    content:
      "You will be able to buy on our website when we launch. Join our discord to have more information about our launch date.",
  },
  {
    id: 3,
    title: `What does "MINT" means?`,
    content:
      "NFT Minting is the process by which your digital art or digital content becomes a part of the Ethereum blockchain.",
  },
  {
    id: 4,
    title: "How much does it cost to buy one or your Shiba NFT",
    content:
      "The Price of Minting and Sale will be announced soon.",
  },
  {
    id: 5,
    title: "WHY DID YOU CHOOSE SHIBA ?",
    content:
      "We are all investors and crypto enthusiasts at heart. Shibaz have been used for over decades to symbolize the aggressive financial optimism and prosperity of the markets. We can’t think of a better avatar to use going into the Metaverse. So we gave the Shiba a 3.0 upgrade and made them future-proof.",
  },
  {
    id: 6,
    title: "DO YOU HAVE A WHITELIST?",
    content:
      "Yes, we do have a whitelist that will guarantee you to have 100% of chance to get a Shiba NFT. Join our discord for more informations.",
  }
];

function FAQ() {
  const openedAccordion = useRef(null);

  const handleAccordionClick = (e) => {
    const tg = e.currentTarget;
    const panel = tg.nextElementSibling;

    if (tg.classList.contains("active")) {
      panel.style.maxHeight = null;
      tg.classList.remove("active");
      return;
    }

    if (openedAccordion?.current && tg !== openedAccordion?.current) {
      openedAccordion.current.classList.remove("active");
      openedAccordion.current.nextElementSibling.style.maxHeight = null;
    }

    tg.classList.add("active");
    openedAccordion.current = tg;
    panel.style.maxHeight = panel.scrollHeight + "px";
  };

  return (
    <section id="faq" className="section--spacing">
      <div className="container-lg">
        <div className="row">
          <h2 className="col-12 mb-5 f-akira">
            Frequently Asked Questions
          </h2>
          <div className="col-12 pt-5">
            {faqData.map(({ id, title, content }) => (
              <div key={`${id}_${title}`} className="accordion--item">
                <button
                  onClick={handleAccordionClick}
                  className="custom--accordion h2 f-akira"
                >
                  {title}
                </button>
                <div className="custom--panel">
                  <p>{content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;