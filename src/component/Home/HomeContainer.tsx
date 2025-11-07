import React from 'react'
import { useSA_UserInfoStore } from '../../store/data';

const HomeContainer = () => {
    const { basicInfo, rank, tier, recentInfo } = useSA_UserInfoStore();
    console.log(basicInfo, rank, tier, recentInfo);
    return (
        <div>
            {/* {data && data.map((item: any) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.email}</p>
                    <p>{item.body}</p>
                </div>
            ))} */}
        </div>
    )
}

export default HomeContainer
