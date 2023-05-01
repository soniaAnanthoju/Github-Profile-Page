import './Repositories.css';
import RepositoryBlock from '../Repositories/RepositoryBlock';

function Repositories() {
    const repositoryData = [
        {
            linkName: "react-starter-components",
            link: "https://github.com/kalyansai99/react-starter-components",
            content: "react-starter",
            technology: "Javascript",
            fork: 13,
            updatedOn: "Apr 25, 2017"
        },
        {
            linkName: "react-todo",
            link: "https://github.com/kalyansai99/react-todo",
            content: "ToDo App in React",
            technology: "Javascript",
            fork: "",
            updatedOn: "Apr 13, 2016"
        },
        {
            linkName: "github.io",
            link: "https://github.com/kalyansai99/kalyansai99.github.io",
            content: " ",
            technology: " ",
            fork: "",
            updatedOn: "Apr 24, 2014"
        }
    ]
    
    return (
        <div className='repository'>
            <div className='repository-header'>
                <div className='repository-header-left'>
                    <input className="find-repository" type="text" placeholder="Find a repository..." name="find-repository"></input>
                </div>
                <div className='repository-header-right'>
                    <button>Type</button>
                    <button>Langauge</button>
                    <button>Sort</button>
                </div>
            </div>
            {repositoryData.map(function (data) {
                return (
                    <RepositoryBlock repositoryBlockData={data}></RepositoryBlock>
                )
            })}
        </div>
    );
}

export default Repositories;