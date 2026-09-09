const Mailjet = require("node-mailjet");


const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
)

const sendMail = async (expenseTitle) => {
    try {
        const response = await mailjet.post("send", {'version': 'v3.1'}).request({
            Messages: [
                {
                    From: {
                        Email: "mauronacimento777@gmail.com",
                        Name: " Mauro Nacimento 1"
                    },
                    To: [
                        {
                            Email: "mauro.nacimento77@gmail.com",
                            Name:"Mauro Nacimento 2"
                        }
                    ],
                    Subject: "Nuevo Gasto Creado - " + expenseTitle,
                    TextPart: "Tienes un nuevo Gasto en tu lista de gastos: " + expenseTitle,
                    HTMLPart: `
                        <!doctype html>
                        <html lang="es">
                          <body style="margin:0; padding:0; background-color:#f4f5f7; font-family: Arial, Helvetica, sans-serif;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7; padding:24px 0;">
                              <tr>
                                <td align="center">
                                  <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">

                                    <!-- Header -->
                                    <tr>
                                      <td style="background-color:#2563eb; padding:24px; text-align:center;">
                                        <h1 style="margin:0; color:#ffffff; font-size:20px;">💸 Gastos Express</h1>
                                      </td>
                                    </tr>

                                    <!-- Body -->
                                    <tr>
                                      <td style="padding:32px 24px;">
                                        <h2 style="margin:0 0 16px; color:#111827; font-size:18px;">Nuevo gasto creado</h2>
                                        <p style="margin:0 0 16px; color:#374151; font-size:14px; line-height:1.5;">
                                          Se agregó un nuevo gasto a tu lista:
                                        </p>
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb; border-radius:6px; margin-bottom:24px;">
                                          <tr>
                                            <td style="padding:16px; color:#111827; font-size:16px; font-weight:bold;">
                                              ${expenseTitle}
                                            </td>
                                          </tr>
                                        </table>
                                        <p style="margin:0; color:#6b7280; font-size:13px;">
                                          Podés revisar el detalle desde tu panel de Gastos Express.
                                        </p>
                                      </td>
                                    </tr>

                                    <!-- Footer -->
                                    <tr>
                                      <td style="background-color:#f9fafb; padding:16px 24px; text-align:center;">
                                        <p style="margin:0; color:#9ca3af; font-size:12px;">
                                          Este correo fue generado automáticamente. No respondas a este mensaje.
                                        </p>
                                      </td>
                                    </tr>

                                  </table>
                                </td>
                              </tr>
                            </table>
                          </body>
                        </html>
                    `
                },
            ],
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = sendMail;