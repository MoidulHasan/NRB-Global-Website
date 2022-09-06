import './YCAtivitesStyle.css'
function YCAtivitesGrid() {
    return (
        <div className='ycativity-container'>
            <div className="ycativity-header">
                <h1>Our Regular <span className='ycativity-header-span'>Acitivities</span>  </h1>
            </div>
            <div className="ycativity-parent-grid">
                <div className="ycativity-bloodImg">
                    {/* <img src="../../../assets/image/YCAbout/bloodDonation.jpg" alt="" /> */}
                    <div className="ycativity-blood-bg-bottom">
                    </div>
                    <div className="ycativity-bloodTxt">
                        <h1>Blood Donation</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat sunt iusto et est officia esse itaque iste </p>
                    </div>
                </div>
                <div className="ycativity-foodImg">
                    {/* <img src="../../../assets/image/YCAbout/foodDistribution.jpg" alt="" /> */}
                    <div className="ycativity-food-bg-bottom">
                        <div className="ycativity-sample-foodTxt">
                            <h1>Food Distribution</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat sunt iusto et est officia esse itaque iste </p>
                        </div>
                    </div>
                    <div className="ycativity-foodTxt">
                        <h1>Food Distribution</h1>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat sunt iusto et est officia esse itaque iste </p>
                    </div>
                </div>
                <div className="ycativity-naturaldisasterImg">
                    <div className="ycativity-naturaldisaster-bg-bottom">
                        <div className="ycativity-sample-naturaldisasterTxt">
                            <h1>Food Distribution</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat sunt iusto et est officia esse itaque iste </p>
                        </div>
                    </div>
                    <div className="ycativity-naturaldisasterTxt">
                        <h1>Natural Disaster</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat sunt iusto et est officia esse itaque iste </p>
                    </div>
                    {/* <img src="../../../assets/image/YCAbout/naturalDisaster.jpg" alt="" /> */}
                </div> <div className="ycativity-floodImg">
                    <div className="ycativity-flood-bg-bottom">

                    </div>
                    {/* <img src="../../../assets/image/YCAbout/the flood.jpeg" alt="" /> */}
                    <div className="ycativity-floodTxt">
                        <h1>The Flood</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat sunt iusto et est officia esse itaque iste </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YCAtivitesGrid