/**
 * @Description
 * @Author lucio
 * @Email lucio0314@163.com
 * @Date 08/07/2017$
 * @Version
 */
import React, {Component} from 'react';
import Header from "../components/Header";
import {inject, observer} from 'mobx-react';

let tabs = ['新闻', '快讯'];

@inject('homeStore')
@observer
export default class Home extends Component {

    componentWillMount() {
        this.props.homeStore.fetchData();
    }

    render() {
        const {dataArr} = this.props.homeStore;
        return (
            <dev>
                {/*<Banner bannerData={dataArr}/>*/}
                <Header tabs={tabs}>

                </Header>
            </dev>
        )
    }
}