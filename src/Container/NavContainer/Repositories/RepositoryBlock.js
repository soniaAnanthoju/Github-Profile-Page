import './RepositoryBlock.css';

function RepositoryBlock(props) {

    return (
        <div className='repository-block'>
            <div>
                <span className='repository-block-linkName'><a href={props.repositoryBlockData.link}>{props.repositoryBlockData.linkName}</a></span>         
                <span className='repository-block-public'>Public</span>
            </div>
            <div className='repository-block-content'>{props.repositoryBlockData.content}</div>
            <div className='repository-block-details'>
                <span className='dot'></span> 
                <span className='repository-block-technology'>&nbsp;{props.repositoryBlockData.technology}</span>
                <span className='repository-block-technology'>{props.repositoryBlockData.fork}</span>
                <span>Updated on {props.repositoryBlockData.updatedOn}</span>
            </div>
        </div>
    );
}

export default RepositoryBlock;