const fs = require('fs');
const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = 'AKIAJKIPIGH3K5YQJWUA';
const SECRET = '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';

// The name of the bucket that you have created
const BUCKET_NAME = 'vidio-poc';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'sachin.mp4', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

uploadFile('/Users/umeshkhunt/vid-poc-v0/data/sachin_short.mp4');