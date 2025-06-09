import React, { useState } from 'react';

const neighborhoods = [
  { name: "Zona Romántica", price: 3200, beachDistance: 5, nightlyRate: 220, walkability: 90, vibe: "Trendy/Nightlife", link: "https://searchpv.com/search?area=Zona+Romantica" },
  { name: "Marina Vallarta", price: 2700, beachDistance: 10, nightlyRate: 180, walkability: 80, vibe: "Upscale/Quiet", link: "https://searchpv.com/search?area=Marina+Vallarta" },
  { name: "Versalles", price: 2100, beachDistance: 20, nightlyRate: 140, walkability: 70, vibe: "Local/Upcoming", link: "https://searchpv.com/search?area=Versalles" },
  { name: "5 de Diciembre", price: 2500, beachDistance: 8, nightlyRate: 160, walkability: 75, vibe: "Mixed", link: "https://searchpv.com/search?area=5+de+Diciembre" },
  { name: "Conchas Chinas", price: 4000, beachDistance: 3, nightlyRate: 280, walkability: 60, vibe: "Luxury/Retreat", link: "https://searchpv.com/search?area=Conchas+Chinas" },
  { name: "Alta Vista", price: 2400, beachDistance: 12, nightlyRate: 150, walkability: 78, vibe: "Quiet/Local Charm", link: "https://searchpv.com/search?area=Alta+Vista" },
  { name: "Amapas", price: 3500, beachDistance: 6, nightlyRate: 200, walkability: 82, vibe: "Upscale/Tranquil", link: "https://searchpv.com/search?area=Amapas" }
];

export default function App() {
  const [maxPrice, setMaxPrice] = useState(4500);

  const filtered = neighborhoods.filter(n => n.price <= maxPrice);

  return (
    <div className="container">
      <h1>Find Your Ideal Neighborhood in Puerto Vallarta</h1>
      <label>Max Price per m²: ${maxPrice}</label>
      <input
        type="range"
        min="2000"
        max="4500"
        step="100"
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
            <a href={n.link} target="_blank" rel="noopener noreferrer">Explore {n.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
