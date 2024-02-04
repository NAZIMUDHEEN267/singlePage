import '../../scss/components/home/control.scss'
import { SiGooglepodcasts } from 'react-icons/si'
import { AiFillCloud, AiOutlineClockCircle } from 'react-icons/ai'



const Control = () => {

const controls = [
    {
      name: "Structured Reports",
      icon: SiGooglepodcasts,
    },
    {
      name: "Cloud System",
      icon: AiFillCloud,
    },
    {
      name: "24/7 Support",
      icon: AiOutlineClockCircle,
    },
  ];

  return (
    <div
      className="feature__controls"
    >
      <div className="control__container">
        <div className="control__text">
          <h1>Control in one place</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non esse
            eaque obcaecati repudiandae alias eveniet ea iure corrupti modi.
          </p>
          <button>Start 14 days trial</button>
        </div>
        <div className="control__content">
          {controls.map((control, index) => (
            <div className="control" key={index}>
              <div className="control__icon">
                <control.icon />
              </div>

              <div className="control__text__content">
                <p>{control.name}</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, quos.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Control;