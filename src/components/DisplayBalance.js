import {Statistic, StatisticLabel, StatisticValue} from "semantic-ui-react";
import React from "react";

const DisplayBalance = ({title,value,size,color='black'}) => {
    return (
        <Statistic size={size} color={color}>
            <StatisticLabel>
                {title}
            </StatisticLabel>
            <StatisticValue>{value}</StatisticValue>
        </Statistic>
    );
};

export default DisplayBalance;