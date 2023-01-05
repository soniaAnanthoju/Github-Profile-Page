import './Stars.css';
import StarBlock from './StarBlock';

function Stars() {

    const starData = [
        {
            projectSource: "bitshadow / slate",
            projectLink: "https://github.com/bitshadow/slate",
            projectName: "A text only meme generator",
            technology: "Javascript",
            stars: 102,
            fork: 23,
            updatedOn: "Jan 20, 2018"
        },
        {
            projectSource: "DanielRapp / doppler",
            projectLink: "https://github.com/DanielRapp/doppler",
            projectName: "Motion detection using the doppler effect",
            technology: "Javascript",
            stars: 2379,
            fork: 187,
            updatedOn: "Mar 30, 2017"
        },
        {
            projectSource: "bitshadow / iconate",
            projectLink: "https://github.com/bitshadow/iconate",
            projectName: "Transform your icons with trendy animations.",
            technology: "Javascript",
            stars: 2006,
            fork: 224,
            updatedOn: "Jun 5, 2019"
        }
    ]

    return (
        <div className='star'>
            <div className='stars'>Stars</div>
            <div className='star-header'>
                <div className='star-header-left'>
                    <input className="search-stars" type="text" placeholder="Search stars"></input>
                </div>
                <div className='star-header-right'>
                    <button>Type</button>
                    <button>Langauge</button>
                    <button>Sort by: Recently starred</button>
                </div>
            </div>
            {starData.map(function (data) {
                return (
                    <StarBlock starBlockData={data}></StarBlock>
                )
            })}
        </div>
    );
}

export default Stars;