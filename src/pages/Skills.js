import React from 'react';

const Skills = () => {
    // Define the skills data
    const skillsData = [
        'Java',
        'Python',
        'Ruby',
        'Bash',
        'PLSQL',
        'Linux',
        'C#',
        'Node.js',
        'JavaScript',
        'Data Manipulation',
        'Data Structures',
        'Database Design',
        'Algorithms',
        'REST',
        'Java Spring',
        'Machine Learning',
        'GraphQL API Development',
        'CRUD Operations',
        'React Development',
        'PowerBI',
        'AWS',
        'Microsoft Azure',
        'MongoDB Cloud',
        'CI/CD Pipelines',
        'Git',
        'Jenkins',
        'MongoDB',
        'Oracle SQL',
        'MySQL',
        'Brainstorming & Problem Solving',
        'Team Leading',
        'Event Hosting and Organizing',
        'Project Handling'
    ];
    

    return (
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                {skillsData.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
