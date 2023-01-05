import React from 'react';
import './Overview.css';
import RepositoryBlock from './OverviewRepositoryBlock';
import Graph from './Graph';

function Overview() {

    const overviewRepositoryData = [
        {
            linkName: "kalyansai99.github.io",
            link: "https://github.com/kalyansai99/kalyansai99.github.io",
            content: " ",
            technology: " "
        },
        {
            linkName: "react-todo",
            link: "https://github.com/kalyansai99/react-todo",
            content: "ToDo App in React",
            technology: "Javascript"
        },
        {
            linkName: "react-starter-components",
            link: "https://github.com/kalyansai99/react-starter-components",
            content: "react-starter",
            technology: "Javascript"
        }
    ]
    return (
        <div className="overview">
            <div className='Popular-repositories'>Popular repositories</div>
            {overviewRepositoryData.map(function (data) {
                return (
                    <RepositoryBlock overviewBlockData={data}></RepositoryBlock>
                )
            })}
            <div style={{marginTop: "24px", marginBottom: "8px"}}>0 contributions in the last year</div>
            <Graph></Graph>
        </div>
    );
}

export default Overview;