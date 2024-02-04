import '../../scss/components/home/analytics.scss'

function Analytics() {
    return (
        <div className="analytics">
            <div className='analytics__container'>
                <div className="left">
                    <div className="left__text">
                        <h1>Ok let's see D'task in numbers</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime doloribus facere consectetur pariatur quis voluptatem eum? Dolor provident aperiam vero deserunt reprehenderit dolorum, deleniti neque consequatur et expedita. Quam, dicta.</p>
                    </div>

                    <div className="left__container">
                        <div>
                            <span>12M</span>
                            <p>Active users</p>
                        </div>
                        <div>
                            <span>16</span>
                            <p>Languages</p>
                        </div>
                        <div>
                            <span>24/7</span>
                            <p>Support</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <img src="./images/onephone.png" alt="image" draggable={false} />
                </div>
            </div>
        </div>
    )
}

export default Analytics