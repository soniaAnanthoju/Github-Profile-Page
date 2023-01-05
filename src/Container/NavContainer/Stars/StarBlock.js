import './StarBlock.css';

function StarBlock(props) {

    return (
        <div className='star-block'>
            <div>
                <span className='star-block-project'><a href={props.starBlockData.projectLink}>{props.starBlockData.projectSource}</a></span>         
            </div>
            <div className='star-block-projectName'>{props.starBlockData.projectName}</div>
            <div className='star-block-details'>
                <span className='dot'></span> 
                <span className='star-block-technology'>&nbsp;{props.starBlockData.technology}</span>
                <span className='star-block-technology'>{props.starBlockData.stars}</span>
                <span className='star-block-technology'>{props.starBlockData.fork}</span>
                <span>Updated on {props.starBlockData.updatedOn}</span>
            </div>
        </div>
    );
}

export default StarBlock;