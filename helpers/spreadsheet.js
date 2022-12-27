// Spreadsheet Plugin
import { GoogleSpreadsheet } from 'google-spreadsheet'

// Spreadsheet Creds
import creds from '@/config/auth-spreadsheet.json'

/**
 * @description for connecting service to server
 *
 * @param {Number} index index get from worksheet UI google spreadsheet
 *
 * @return {Promise}
 *
 */
export const connectServerSpreadsheet = async (index) => {
  try {
    const doc = new GoogleSpreadsheet(sheetId({ get: true }))
    await doc.useServiceAccountAuth(creds)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[index]

    return Promise.resolve(sheet)
  } catch (err) {
    return Promise.reject(err)
  }
}

/**
 * @description get sheet ID data
 *
 * @return {string}
 */
export const sheetId = () => {
  return 'SOME_SPREADSHEET_ID'
}
