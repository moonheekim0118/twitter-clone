const AWS = require('aws-sdk');
const sharp = require('sharp');

const s3 = new AWS.S3();

exports.handler = async (event, context, callback)=>{ 
    const Bucket = event.Records[0].s3.bucket.name; // s3 버켓 이름
    const Key = decodeURIComponent(event.Records[0].s3.object.key); // original 
    const filename = Key.split('/')[Key.split('/').length-1]; // 파일명
    const ext = Key.split('.')[Key.split('.').length-1].toLowerCase(); // 확장자 
    const requiredFormat = ext === 'jpg' ?'jpeg':ext;
    
    try { 
        const s3Object = await s3.getObject({Bucket, Key}).promise();
        const resizedImage = await sharp(s3Object.body).resize(200,200,{fit:'inside'})
        .toFormat(requiredFormat)
        .toBuffer();
        await s3.putObject({
            Bucket,
            Key: `thumb/${filename}`,
            Body: resizedImage
        });
        return callback(null, `thumb/${filename}`).promise();
    }catch(error){
        console.error(erorr);
        return callback(error);
    }

}