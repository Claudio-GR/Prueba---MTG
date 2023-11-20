import header_img from '../img/mtg-logo2.png'

const Header = () =>{
    return <div className='containger header'>
                <div className='row'>
                    <div className='col-12'>
                        <img src={header_img} alt="Color_types" className='header_img'/>
                    </div>
                </div>
            </div>
}

export default Header