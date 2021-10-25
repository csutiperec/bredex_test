import '../styling/Logo.css';

const Logo = (props) => {
    return (
        <div className='logo-container'>
            <img src={props.src} alt={props.alt} className='logo'/>
        </div>
    )
};

export default Logo;
