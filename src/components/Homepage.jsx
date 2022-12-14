import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';


// import { useGetCryptosQuery } from '../Services/cryptoApi';

const Homepage = () => {
    // const { data, isFetching } = useGetCryptosQuery();
    // const globalStats = data?.data?.stats

    // if(isFetching) return 'Loading...';

    return (
      <>
      <Typography.Title level={2} classname='heading'>
      Global Cyrpto Stats
      </Typography.Title>
      <Row>
        <Col span={12}><Statistic title='Total Cryptocurrencies' value='{globalStats.total}' /></Col>
        <Col span={12}><Statistic title='Total Exchanges' value='5' /></Col>
        <Col span={12}><Statistic title='Total Market Cap' value='5' /></Col>
        <Col span={12}><Statistic title='Total 24hrs Volume' value='5' /></Col>
        <Col span={12}><Statistic title='Total Markets' value='5' /></Col>
      </Row>
       
      </>
    );
}

export default Homepage;
