/* App.js */

const PRODUCTS = [
  { id: 1, name: "Red Bench", cat: "People", price: 3.89, img: "https://images.unsplash.com/photo-1441040744088-a70b8213d4d4?q=80&w=1200&auto=format&fit=crop", best: true },
  { id: 2, name: "Egg Balloon", cat: "Food", price: 93.89, img: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d99?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, name: "Egg Balloon", cat: "Food", price: 93.89, img: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d99?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "Man", cat: "People", price: 100.0, img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, name: "Architecture", cat: "Landmarks", price: 101.0, img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop" },
  { id: 6, name: "Architecture", cat: "Landmarks", price: 101.0, img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop" }
];

const CATEGORIES = ["People", "Premium", "Pets", "Food", "Landmarks", "Cities", "Nature"];
const PRICE_BUCKETS = [
  { key: "lt20", label: "Lower than $20", test: (p) => p < 20 },
  { key: "20-100", label: "$20 – $100", test: (p) => p >= 20 && p <= 100 },
  { key: "100-200", label: "$100 – $200", test: (p) => p > 100 && p <= 200 },
  { key: "gt200", label: "More than $200", test: (p) => p > 200 },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#">BEJAMAS_</a>
        <button className="icon-btn" aria-label="Cart">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 7h12l-1 12H7L6 7Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M9 7V6a3 3 0 0 1 6 0v1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

function Hero({ onAdd }) {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-head">
          <h1 className="hero-title">Samurai King Resting</h1>
          <button className="btn btn-dark add-to-cart" onClick={() => onAdd("Samurai King Resting")}>
            ADD TO CART
          </button>
        </div>

        <figure className="hero-media">
          <img src="https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1470&auto=format&fit=crop" alt="Samurai King Resting" />
          <figcaption className="badge">Photo of the day</figcaption>
        </figure>

        <div className="hero-grid">
          <article className="about">
            <h2 className="h6">About the Samurai King Resting</h2>
            <p className="pill" style={{background:"#f2f2f2",display:"inline-block",padding:".25rem .5rem",borderRadius:"16px",fontWeight:600}}>Pets</p>
            <p className="muted">
              So how did the classical Latin become so incoherent? According to McClintock,
              a 15th century typesetter likely scrambled part of Cicero’s <em>De Finibus</em>
              in order to provide placeholder text to mockup various fonts for a type specimen book…
            </p>
          </article>

          <aside className="also-buy">
            <h3 className="h6">People also buy</h3>
            <ul className="thumbs">
              <li><img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop" alt="Yellow wall" /></li>
              <li><img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=600&auto=format&fit=crop" alt="Plants" /></li>
              <li><img src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d99?q=80&w=600&auto=format&fit=crop" alt="Egg balloon" /></li>
            </ul>
          </aside>

          <aside className="details">
            <h3 className="h6">Details</h3>
            <dl className="meta">
              <div><dt>Size:</dt><dd>1020 × 1020 pixel</dd></div>
              <div><dt>Size:</dt><dd>15 mb</dd></div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Filters({ selectedCats, setSelectedCats, selectedPrices, setSelectedPrices, compact }) {
  const toggle = (arr, setArr, val) => {
    setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]);
  };

  return (
    <form>
      <h4 className="filters-title">Category</h4>
      <ul className="checklist">
        {CATEGORIES.map(c => (
          <li key={c}><label><input type="checkbox" checked={selectedCats.includes(c)} onChange={() => toggle(selectedCats, setSelectedCats, c)} /> <span>{c}</span></label></li>
        ))}
      </ul>

      <h4 className="filters-title">Price range</h4>
      <ul className="checklist">
        {PRICE_BUCKETS.map(b => (
          <li key={b.key}><label><input type="checkbox" checked={selectedPrices.includes(b.key)} onChange={() => toggle(selectedPrices, setSelectedPrices, b.key)} /> <span>{b.label}</span></label></li>
        ))}
      </ul>
    </form>
  );
}

function Card({ p, onAdd }) {
  return (
    <article className="card" data-name={p.name} data-cat={p.cat} data-price={p.price}>
      <div className="card-media">
        <img src={p.img} alt={p.name} />
        <div className="bar" onClick={() => onAdd(p.name)}>ADD TO CART</div>
        {p.best ? <span className="flag">Best Seller</span> : null}
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
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [sortBy, setSortBy] = React.useState("none");
  const [cats, setCats] = React.useState(["Pets","Food","Landmarks"]); // default checked like figma
  const [prices, setPrices] = React.useState(["100-200"]);              // default checked like figma

  const [menuOpen, setMenuOpen] = React.useState(false);

  const filtered = React.useMemo(() => {
    let list = PRODUCTS.slice();

    // category filter (if none selected, show all)
    if (cats.length) list = list.filter(p => cats.includes(p.cat) || (p.cat === "Premium" && cats.includes("Premium")));

    // price filter
    if (prices.length) {
      const buckets = PRICE_BUCKETS.filter(b => prices.includes(b.key));
      list = list.filter(p => buckets.some(b => b.test(p.price)));
    }

    // sort
    if (sortBy === "price-asc") list.sort((a,b)=>a.price-b.price);
    if (sortBy === "price-desc") list.sort((a,b)=>b.price-a.price);
    if (sortBy === "name-asc") list.sort((a,b)=>a.name.localeCompare(b.name));

    return list;
  }, [cats, prices, sortBy]);

  return (
    <section className="catalog">
      <div className="container">
        <header className="catalog-head">
          <div className="crumbs"><strong>Photography</strong><span className="slash">/</span><span className="muted">Premium Photos</span></div>

          <div className="catalog-actions">
            <button className="filter-open" onClick={()=>setDrawerOpen(true)}>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M7 12h10M10 17h4" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              <span className="hide-mobile">Filter</span>
            </button>

            <div className="sort">
              <button className="sort-btn" aria-expanded={menuOpen} onClick={()=>setMenuOpen(v=>!v)}>
                <span className="muted hide-mobile" style={{marginRight:6}}>Sort By</span> Price
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              </button>
              <ul className="sort-menu" hidden={!menuOpen}>
                <li><button onClick={()=>{setSortBy("price-asc");setMenuOpen(false);}}>Price: Low → High</button></li>
                <li><button onClick={()=>{setSortBy("price-desc");setMenuOpen(false);}}>Price: High → Low</button></li>
                <li><button onClick={()=>{setSortBy("name-asc");setMenuOpen(false);}}>Name: A → Z</button></li>
              </ul>
            </div>
          </div>
        </header>

        <div className="catalog-body">
          {/* desktop sidebar */}
          <aside className="filters">
            <Filters
              selectedCats={cats} setSelectedCats={setCats}
              selectedPrices={prices} setSelectedPrices={setPrices}
            />
          </aside>

          {/* grid */}
          <section className="grid">
            {filtered.map(p => <Card key={p.id} p={p} onAdd={onAdd} />)}
          </section>
        </div>

        {/* pagination look-alike */}
        <nav className="pagination" aria-label="Pagination">
          <button className="page-arrow" aria-label="Previous">‹</button>
          <button className="page is-active">1</button>
          <button className="page">2</button>
          <button className="page">3</button>
          <button className="page">4</button>
          <button className="page-arrow" aria-label="Next">›</button>
        </nav>
      </div>

      {/* mobile drawer */}
      <aside className="drawer" data-open={drawerOpen} aria-hidden={!drawerOpen}>
        <div className="drawer-head">
          <div className="crumbs"><strong>Photography</strong><span className="slash">/</span><span className="muted">Premium Photos</span></div>
          <button className="drawer-close" onClick={()=>setDrawerOpen(false)} aria-label="Close">✕</button>
        </div>
        <div className="drawer-body">
          <Filters
            selectedCats={cats} setSelectedCats={setCats}
            selectedPrices={prices} setSelectedPrices={setPrices}
            compact
          />
        </div>
        <div className="drawer-foot">
          <button className="btn btn-ghost" onClick={()=>{setCats([]);setPrices([]);}}>CLEAR</button>
          <button className="btn btn-dark" onClick={()=>setDrawerOpen(false)}>SAVE</button>
        </div>
      </aside>
      <div className="overlay" hidden={!drawerOpen} onClick={()=>setDrawerOpen(false)}></div>
    </section>
  );
}

function Toast({ text }) {
  if (!text) return null;
  return <div className="toast" role="status">{text}</div>;
}

function App(){
  const [toast, setToast] = React.useState("");

  const add = (name) => {
    setToast(`Added "${name}" to cart`);
    clearTimeout(App._t);
    App._t = setTimeout(()=>setToast(""), 1300);
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
