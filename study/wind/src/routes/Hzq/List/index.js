import React from 'react'
import { Link } from 'dva/router'
const mockDataSource = [
    { id: '10001', name: 'React' },
    { id: '10002', name: 'Redux' },
    { id: '10003', name: 'React-Router' },
    { id: '10004', name: 'Redux-Saga' },
    { id: '10005', name: 'dva' },
    { id: '10006', name: 'Wind' },
];
const Table = ({ dataSource }) => (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {
                dataSource.map(item =>(
                    <Item
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </tbody>
    </table>
);
const Item = ({ id,name}) =>(
    <tr>
        <td>
            {/*这里 ``路由*/}
            <Link to={`/detail/${id}`}>{id}</Link>
        </td>
        <td>{name}</td>
    </tr>
);
const List = () =>(
    <div>
        <h2>List</h2>
        <Table dataSource={mockDataSource} />
    </div>
);
/*const List = ( ) => (
    <div>List</div>
);*/

export default List