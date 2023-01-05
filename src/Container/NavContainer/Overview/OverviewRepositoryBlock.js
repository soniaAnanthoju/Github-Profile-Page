import './OverviewRepositoryBlock.css';

function RepositoryBlock(props) {

    return (
        <div className='overview-repository-block'>
            <span className='linkName'><a href={props.overviewBlockData.link}>{props.overviewBlockData.linkName}</a></span>
            <span className='public'>Public</span>
            <div className='content'>{props.overviewBlockData.content}</div>
            <div className='technology'><span class='dot'></span> {props.overviewBlockData.technology}</div>
        </div>
    );
}

export default RepositoryBlock;