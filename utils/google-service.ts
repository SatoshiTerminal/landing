import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/cloud-platform",
  ],
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
});

const sheetService = google.sheets({ version: "v4", auth });
const recaptchaService = google.recaptchaenterprise({ version: "v1", auth });

export const appendToSheet = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
  country,
  whoAreYou,
  messageHearAbout,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  whoAreYou: string;
  messageHearAbout: string;
}) => {
  const dateAdded = new Date().toISOString();

  return sheetService.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: "Waiting List",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          firstName,
          lastName,
          email,
          phoneNumber,
          country,
          whoAreYou,
          messageHearAbout,
          dateAdded,
        ],
      ],
    },
  });
};

export const createRecaptchaAssessment = async ({
  token,
  siteKey,
}: {
  token: string;
  siteKey: string;
}) => {
  return recaptchaService.projects.assessments.create({
    parent: `projects/${process.env.GOOGLE_PROJ_ID}`,
    requestBody: {
      event: {
        token,
        siteKey,
      },
    },
  });
};
