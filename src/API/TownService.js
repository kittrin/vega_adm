import axios from "axios";

export default class TownService {
    static async getAll(titleFilter='', page = 0, size=10, sort = 'title', typeSort = 'ASC') {
        return await axios({
            method: 'get',
            url: `http://194.67.112.88:16666/town?page=${page}&size=${size}&sort=${sort}%2C${typeSort}&titleFilter=${titleFilter}`,
            headers: {
                'Authorization': 'testdatabase'
            }
        }).then((response) => {
            return response.data
        })
    }
    static async getById(townId){
        return await axios({
            method: 'get',
            url: `http://194.67.112.88:16666/town/${townId}`,
            headers: {
                'Authorization': 'testdatabase'
            }
        }).then((response) => {
            return response.data
        })
    }
}