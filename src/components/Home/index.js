import logotitle from '../../assets/images/logo_sub.png'
const Home  = () => {
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm</h1>
                <img src={logotitle} alt="" />
            </div>
        </div>
    )
}

export default Home;