/* App.js */

const PRODUCTS = [
  { id: 1, name: "Red Bench", cat: "People", price: 3.89, img: "https://images.unsplash.com/photo-1441040744088-a70b8213d4d4?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "Egg Balloon", cat: "Food", price: 93.89, img: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d99?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, name: "Man", cat: "People", price: 100.0, img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "Architecture", cat: "Landmarks", price: 101.0, img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop" }
];

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="logo">BEJAMAS_</a>
        <button className="icon-btn">🛒</button>
      </div>
    </header>
  );
}

function Hero({ onAdd }) {
  return (
    <section className="hero">
      <h1 className="hero-title">Samurai King Resting</h1>
      <button className="btn btn-dark" onClick={() => onAdd("Samurai King Resting")}>
        ADD TO CART
      </button>
      <figure className="hero-media">
        <img src="https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1470&auto=format&fit=crop" alt="Samurai King Resting" />
        <figcaption className="badge">Photo of the day</figcaption>
      </figure>
    </section>
  );
}

function Card({ p, onAdd }) {
  return (
    <article className="card">
      <div className="card-media">
        <img src={p.img} alt={p.name} />
        <div className="bar" onClick={() => onAdd(p.name)}>ADD TO CART</div>
      </div>
      <div className="card-meta">
        <span className="label">{p.cat}</span>
        <h3 className="title">{p.name}</h3>
        <div className="price">${p.price.toFixed(2)}</div>
      </div>
    </article>
  );
}

function Catalog({ onAdd }) {
  return (
    <section className="catalog container">
      <div className="grid">
        {PRODUCTS.map(p => (
          <Card key={p.id} p={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

function Toast({ text }) {
  if (!text) return null;
  return <div className="toast">{text}</div>;
}

function App() {
  const [toast, setToast] = React.useState("");

  const add = (name) => {
    setToast(`Added "${name}" to cart`);
    clearTimeout(App._t);
    App._t = setTimeout(() => setToast(""), 1500);
  };

  return (
    <>
      <Header />
      <Hero onAdd={add} />
      <Catalog onAdd={add} />
      <Toast text={toast} />
    </>
  );
}
