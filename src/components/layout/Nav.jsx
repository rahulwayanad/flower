import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  {
    label: 'Birthday',
    href: '/category?cat=birthday',
    cols: [
      ['Birthday Flowers','birthday-flowers'],
      ['Birthday Balloons','birthday-balloons'],
      ['Birthday Combos','birthday-combos'],
      ['Birthday Cakes','birthday-cakes'],
      ['Birthday Chocolates','birthday-chocolates'],
      ['Birthday Teddy Bears','birthday-bears'],
    ],
    cols2: [
      ['Same Day Birthday Flowers','same-day-birthday'],
      ['Luxury Birthday Bouquets','luxury-birthday'],
      ['Number Balloons','number-balloons'],
      ['Birthday Gift Boxes','birthday-gift-boxes'],
      ['Last Minute Birthday','last-minute-birthday'],
    ],
  },
  {
    label: "Mother's Day Flowers",
    href: '/category?cat=mothers-day',
    cols: [
      ["Mother's Day Bouquets",'mothers-bouquets'],
      ['Pink Rose Collections','pink-roses'],
      ['Luxury Flower Boxes','luxury-flower-boxes'],
      ['Peonies & Tulips','peonies-tulips'],
      ['Pastel Arrangements','pastel'],
    ],
    cols2: [
      ["Mother's Day Combos",'mothers-combos'],
      ['Chocolate & Flowers','choc-flowers'],
      ['Candle & Flowers','candle-flowers'],
      ['Same Day Delivery','same-day-mothers'],
    ],
  },
  {
    label: 'Newborn Flowers',
    href: '/category?cat=newborn',
    cols: [
      ['Anniversary Flowers','anniversary'],
      ['Love & Romance Flowers','love-romance'],
      ['I am Sorry Flowers','sorry-flowers'],
      ['Wedding Flowers','wedding'],
      ['Welcome Back Flowers','welcome-back'],
      ["Valentine's Day Flowers",'valentines'],
      ['Thank You Flower Bouquets','thank-you'],
      ['Congratulation Flowers','congratulations'],
    ],
    cols2: [
      ['Graduation Flower Bouquets','graduation'],
      ['Sympathy Flowers','sympathy'],
      ['Ramadan / EID Gift Collections','eid'],
      ["Mothers Day Flowers",'mothers-day'],
      ["Happy Women's Day",'womens-day'],
      ['Get Well Soon Flowers','get-well-soon'],
      ['Fathers Day Flowers','fathers-day'],
    ],
  },
  {
    label: 'Shop By Occasion',
    href: '/category?cat=occasions',
    cols: [
      ['New Born','newborn'],
      ["Valentine's Day",'valentines'],
      ['Wedding','wedding'],
      ['Graduation','graduation'],
      ['Birthday','birthday'],
    ],
    cols2: [
      ['Congratulations','congratulations'],
      ['Get Well Soon','get-well-soon'],
      ['Eid Mubarak','eid'],
      ['Thank You','thank-you'],
      ['Sympathy','sympathy'],
    ],
  },
  {
    label: 'Collections',
    href: '/category?cat=collections',
    cols: [
      ['Best Sellers','best-sellers'],
      ['New Arrivals','new-arrivals'],
      ['Luxury Collection','luxury'],
      ['Seasonal Specials','seasonal'],
    ],
    cols2: [
      ['Budget Friendly','budget'],
      ['Premium Boxes','premium-boxes'],
      ['Wrapped Bouquets','wrapped'],
      ['Vase Arrangements','vase'],
    ],
  },
  {
    label: 'Balloons Collection',
    href: '/category?cat=balloons',
    cols: [
      ['Birthday Balloons','birthday-balloons'],
      ['Baby Shower Balloons','baby-shower-balloons'],
      ['Foil Balloons','foil-balloons'],
      ['Number Balloons','number-balloons'],
    ],
    cols2: [
      ['Balloon Bouquets','balloon-bouquets'],
      ['Helium Balloons','helium'],
      ['Custom Text Balloons','custom-text-balloons'],
      ['Balloon Stands','balloon-stands'],
    ],
  },
]

const Chevron = () => (
  <svg className="chev" width="10" height="6" viewBox="0 0 10 6">
    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
)

export default function Nav({ open }) {
  const [openItem, setOpenItem] = useState(null)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setOpenItem(null)
    }
    function handleClick(e) {
      if (!e.target.closest('.has-drop')) setOpenItem(null)
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <nav className={`catnav${open ? ' catnav--open' : ''}`} id="catnav">
      <div className="container">
        <ul className="catnav__list">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.label}
              className={`has-drop${openItem === i ? ' open' : ''}`}
              onMouseEnter={() => setOpenItem(i)}
              onMouseLeave={() => setOpenItem(null)}
            >
              <Link
                to={item.href}
                onClick={e => {
                  if (openItem !== i) {
                    e.preventDefault()
                    setOpenItem(i)
                  } else {
                    setOpenItem(null)
                  }
                }}
              >
                {item.label} <Chevron />
              </Link>
              <div className="dropdown" onMouseEnter={() => setOpenItem(i)}>
                <ul className="drop-col">
                  {item.cols.map(([label, cat]) => (
                    <li key={cat}>
                      <Link to={`/category?cat=${cat}`} onClick={() => setOpenItem(null)}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="drop-col">
                  {item.cols2.map(([label, cat]) => (
                    <li key={cat}>
                      <Link to={`/category?cat=${cat}`} onClick={() => setOpenItem(null)}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          <li>
            <Link to="/category?cat=buy-balloons-dubai">Buy Balloons in Dubai</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
