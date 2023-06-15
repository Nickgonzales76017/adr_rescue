import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import { useState, useEffect } from 'preact/hooks';
export const Hero = () => {
    const images = [
        '../../assets/austin.jpg',
        '../../assets/houston.jpg',
        '../../assets/dallas.jpg',
        // add more image sources here
      ];
      const [index, setIndex] = useState(0);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setIndex((index + 1) % images.length);
        }, 3000);
    
        const normalizeImages = () => {
          const bgImages = document.querySelectorAll(`.${style.hero}`);
    
          bgImages.forEach((bgImage) => {
            const parentWidth = bgImage.offsetWidth;
            const parentHeight = bgImage.offsetHeight;
            const imageSrc = bgImage.style.backgroundImage.slice(5, -2);
    
            const img = new Image();
            img.src = imageSrc;
    
            
          });
        };
    
        normalizeImages();
        window.addEventListener('resize', normalizeImages);
    
        return () => {
          clearInterval(intervalId);
          window.removeEventListener('resize', normalizeImages);
        };
      }, [index]);
    
  
    return (
      <div
        class={style.hero}
        id="hero"
        style={{
            backgroundImage: `url(${images[index]})`,
            transition: 'background-image 1.5s ease-in-out',
        }}
      >
        <div class={style.redpane} style="3px solid red">
          <h1>A</h1>
          <h1>NORTH TEXAS</h1>
          <h1 class={style.bottom}>COMMERCIAL DOOR COMPANY</h1>
          <div>
            <strong>WE SPECIALIZE IN DELIVERING HIGH QUALITY REPAIR, MAINTENANCE & INSTALLATION SERVICES</strong>
          </div>
          <button
            type="button"
            class="btn"
            style={{ backgroundColor: "#CA0303", color: "#F7F0DC", marginTop: "3vw" }}
            data-toggle="modal"
            data-target="#contactModal"
          >
            <b>CONTACT US</b>
          </button>
        </div>
      </div>
    );
  };

export default Hero;