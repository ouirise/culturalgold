import Layout from "~/components/layout";
import type { JSX, MouseEvent } from "react";
import { useEffect, useState } from "react";
import '~/css/home.css'

interface Collection {
  name: string;
  symbol: string[];
  focus: string;
  description: string;
  category: string;
}
export default function Home() {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    fetch("/culturalgold/data/collections.json")
      .then((res) => res.json())
      .then((data) => setCollections(data));
  }, []);

  return (
    <Layout>
      <article className="hero">
      <h2>Welcome to <span className="em">Cultural Gold!</span></h2>
      <p>Celebrating the love and enduring spirit of Africa</p>
      <div className="img-container">
        <div className="overlay"></div>
        <img src="/culturalgold/images/castle-row.png" alt="from left to right: castle, a woman in a beautifully powerful pose, a tribe of men jumping, a man sitting holding up his left fist, African masks" />
      </div>
      <p><span className="ital">The vibrant creativity</span>,<span className="heading small"> the rich stories</span>, <span className="strong small">the enduring legacy</span></p>
      <p>We invite to connect and rediscover the <span className="ital">beauty</span> that resides <span className="strong small">within</span></p>
      
      <a className="btn" href="#shop"><span>»</span> Explore OUR Legacy <span>«</span></a>
      </article>


      <div id="shop">.</div>
      <h2 className="strong center">Goods infused with Culture</h2>

      <article className="collections">
        {collections.map((collection: Collection): JSX.Element => (
          <CollectionCard
            key={collection.name}
            name={collection.name}
            symbol={collection.symbol}
            category={collection.category}
            focus={collection.focus}
            description={collection.description}
          />
        ))}
        </article>
        </Layout>
  );
}

function CollectionCard({ name, symbol, category, focus, description }: Collection) {
  const sendMessage = (e: MouseEvent) => {
    e.preventDefault()

    alert("demo only")

  }
    return (
        <div className="card collection-card" key={name}>
          {/* <img src={`/images/${category}.jpg`} alt={name} /> */}
          <h4 className="em">{name.toUpperCase()}</h4>
          <p>{focus} {category}</p>
          <p className='desc'>{description}</p>

          <a href="/culturalgold/about" className="right">{symbol}</a>
          <a className="btn" onClick={(e) => sendMessage(e)} href={`/culturalgold/collections/${category.toLowerCase()}`}>View Collection</a>
      </div>
  );
}
