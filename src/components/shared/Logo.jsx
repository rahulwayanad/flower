export default function Logo({ size = 46 }) {
  return (
    <>
      <div className="logo__icon-wrap">
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
          <ellipse cx="40" cy="18" rx="9" ry="15" fill="#FFC0CB" opacity=".9"/>
          <ellipse cx="40" cy="62" rx="9" ry="15" fill="#FFC0CB" opacity=".9"/>
          <ellipse cx="18" cy="40" rx="15" ry="9" fill="#ffaabf" opacity=".9"/>
          <ellipse cx="62" cy="40" rx="15" ry="9" fill="#ffaabf" opacity=".9"/>
          <ellipse cx="23" cy="23" rx="9" ry="14" fill="#ff8fa3" opacity=".75" transform="rotate(-45 23 23)"/>
          <ellipse cx="57" cy="57" rx="9" ry="14" fill="#ff8fa3" opacity=".75" transform="rotate(-45 57 57)"/>
          <ellipse cx="57" cy="23" rx="9" ry="14" fill="#ff8fa3" opacity=".75" transform="rotate(45 57 23)"/>
          <ellipse cx="23" cy="57" rx="9" ry="14" fill="#ff8fa3" opacity=".75" transform="rotate(45 23 57)"/>
          <circle cx="40" cy="40" r="11" fill="#fff" stroke="#FFC0CB" strokeWidth="2"/>
          <circle cx="40" cy="40" r="6" fill="#FFC0CB"/>
          <path d="M55 28 Q65 15 60 8" stroke="#a0c4ff" strokeWidth="2" fill="none"/>
          <circle cx="60" cy="6" r="5" fill="#a0c4ff" opacity=".8"/>
        </svg>
      </div>
      <div className="logo__text-block">
        <span className="logo__name">Flowerify</span>
        <span className="logo__sub">Flowers, Balloons &amp; more</span>
        <span className="logo__tagline">When the words are just not enough</span>
      </div>
    </>
  )
}
