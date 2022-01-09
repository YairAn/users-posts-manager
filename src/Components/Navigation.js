
const Navigation = ({ onRouteChange }) => {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-begin'}}>
                <p onClick={ () => onRouteChange(-1) } className='ma3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'>Back</p>
            </nav>
        );
    }

export default Navigation;