const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

async function run(){
    core.notice('Hello from deploy-s3-javascript action!');
}

run();