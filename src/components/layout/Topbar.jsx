export default function Topbar({ cursorEnabled, onCursorToggle }) {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__group">
           <span className="topbar__item">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.12 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +1 (800) 555-FLOWER
          </span>
          <span className="topbar__item">
            <svg width="22" height="18" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="11" rx="1"/><polygon points="16 7 20 7 23 11 23 14 16 14 16 7"/>
              <circle cx="5.5" cy="16.5" r="1.5"/><circle cx="18.5" cy="16.5" r="1.5"/>
            </svg>
            Sameday Delivery
          </span>
          <span className="topbar__item">
            <svg width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Locate Our Store
          </span>
         
        </div>
        <div className="topbar__right">
          <span className="topbar__accent">Express Delivery all Over Dubai</span>
          <label className="cursor-toggle" title="Toggle hummingbird cursor">
            <span className="cursor-toggle__bird">🐦</span>
            <span>Cursor</span>
            <span className="cursor-toggle__switch">
              <input
                type="checkbox"
                id="cursorToggle"
                checked={cursorEnabled}
                onChange={e => onCursorToggle(e.target.checked)}
              />
              <span className="cursor-toggle__track"></span>
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}
