import axios from 'axios';

const getProjects = () => new Promise((resolve, reject) => {
    axios.get('https://v2-api.sheety.co/b00788f7b16579e764e16ee3b7badeac/portfolioProjectData/projData')
        .then((res) => {
            resolve(res.data);
        })
        .catch(err => reject(err));
});

export default { getProjects };