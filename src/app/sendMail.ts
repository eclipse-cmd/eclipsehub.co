const { MailtrapClient } = require('mailtrap');

const TOKEN = process.env.MAILTRAP_TOKEN;
const ADDRESS = process.env.MAILTRAP_ADDRESS;
const NAME = process.env.MAILTRAP_NAME;

const client = new MailtrapClient({ token: TOKEN });

export const sendMail = async ({
  recipients,
  templateUUID,
  templateVariables,
}: {
  recipients: { email: string }[];
  templateUUID: string;
  templateVariables?: Record<any, any>;
}) => {
  try {
    const response = await client.send({
      from: { email: ADDRESS, name: NAME },
      to: recipients,
      template_uuid: templateUUID,
      template_variables: templateVariables,
    });
    console.log('Mail Sent: ', response);
  } catch (error) {
    console.log('Mail Error: ', error);
  }
};
