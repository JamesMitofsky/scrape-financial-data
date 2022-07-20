# Scrape Financial Data

Scrapes data from the Vermont Federal Credit Union site, uploads to Google Sheets, and — if there's a delta against the previously documented data in

## Getting Started

```bash
npm i
```

## Project Requirements

1. Scrape data:
   1. Table data:
      1. New & Used Car Loan
      2. New/Used Energy Efficient Auto Loans
      3. Mortgage Loans: Conventional Programs
   2. IRA certificates if they ever get above 1%
2. Send data to spreadsheet.
3. Notify if data changes.

## Technologies

- Google Sheets API
- Twilio
- Google Firebase Functions
