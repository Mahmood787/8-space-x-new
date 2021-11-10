import * as cdk from '@aws-cdk/core';
import * as cognito from "@aws-cdk/aws-cognito";

export class BackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const userPool = new cognito.UserPool(this, "hub-adviser", {
      selfSignUpEnabled: true,
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      userVerification: {
        emailStyle: cognito.VerificationEmailStyle.CODE,
      },
      autoVerify: {
        email: true,
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: true,
        },
      },
    })

    const userPoolClient = new cognito.UserPoolClient(this, "userPoolClient-Amplify", {
      userPool,
    })

    new cdk.CfnOutput(this, "UserPoolId", {
      value: userPool.userPoolId,
    })

    new cdk.CfnOutput(this, "UserPoolClientId", {
      value: userPoolClient.userPoolClientId,
    })
  }
}
