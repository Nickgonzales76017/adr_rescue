

import { h } from 'preact';
import style from './style.css';


const Pictures = () => {
  return (
    <div class={style.home}>
      <section class={style.resources}>
        <div class={style.resourceContainer}>
          <Resource
            title="Automatic Sliding Doors"
            description=""
            link="https://preactjs.com/tutorial/"
            backgroundImage="../../assets/manual_door.jpg"
          />
        </div>
        <div class={style.resourceContainer}>
          <Resource
            title="Manual/Swing Doors"
            description=""
            link="https://preactjs.com/guide/v10/differences-to-react"
            backgroundImage="../../assets/automatic_sliding_door.jpg"
          />
        </div>
        <div class={style.resourceContainer} >
          <Resource
            title="Telescopic/Bi-Fold Doors"
            description=""
            link="https://github.com/preactjs/preact-cli#preact-cli--"
            backgroundImage="../../assets/bifold.jpg"
          />
        </div>
      </section>
      <section class={style.resources}>
        <div class={style.resourceContainer}>
          <Resource
            title="Automatic Sliding Doors"
            description=""
            link="https://preactjs.com/tutorial/"
            backgroundImage="../../assets/manual_door.jpg"
          />
        </div>
        <div class={style.resourceContainer}>
          <Resource
            title="Manual/Swing Doors"
            description=""
            link="https://preactjs.com/guide/v10/differences-to-react"
            backgroundImage="../../assets/automatic_sliding_door.jpg"
          />
        </div>
        <div class={style.resourceContainer} >
          <Resource
            title="Telescopic/Bi-Fold Doors"
            description=""
            link="https://github.com/preactjs/preact-cli#preact-cli--"
            backgroundImage="../../assets/bifold.jpg"
          />
        </div>
      </section>
      <section class={style.resources}>
        <div class={style.resourceContainer}>
          <Resource
            title="Automatic Sliding Doors"
            description=""
            link="https://preactjs.com/tutorial/"
            backgroundImage="../../assets/manual_door.jpg"
          />
        </div>
        <div class={style.resourceContainer}>
          <Resource
            title="Manual/Swing Doors"
            description=""
            link="https://preactjs.com/guide/v10/differences-to-react"
            backgroundImage="../../assets/automatic_sliding_door.jpg"
          />
        </div>
        <div class={style.resourceContainer} >
          <Resource
            title="Telescopic/Bi-Fold Doors"
            description=""
            link="https://github.com/preactjs/preact-cli#preact-cli--"
            backgroundImage="../../assets/bifold.jpg"
          />
        </div>
      </section>
      <section class={style.resources}>
        <div class={style.resourceContainer}>
          <Resource
            title="Automatic Sliding Doors"
            description=""
            link="https://preactjs.com/tutorial/"
            backgroundImage="../../assets/manual_door.jpg"
          />
        </div>
        <div class={style.resourceContainer}>
          <Resource
            title="Manual/Swing Doors"
            description=""
            link="https://preactjs.com/guide/v10/differences-to-react"
            backgroundImage="../../assets/automatic_sliding_door.jpg"
          />
        </div>
        <div class={style.resourceContainer} >
          <Resource
            title="Telescopic/Bi-Fold Doors"
            description=""
            link="https://github.com/preactjs/preact-cli#preact-cli--"
            backgroundImage="../../assets/bifold.jpg"
          />
        </div>
      </section>
      <section class={style.resources}>
        <div class={style.resourceContainer}>
          <Resource
            title="Automatic Sliding Doors"
            description=""
            link="https://preactjs.com/tutorial/"
            backgroundImage="../../assets/manual_door.jpg"
          />
        </div>
        <div class={style.resourceContainer}>
          <Resource
            title="Manual/Swing Doors"
            description=""
            link="https://preactjs.com/guide/v10/differences-to-react"
            backgroundImage="../../assets/automatic_sliding_door.jpg"
          />
        </div>
        <div class={style.resourceContainer} >
          <Resource
            title="Telescopic/Bi-Fold Doors"
            description=""
            link="https://github.com/preactjs/preact-cli#preact-cli--"
            backgroundImage="../../assets/bifold.jpg"
          />
        </div>
      </section>
      <section class={style.resources}>
        <div class={style.resourceContainer}>
          <Resource
            title="Automatic Sliding Doors"
            description=""
            link="https://preactjs.com/tutorial/"
            backgroundImage="../../assets/manual_door.jpg"
          />
        </div>
        <div class={style.resourceContainer}>
          <Resource
            title="Manual/Swing Doors"
            description=""
            link="https://preactjs.com/guide/v10/differences-to-react"
            backgroundImage="../../assets/automatic_sliding_door.jpg"
          />
        </div>
        <div class={style.resourceContainer} >
          <Resource
            title="Telescopic/Bi-Fold Doors"
            description=""
            link="https://github.com/preactjs/preact-cli#preact-cli--"
            backgroundImage="../../assets/bifold.jpg"
          />
        </div>
      </section>
      <section class={style.resources}>
        <div class={style.resourceContainer}>
          <Resource
            title="Automatic Sliding Doors"
            description=""
            link="https://preactjs.com/tutorial/"
            backgroundImage="../../assets/manual_door.jpg"
          />
        </div>
        <div class={style.resourceContainer}>
          <Resource
            title="Manual/Swing Doors"
            description=""
            link="https://preactjs.com/guide/v10/differences-to-react"
            backgroundImage="../../assets/automatic_sliding_door.jpg"
          />
        </div>
        <div class={style.resourceContainer} >
          <Resource
            title="Telescopic/Bi-Fold Doors"
            description=""
            link="https://github.com/preactjs/preact-cli#preact-cli--"
            backgroundImage="../../assets/bifold.jpg"
          />
        </div>
      </section>
      <section class={style.resources}>
        <div class={style.resourceContainer}>
          <Resource
            title="Automatic Sliding Doors"
            description=""
            link="https://preactjs.com/tutorial/"
            backgroundImage="../../assets/manual_door.jpg"
          />
        </div>
        <div class={style.resourceContainer}>
          <Resource
            title="Manual/Swing Doors"
            description=""
            link="https://preactjs.com/guide/v10/differences-to-react"
            backgroundImage="../../assets/automatic_sliding_door.jpg"
          />
        </div>
        <div class={style.resourceContainer} >
          <Resource
            title="Telescopic/Bi-Fold Doors"
            description=""
            link="https://github.com/preactjs/preact-cli#preact-cli--"
            backgroundImage="../../assets/bifold.jpg"
          />
        </div>
      </section>
    </div>

  );
};

const Resource = props => {
  return (
    <a href={props.link} class={style.resource} style={{ backgroundImage: `url(${props.backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '30vw', height: '18.33vw' }}>
      <h2 style={{ margin: '5vw 2vw 0 2vw', border: '2px black solid', backgroundColor: '#F7F0DC' }}>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
};


export default Pictures;