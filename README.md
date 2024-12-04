S3 File Upload Helper
=====================

A simple Node.js script to upload files to an Amazon S3 bucket via API. This script leverages the AWS SDK for seamless integration with S3 and supports secure configuration using environment variables.

### Features

* Upload any file to an S3 bucket.
* Configurable via .env file for secure and flexible usage.
* Handles AWS authentication using Access Key ID and Secret Access Key.
* Provides the uploaded file’s public URL (if the bucket allows public access).

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed on your system. Download Node.js
2. **AWS Account**: You must have an AWS account with access to S3.
3. **S3 Bucket**: Create an S3 bucket to upload your files. Make a note of the bucket name and region.

### Installation

1. Clone or download this repository.
2. Navigate to the project directory:

```bash
cd s3-upload-script
```

3. Install dependencies:

```bash
npm install
```

### Configuration

1. Create a .env file in the project directory:

```bash
touch .env
```

2. Add your AWS credentials and bucket details to the .env file:

```bash
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_REGION=your-region
S3_BUCKET_NAME=your-bucket-name
```

Replace the placeholders (your-access-key-id, your-secret-access-key, etc.) with your actual values.

### Usage

1. Add the file you want to upload to the project directory.
2. Open upload.js and update the following variables:

```javascript
const filePath = './example.txt'; // Path to the file you want to upload
const keyName = 'example.txt'; // File name in the S3 bucket
```

3. Run the script:

```bash
node upload.js
```

### Example Output

If the upload is successful, you will see output like this:

```
File uploaded successfully: https://{bucket-name}.s3.me-south-1.amazonaws.com/example.txt
```

The output URL can be used to access the file directly (if public access is enabled).

### Verify Upload

1. Log in to the AWS Management Console.
2. Navigate to the S3 service.
3. Open your bucket (S3_BUCKET_NAME) and verify that the file appears.

### Dependencies

* **aws-sdk**: AWS SDK for JavaScript for interacting with S3.
* **dotenv**: Loads environment variables from a .env file.
* **fs**: Node.js file system module to handle file operations.

### Customization

* To upload different file types, update the filePath and keyName variables in upload.js.
* You can dynamically detect MIME types using the mime library:

```bash
npm install mime
```

### Troubleshooting

* **Error: Access Denied**:
	+ Ensure the S3 bucket policy allows your IAM user to upload files.
* **File Not Found**:
	+ Verify that the filePath matches the location of your file.