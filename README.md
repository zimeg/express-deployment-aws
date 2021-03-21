# Serverless MERN

I'm just trying to figure out how to deploy MERN apps to AWS, cheaply

## Current State
Deploys a Node/Express app using API Gateway and Lambda

## Setup
If you're interested in building off this example, just do the following
1. Install your dependencies with `yarn`
2. Modify the "config" section of `package.json` with whatever you want
3. Setup an IAM user that has enough permission to deploy this app! (TODO:
figure out what "enough permission" is, for now I'm using Administrator Access)

## Running the example
The minimum to get a working example!
1. Initialize a bucket with `yarn run create-bucket`
2. Run `yarn run package-deploy`
3. You'll have your Express app (or whatever is in `/backend` up and running
somewhere on AWS!

## Goal
Hopefully this will be a Github Action that you can just plug-in to existing
apps so deployment is ez pz (and cheap)
