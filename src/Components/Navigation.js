
const Navigation = ({ onRouteChange }) => {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-begin'}}>
                <p
                className='ma3 b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f4 dib'
                onClick={ () => onRouteChange(-1) }
                >Back</p>
            </nav>
        );
    }

export default Navigation;