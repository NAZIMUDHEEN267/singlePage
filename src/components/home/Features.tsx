import { TiTick } from 'react-icons/ti'
import '../../scss/components/home/fetures.scss'

function Features() {

  const list = ['Choose a view', 'Meet your new butler', 'Dive into the details', 'Power up'];

  return (
    <div className="feature">
      <div className="feature__container">
        <div className="left">
          <img src="./images/feature.png" alt="feature" draggable={false} />
        </div>
        <div className="right">
          <div className="right__text">
            <h1>Feature to help your team succeed</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui beatae eaque repellat eveniet aliquid mollitia quos nemo vel doloremque dignissimos totam voluptate numquam, cumque aperiam id optio aspernatur aut nulla?</p>
          </div>

          <div className="right__content">
            {
              list.map((item, i) => (
                <div className="right__feature" key={String(i)}>
                  <TiTick fontSize={32} color='#3ab7fc' />

                  <div className="text">
                    <p>{item}</p>
                    <span>Lorem ipsum dolor sit, amet consectetur  impedit rem quia!</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features