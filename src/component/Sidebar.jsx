import '../css/Sidebar.css';
const Sidebar = () => {
    return(
        <div className="Sidebar">
            <ul>
                <li><img src={require('../images/home2.png')} width="26px"></img>Home</li>
                <li><img src={require('../images/explore1.png')} width="26px"></img>Explore</li>
                <li><img src={require('../images/shots.png')} width="30px"></img>Shorts</li>
                <li ><img src={require('../images/subs1.png')} width="26px"></img><span id='subs'>Subscription</span></li>
                <li ><img src={require('../images/lib1.png')} width="26px"></img>Library</li>
            </ul>

        </div>
    )
}

export default Sidebar;