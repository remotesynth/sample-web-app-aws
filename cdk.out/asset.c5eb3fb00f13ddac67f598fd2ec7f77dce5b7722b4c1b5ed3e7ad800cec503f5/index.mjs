import * as DynamoDB from '@aws-sdk/client-dynamodb';
const client = new DynamoDB();

export const handler = async (event) => {
  const message = '';
  // perform the operation
  var params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id: { S: 'message1' },
    },
  };
  client.getItem(params, function (err, data) {
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
