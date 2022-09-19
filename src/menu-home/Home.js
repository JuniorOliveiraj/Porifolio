import {useState, useEffect, useRef} from 'react'

const data = [{id: 1, title: 'ride the waves.', image: 'https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80'}, {id: 2, title: 'tread the unknown.', image: 'https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1843&q=80'}, {id: 3, title: 'climb the highest.', image: 'https://images.unsplash.com/photo-1495781856580-b3c4e8d21bf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1726&q=80'}, {id: 4, title: 'escape.', image: 'https://images.unsplash.com/photo-1504903271097-d7e7c7f5f7ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80'}]

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        {data.map((card, i) => {
          return (<CarouselCard key={card.id} active={activeIndex === i}>
            <div className='carousel-card-content' style={{backgroundImage: `url("${card.image}")`}}>
              <div className='carousel-card-title'>{card.title}</div>
            </div>
          </CarouselCard>)
        })}
      </Carousel>
       <div className="button-group">
         <button type="button" disabled={activeIndex === 0} onClick={() => setActiveIndex(activeIndex - 1)}>Prev</button>
         <button type="button" disabled={activeIndex === data.length - 1} onClick={() => setActiveIndex(activeIndex + 1)}>Next</button>
       </div>
    </>
  )
}

const Carousel = ({activeIndex, setActiveIndex, children}) => {
  const carouselRef = useRef(null);
  const [carouselTranslate, setCarouselTranslate] = useState(null);
  
  useEffect(() => {
    //console.log(activeIndex)
    const initialTranslateVal = carouselRef.current.offsetWidth / 4;
    const diffAmount = initialTranslateVal * 2;
    const translate = activeIndex === 0 ? initialTranslateVal : initialTranslateVal - (activeIndex * diffAmount)
    setCarouselTranslate(translate);
  }, [activeIndex]);
  
  return (
    <>
      <div className="carousel" ref={carouselRef} style={{transform: `translateX(${carouselTranslate}px)`}}>
        {children}
      </div>
      <div className="dots">
        {children.map((child, i) => <button className={`dot ${activeIndex === i ? 'active' : ''}`} onClick={() => setActiveIndex(i)}/>)}
      </div>
    </>
  )
}

const CarouselCard = ({active, children}) => {
  return (
    <div className={`carousel-card ${active ? 'active' : ''}`}>
      {children}
    </div>
  )
}
export default Home

