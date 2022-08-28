import '../css/Navbar.css';

const Navbar = () => {



    return(
        <div className="navbar">
            <div id="menu"><img src={require('../images/menu2.png')} width="33px"></img></div>
            <div><img id='logo' src={require('../images/youtube.png')} width="33px"></img></div>
            <div id='logoname'>Youtube</div>
            <input placeholder='Search' id="search" type="text"></input>
            <div id='search-icon'><img src={require('../images/search.png')} width="25px"></img></div>
            <div id='mike-icon' ><img src={require('../images/mike.png')} width="45px"></img></div>

            <div id='video-icon' ><img src={require('../images/video.png')} width="37px"></img></div>
            <div id='bell-icon'><img  src={require('../images/bell.png')} width="27px"></img></div>
            <div id='profile-icon'><img src={require('../images/profile.png')} width="33px"></img></div>
        </div>
    )

}

export default Navbar;