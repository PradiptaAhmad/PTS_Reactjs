import React from "react";
import Header from './header'
import ListData from "./listData";
import { NamaPonsel } from "./utils/data";

class ContainerData extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            dataList: NamaPonsel(),        
        }
    }

    render() {
        return [
            <div className="data app">
                <Header NamaData="Ponsel Xiaomi"/>
                <ListData dataList={this.state.dataList}/>
            </div>
        ]
    }
 
}

export default ContainerData