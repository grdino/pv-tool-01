import React, { useState } from 'react';

const neighborhoods = [
  { name: "Conchas Chinas", price: 372, beachDistance: 3, nightlyRate: 280, walkability: 60, vibe: "Luxury/Retreat", link: "https://www.searchpv.com/areas-and-neighborhoods-puerto-vallarta/lower-conchas-chinas/" },
  { name: "Amapas", price: 325, beachDistance: 6, nightlyRate: 200, walkability: 80, vibe: "Upscale/Tranquil", link: "https://www.searchpv.com/areas-and-neighborhoods-puerto-vallarta/amapas/" },
  { name: "Zona Romántica", price: 297, beachDistance: 5, nightlyRate: 220, walkability: 90, vibe: "Trendy/Nightlife", link: "https://www.searchpv.com/condos-for-sale-zona-romantic/" },
  { name: "Marina Vallarta", price: 251, beachDistance: 10, nightlyRate: 180, walkability: 85, vibe: "Upscale/Quiet", link: "https://www.searchpv.com/areas-and-neighborhoods-puerto-vallarta/marina-vallarta/" },
  { name: "5 de Diciembre", price: 232, beachDistance: 8, nightlyRate: 160, walkability: 75, vibe: "Local/Urban", link: "https://www.searchpv.com/areas-and-neighborhoods-puerto-vallarta/5-de-diciembre/" },
  { name: "Alta Vista", price: 223, beachDistance: 12, nightlyRate: 150, walkability: 78, vibe: "Quiet/Local Charm", link: "https://www.searchpv.com/areas-and-neighborhoods-puerto-vallarta/alta-vista/" },
  { name: "Versalles", price: 195, beachDistance: 20, nightlyRate: 140, walkability: 90, vibe: "Growing/Culinary District", link: "https://www.searchpv.com/areas-and-neighborhoods-puerto-vallarta/versalles/" }
];

export default function App() {
  const [maxPrice, setMaxPrice] = useState(395);

  const filtered = neighborhoods.filter(n => n.price <= maxPrice);

  return (
    <div className="container">
      <h1>Find Your Ideal Neighborhood in Puerto Vallarta</h1>
      <h3>Slide Blue bar to adjust Price per Ft²</h3>
      <label>Max Price per Ft²: ${maxPrice}</label>
      <input
        type="range"
        min="195"
        max="395"
        step="25"
        value={maxPrice}
        onChange={e => setMaxPrice(Number(e.target.value))}
        style={{ width: '100%', marginBottom: '2rem' }}
      />

      <div className="grid">
        {filtered.map((n) => (
          <div key={n.name} className="card">
            <h2>{n.name}</h2>
            <p>💰 ${n.price} per m²</p>
            <p>🏖️ {n.beachDistance} min walk to beach</p>
            <p>🛏️ ${n.nightlyRate} avg nightly rental</p>
            <p>🚶 Walkability: {n.walkability}/100</p>
            <p>🌴 Vibe: {n.vibe}</p>
            <a href={n.link}>Explore {n.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
