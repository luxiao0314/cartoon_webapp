/**
 * @Description
 * @Author lucio
 * @Email lucio0314@163.com
 * @Date 08/07/2017$
 * @Version
 */
import {observable, action, computed} from 'mobx';
import * as HTTPTools from "../utils/HTTPTools";
import api from "../api";
export class homeStore {

    @observable dataArr = [];
    @observable errorMsg = '';

    // @action fetchData = async () => {
    //     let url = "http://weizijie.cc:3000/livePageData";
    //     HTTPTools.get(url)
    //         .then((data) => {
    //             this.errorMsg = '';
    //             let parse = JSON.parse(data.data);
    //             this.dataArr = (parse.data.banner);
    //         })
    //         .catch(error => {
    //             if (error.msg) {
    //                 this.errorMsg = error.msg
    //             } else {
    //                 this.errorMsg = error
    //             }
    //         });
    // };

    @action fetchData() {
        return api.Banner.data()
            .then(action(({data}) => {
                data = JSON.parse(data);
                this.dataArr = (data.data.banner);
                this.errorMsg = '';
            }))
            .catch(action(error => {
                if (error.msg) {
                    this.errorMsg = error.msg
                } else {
                    this.errorMsg = error
                }
                throw error;
            }));
    }
}

export default new homeStore();
