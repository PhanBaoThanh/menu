import './App.scss';
import {useState} from 'react'
import img1 from './img/img1.jpeg'
import img2 from './img/img2.jpeg'
import img3 from './img/img3.jpeg'
import img4 from './img/img4.jpeg'
import img5 from './img/img5.jpeg'
import img6 from './img/img6.jpeg'
import img7 from './img/img7.jpeg'
import img8 from './img/img8.jpeg'
import img9 from './img/img9.jpeg'
import img10 from './img/img10.jpeg'

function App() {
  const data = [
    {
      id: 0,
      name: 'Buttermilk Pancakes',
      cost: '$15.99',
      img: img1,
      type: 'breakfast',
      description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
      id: 1,
      name: 'Diner Double',
      cost: '$13.99',
      img: img2,
      type: 'lunch',
      description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
      id: 2,
      name: 'Godzilla Milkshake',
      cost: '$6.99',
      img: img3,
      type: 'shakes',
      description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
      id: 3,
      name: 'Country Delight',
      cost: '$20.99',
      img: img4,
      type: 'breakfast',
      description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
    },
    {
      id: 4,
      name: 'Egg Attack',
      cost: '$22.99',
      img: img5,
      type: 'lunch',
      description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    },
    {
      id: 5,
      name: 'Oreo Dream',
      cost: '$18.99',
      img: img6,
      type: 'shakes',
      description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },
    {
      id: 6,
      name: 'Bacon Overflow',
      cost: '$8.99',
      img: img7,
      type: 'breakfast',
      description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    },
    {
      id: 7,
      name: 'American Classic',
      cost: '$12.99',
      img: img8,
      type: 'lunch',
      description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
    {
      id: 8,
      name: 'Quarantine Buddy',
      cost: '$16.99',
      img: img9,
      type: 'shakes',
      description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
    {
      id: 9,
      name: 'Steak Dinner',
      cost: '$39.99',
      img: img10,
      type: 'dinner',
      description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
  ]
  const [meet,setMeet] = useState(data)
  return (
    <div className="App">
      <div className='header'>
        <h2>Our Menu</h2>
        <div className='line'></div>
      </div>

      <div className='btns'>
        <div className='btn' onClick={() => setMeet(data)}>All</div>
        <div className='btn' onClick={() => setMeet(data.filter(item => item.type.toLowerCase() === 'breakfast'))}>Breakfast</div>
        <div className='btn' onClick={() => setMeet(data.filter(item => item.type.toLowerCase() === 'lunch'))}>Lunch</div>
        <div className='btn' onClick={() => setMeet(data.filter(item => item.type.toLowerCase() === 'shakes'))}>Shakes</div>
        <div className='btn' onClick={() => setMeet(data.filter(item => item.type.toLowerCase() === 'dinner'))}>Dinner</div>
      </div>

      <div className='products'>
        {
          meet.map(item => (
            <div className='product' key={item.id}>
              <div className='img'>
                <img src={item.img} alt='ptc' />
              </div>
              <div className='info'>
                <div className='info__header'>
                  <p className='info__header__name'>{item.name}</p>
                  <p className='info__header__cash'>{item.cost}</p>
                </div>
                <div className='info__description'>{item.description}</div>
              </div>
            </div>
          ))
        }
        
      </div>
    </div>
  );
}

export default App;
