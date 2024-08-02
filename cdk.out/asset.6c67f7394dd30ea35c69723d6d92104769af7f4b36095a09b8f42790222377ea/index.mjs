import AWS from 'aws-sdk';
var db = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

export const handler = async (event) => {
  const message = '';
  // perform the operation
  db.getItem(params, function (err, data) {
    if (err) {
      message = 'Error reading dynamodb: ' + err;
    } else {
      message = 'Success reading dynamodb: ' + JSON.stringify(data);
    }
  });
  // return a response once it is completed
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    },
    body: {
      message: message,
    },
  };
  return response;
};
