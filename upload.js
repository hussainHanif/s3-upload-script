require('dotenv').config(); // Load environment variables from .env file
const AWS = require('aws-sdk');
const fs = require('fs'); // File system module

// Load AWS credentials from environment variables
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

// Initialize S3 client
const s3 = new AWS.S3();

async function uploadFile(filePath, bucketName, keyName) {
    try {
        // Read the file content
        const fileContent = fs.readFileSync(filePath);

        // Set up S3 upload parameters
        const params = {
            Bucket: bucketName, // Bucket name
            Key: keyName, // File name in the bucket
            Body: fileContent, // File content
            ContentType: 'application/octet-stream', // Optional: Adjust based on file type
        };

        // Upload file to S3
        const result = await s3.upload(params).promise();
        console.log('File uploaded successfully:', result.Location);
    } catch (error) {
        console.error('Error uploading file:', error.message);
    }
}

// Replace with your file path and desired key name in the bucket
const filePath = './example.txt'; // Path to the file you want to upload
const keyName = 'example.txt'; // Name of the file in the S3 bucket

// Call the function to upload the file
uploadFile(filePath, process.env.S3_BUCKET_NAME, keyName);
