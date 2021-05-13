import React from 'react';
import StarRating from './StarRating';

 const DisplayTable = ({data, repositories}) => {
    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Avatar</th>
                    <th>localização</th>
                    <th>Bio</th>
                    <th>Repositorios</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.name}</td>
                    <td>{!data.avatar_url ? " " : (
                        <img className="ui small circular image"
                            src={data.avatar_url}
                            alt={data.avatar_url}
                        />
                    )}
                    </td>
                    <td>{data.location}</td>
                    <td>{data.bio}</td>
                    <td>{repositories.map( repo => (
                         <div className = "ui relaxed divided list" key={repo.name}>
                            <div className="item">
                                <i className="large github middle aligned icon">

                                </i>
                                <div className="content">
                                    <a 
                                    href={repo.html_url} 
                                    className="header"
                                    target="_blank">
                                        {repo.name}
                                    </a>
                                </div>

                            </div>
                         </div>
                    ))}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
export default DisplayTable;