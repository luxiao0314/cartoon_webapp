/**
 * @Description
 * @Author lucio
 * @Email lucio0314@163.com
 * @Date 08/07/2017$
 * @Version
 */
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import '../css/App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import deepOrange500 from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs'

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

@observer
export default class Header extends Component {
    render() {
        const {tabs} = this.props;
        return (
            <dev className="App">
                <MuiThemeProvider muiTheme={muiTheme}>
                    <dev>
                        <AppBar title="动漫之家"/>
                        <Tabs onChange={this.handleChange} value={1}>{
                            tabs.map((tab, i) =>
                                <Tab onActive={this.onActive} key={i} label={tab} value={i}/>
                            )}
                        </Tabs>
                    </dev>
                </MuiThemeProvider>
            </dev>
        )
    };

    handleChange = (value) => {

    };

    onActive = (tab) => {
        alert(tab)
    }
}