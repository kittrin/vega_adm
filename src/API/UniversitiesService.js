import axios from "axios";

export default class UniversitiesService {
    static async getAll(grade, sort = 'title', typeSort = 'ASC', page, size) {
        //grade HIGH MIDDLE
        //sort priority/title ASK/DESK

        return await axios({
            method: 'get',
            url: `http://194.67.112.88:16666/university?gradeFilter=${grade}&page=${page}&size=${size}&sort=${sort}%2C${typeSort}`,
            headers: {
                'Authorization': 'testdatabase'
            }
        }).then((response) => {
            console.log()
            return response.data
        })
    }

    static async getById(id) {
        return await axios({
            method: 'get',
            url: `http://194.67.112.88:16666/university/${id}`,
            headers: {
                'Authorization': 'testdatabase'
            }
        }).then((response) => {
            return response.data
        })
    }

    static async getDateOpenDoors(id) {
        return await axios({
            method: 'get',
            url: `http://194.67.112.88:16666/university/${id}/openDoorsDays`,
            headers: {
                'Authorization': 'testdatabase'
            }
        }).then((response) => {
            return response.data
        })
    }

    static async getMiddleSpecialities(id) {
        return await axios({
            method: 'get',
            url: `http://194.67.112.88:16666/university/${id}/middleSpecialities`,
            headers: {
                'Authorization': 'testdatabase'
            }
        }).then((response) => {
            return response.data
        })
    }

    static async getHighSpecialties(id) {
        return await axios({
            method: 'get',
            url: `http://194.67.112.88:16666/university/${id}/highSpecialities`,
            headers: {
                'Authorization': 'testdatabase'
            }
        }).then((response) => {
            return response.data
        })
    }

    static async postUniversity(title, shortTitle, description, address, site, town, grade, priority, studentsTelegramChatUrl) {
        return await axios.post('http://194.67.112.88:16666/university/', {
            title: title,
            shortTitle: shortTitle,
            description: description,
            address: address,
            site: site,
            town: town,
            grade: grade,
            priority: priority,
            studentsTelegramChatUrl: studentsTelegramChatUrl
        }, {
            headers: {
                'Authorization': 'testdatabase'
            }
        }).then((response) => {
            console.log(`postUniversity ${response}`)
            return response.data
        })
    }

    static async putUniversity(id, title, shortTitle, description, address, site, town, grade, priority, studentsTelegramChatUr) {
        return await axios({
                method: 'put',
                url: `http://194.67.112.88:16666/university/${id}`,
                data: {
                    title: title,
                    shortTitle: shortTitle,
                    description: description,
                    address: address,
                    site: site,
                    town: town,
                    grade: grade,
                    priority: priority,
                    studentsTelegramChatUr: studentsTelegramChatUr
                },
                headers: {
                    'Authorization': 'testdatabase'
                }
            }
        ).then((response) => {
            console.log(`putUniversity ${response}`)
            return response.data
        })
    }

    static async deleteUniversity(id) {
        return await axios({
            method: 'delete',
            url: `http://194.67.112.88:16666/university/${id}`,
            headers: {
                'Authorization': 'testdatabase'
            }
        }).then((response) => {
            console.log(`deleteUniversity ${response}`)
            return response.data
        })
    }

    static async getDetailUniverse(id){
        return await axios({
            method: 'get',
            url: `http://194.67.112.88:16666/university/${id}/details`,
            headers: {
                'Authorization': 'testdatabase'
            }
        }).then((response) => {
            return response.data
        })
    }
}