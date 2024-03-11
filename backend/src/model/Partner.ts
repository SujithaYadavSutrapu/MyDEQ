import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

AWS.config.update({ region: "us-east-1" });
const dynamodb = new AWS.DynamoDB();
const documentClient = new AWS.DynamoDB.DocumentClient();

export class Partner {
  async createTable() {
    const tableName = "partners";
    const params = {
      TableName: tableName,
      KeySchema: [{ AttributeName: "partner_id", KeyType: "HASH" }],
      AttributeDefinitions: [
        { AttributeName: "partner_id", AttributeType: "S" },
        { AttributeName: "name", AttributeType: "S" },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    };

    try {
      await dynamodb.createTable(params).promise();
      console.log(`Table ${tableName} created successfully.`);
    } catch (error) {
      console.error(`Error creating table ${tableName}:`, error);
      throw error;
    }
  }

  async addItem(item: any) {
    const partner_id = uuidv4();
    item.partner_id = partner_id;

    const putParams = {
      TableName: "partners",
      Item: item,
    };

    try {
      const data = await documentClient.put(putParams).promise();
      console.log("Item added successfully:", data);
    } catch (error) {
      console.error("Error adding item:", error);
      throw error;
    }
  }
}
