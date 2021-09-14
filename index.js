const axios = require('axios');
const base_url = 'https://api.github.com/repos';
let owner = 'aklen';
let repo = 'ApertusVR';
let branches = [];

axios.get(`${base_url}/${owner}/${repo}/branches`)
    .then(response => {
        branches = response.data;
        // console.log(branches);
        for (const branch of branches) {
            const branchName = branch.name;
            axios.get(`${base_url}/${owner}/${repo}/branches/${branchName}`)
                .then(response => {
                    commits = response.data;
                    console.log(branchName);
                    console.log(commits.commit.commit.author.date);
                    console.log('');
                })
                .catch(error => {
                    console.log(error);
                });
        }
    })
    .catch(error => {
        console.log(error);
    });
