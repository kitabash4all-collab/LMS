// Practice data for AI at Work · Level 2. Everything here is invented: no real people, companies or customers.
// "Example Foods" is a fictional tiffin and snacks supplier in Pune. Customers appear only as codes (C-101…).

/** Lesson 2 and 4: three weeks of orders (5–26 Oct 2026, 54 rows) with 4 deliberate problems to clean:
 * a duplicate (ORD-3144), extra spaces in Area (ORD-3138 "Baner ", ORD-3149 " Hinjewadi"),
 * amounts typed as text (ORD-3146 "2,400/-", ORD-3148 "1,800/-") and a blank amount (ORD-3141).
 * Clean figures for the week starting Mon 19 Oct 2026: delivered sales ₹15,310 from 15 orders, 1 cancelled,
 * 1 pending, credit to collect ₹750. Week of 12 Oct: ₹14,090 from 14 orders. Week of 5 Oct: ₹15,850.
 * Common wrong answers: ₹12,510 (SUMIFS on the uncleaned sheet), ₹16,530 ("<=" Monday+7 also counts 26 Oct),
 * ₹16,360 (no Status condition, so cancelled and pending orders are counted). */
export const WEEKLY_ORDERS_CSV = "Order Date,Order ID,Customer Code,Area,Item,Qty,Rate (INR),Amount (INR),Payment,Status\n2026-10-05,ORD-3101,C-115,Viman Nagar,Samosa Box (10),6,150,900,Credit,Delivered\n2026-10-05,ORD-3102,C-117,Viman Nagar,Masala Chai Flask,3,200,600,Credit,Delivered\n2026-10-05,ORD-3103,C-105,Kothrud,Mini Meal,8,90,720,Credit,Delivered\n2026-10-06,ORD-3104,C-113,Viman Nagar,Fruit Bowl,5,80,400,Credit,Delivered\n2026-10-06,ORD-3105,C-117,Kothrud,Fruit Bowl,10,80,800,UPI,Delivered\n2026-10-06,ORD-3106,C-120,Kothrud,Veg Thali,12,120,1440,Cash,Cancelled\n2026-10-07,ORD-3107,C-107,Hadapsar,Poha Plate,30,40,1200,UPI,Delivered\n2026-10-07,ORD-3108,C-122,Kothrud,Fruit Bowl,15,80,1200,Cash,Delivered\n2026-10-07,ORD-3109,C-118,Kothrud,Fruit Bowl,15,80,1200,UPI,Delivered\n2026-10-08,ORD-3110,C-101,Kothrud,Poha Plate,12,40,480,Credit,Delivered\n2026-10-08,ORD-3111,C-110,Viman Nagar,Veg Thali,25,120,3000,UPI,Delivered\n2026-10-08,ORD-3112,C-102,Viman Nagar,Veg Thali,5,120,600,Cash,Delivered\n2026-10-09,ORD-3113,C-119,Baner,Fruit Bowl,25,80,2000,UPI,Delivered\n2026-10-09,ORD-3114,C-101,Viman Nagar,Poha Plate,8,40,320,UPI,Delivered\n2026-10-09,ORD-3115,C-101,Kothrud,Mini Meal,12,90,1080,Cash,Delivered\n2026-10-10,ORD-3116,C-107,Viman Nagar,Samosa Box (10),3,150,450,Credit,Delivered\n2026-10-10,ORD-3117,C-113,Kothrud,Mini Meal,10,90,900,Cash,Delivered\n2026-10-12,ORD-3118,C-119,Hinjewadi,Samosa Box (10),3,150,450,UPI,Delivered\n2026-10-12,ORD-3119,C-120,Hadapsar,Mini Meal,10,90,900,UPI,Delivered\n2026-10-12,ORD-3120,C-109,Kothrud,Veg Thali,10,120,1200,Credit,Delivered\n2026-10-13,ORD-3121,C-103,Kothrud,Poha Plate,15,40,600,UPI,Delivered\n2026-10-13,ORD-3122,C-112,Hinjewadi,Masala Chai Flask,3,200,600,Credit,Delivered\n2026-10-13,ORD-3123,C-116,Hadapsar,Samosa Box (10),3,150,450,UPI,Delivered\n2026-10-14,ORD-3124,C-110,Baner,Samosa Box (10),3,150,450,Credit,Delivered\n2026-10-14,ORD-3125,C-121,Hadapsar,Mini Meal,12,90,1080,UPI,Delivered\n2026-10-14,ORD-3126,C-120,Kothrud,Fruit Bowl,25,80,2000,Cash,Cancelled\n2026-10-15,ORD-3127,C-117,Hinjewadi,Veg Thali,8,120,960,UPI,Delivered\n2026-10-15,ORD-3128,C-120,Viman Nagar,Fruit Bowl,25,80,2000,UPI,Delivered\n2026-10-15,ORD-3129,C-103,Baner,Masala Chai Flask,3,200,600,UPI,Cancelled\n2026-10-16,ORD-3130,C-120,Hadapsar,Samosa Box (10),6,150,900,UPI,Delivered\n2026-10-16,ORD-3131,C-107,Kothrud,Poha Plate,12,40,480,UPI,Cancelled\n2026-10-16,ORD-3132,C-102,Kothrud,Poha Plate,25,40,1000,UPI,Delivered\n2026-10-17,ORD-3133,C-105,Kothrud,Poha Plate,20,40,800,UPI,Delivered\n2026-10-17,ORD-3134,C-122,Hadapsar,Mini Meal,30,90,2700,Credit,Delivered\n2026-10-19,ORD-3135,C-116,Hinjewadi,Mini Meal,5,90,450,UPI,Cancelled\n2026-10-19,ORD-3136,C-103,Viman Nagar,Veg Thali,5,120,600,UPI,Delivered\n2026-10-19,ORD-3137,C-103,Kothrud,Fruit Bowl,15,80,1200,Cash,Delivered\n2026-10-20,ORD-3138,C-124,Baner ,Masala Chai Flask,4,200,800,UPI,Delivered\n2026-10-20,ORD-3139,C-103,Viman Nagar,Poha Plate,8,40,320,UPI,Delivered\n2026-10-20,ORD-3140,C-122,Viman Nagar,Samosa Box (10),6,150,900,Cash,Delivered\n2026-10-21,ORD-3141,C-103,Kothrud,Masala Chai Flask,2,200,,UPI,Delivered\n2026-10-21,ORD-3142,C-113,Hadapsar,Poha Plate,25,40,1000,Cash,Delivered\n2026-10-21,ORD-3143,C-103,Hadapsar,Samosa Box (10),5,150,750,Credit,Delivered\n2026-10-22,ORD-3144,C-116,Kothrud,Veg Thali,15,120,1800,UPI,Delivered\n2026-10-22,ORD-3144,C-116,Kothrud,Veg Thali,15,120,1800,UPI,Delivered\n2026-10-22,ORD-3145,C-120,Viman Nagar,Fruit Bowl,8,80,640,UPI,Delivered\n2026-10-22,ORD-3146,C-122,Hadapsar,Veg Thali,20,120,\"2,400/-\",UPI,Delivered\n2026-10-23,ORD-3147,C-111,Viman Nagar,Masala Chai Flask,3,200,600,Cash,Pending\n2026-10-23,ORD-3148,C-109,Baner,Mini Meal,20,90,\"1,800/-\",Cash,Delivered\n2026-10-23,ORD-3149,C-119, Hinjewadi,Mini Meal,12,90,1080,UPI,Delivered\n2026-10-24,ORD-3150,C-102,Kothrud,Mini Meal,10,90,900,UPI,Delivered\n2026-10-24,ORD-3151,C-109,Baner,Mini Meal,8,90,720,Cash,Delivered\n2026-10-26,ORD-3152,C-111,Hadapsar,Samosa Box (10),6,150,900,Cash,Delivered\n2026-10-26,ORD-3153,C-109,Hadapsar,Poha Plate,8,40,320,UPI,Delivered\n";

/** Lesson 3: 18 responses to a fictional Excel workshop feedback form (no names or emails collected).
 * Average rating 3.9 (70/18). Low ratings (1 or 2): 2. Online session average 2.9 (7 responses), Pune office 4.5 (11).
 * "fast" is mentioned in 5 comments, "practice" in 5 (4 ask for more practice time, 1 for the practice file), slides in 3, audio in 2. Recommend: Yes 13, Maybe 3, No 2.
 * Response 12 contains a (fake) phone number on purpose: learners must remove it before pasting into an AI tool. */
export const FEEDBACK_RESPONSES_CSV = "Timestamp,Which session did you attend?,How useful was the session? (1-5),What was most useful?,What should we improve?,Would you recommend it to a colleague?\n28/10/2026 17:02:11,Pune office,5,Shortcuts for filling a column,More practice time,Yes\n28/10/2026 17:03:45,Online,4,SUMIF example with real sales,Session felt a bit too fast,Yes\n28/10/2026 17:05:09,Online,3,Conditional formatting,Too fast in the second half,Maybe\n28/10/2026 17:06:30,Pune office,5,\"Everything, very clear\",Please send the slides after,Yes\n28/10/2026 17:10:52,Online,2,\"Not much, I already knew it\",Audio kept breaking on the online link,No\n28/10/2026 17:12:04,Pune office,4,Freeze panes and filters,More practice time with our own type of sheets,Yes\n28/10/2026 17:15:38,Pune office,5,SUMIF,\"Nothing, it was great\",Yes\n28/10/2026 17:21:17,Pune office,4,Conditional formatting,Send the practice file before the class,Yes\n28/10/2026 17:30:40,Online,3,Filters,Too fast; I could not follow the formulas,Maybe\n28/10/2026 18:02:55,Pune office,4,Shortcuts,More practice time,Yes\n28/10/2026 18:45:12,Pune office,5,SUMIF and COUNTIF,Please share slides,Yes\n28/10/2026 19:20:03,Online,1,-,The audio was very poor. Please call me at 90000 00000 to discuss,No\n28/10/2026 20:11:29,Online,4,Charts,A bit fast,Yes\n29/10/2026 09:14:47,Pune office,4,Conditional formatting,\"Longer session, maybe 90 minutes\",Yes\n29/10/2026 09:40:16,Pune office,5,Charts and SUMIF,Nothing,Yes\n29/10/2026 10:05:33,Online,3,Filters,Too fast for beginners,Maybe\n29/10/2026 11:22:08,Pune office,4,Shortcuts,Slides after the class please,Yes\n29/10/2026 13:58:41,Pune office,5,Conditional formatting,More practice exercises,Yes\n";

/** Lesson 1: a practice mail-merge list for a fictional coaching centre (invented first names only). */
export const FEE_REMINDERS_CSV =
  'First Name,Batch,Amount Due (INR),Due Date,Language\nAarav,Class 9 Maths,2500,2026-11-10,English\nMeera,Class 10 Science,3000,2026-11-10,English\nZoya,Class 9 Maths,2500,2026-11-12,Hindi\nKabir,Class 8 English,1800,2026-11-12,English\nRiya,Class 10 Science,3000,2026-11-15,Hindi\nArjun,Class 8 English,1800,2026-11-15,English\nIshaan,Class 10 Science,1500,2026-11-15,English\nSana,Class 9 Maths,2500,2026-11-20,Hindi\n';

/** Lesson 3: the Apps Script that emails you a summary of a feedback form (read-only, sends one email, only to you). */
export const FEEDBACK_SUMMARY_GS = `// Emails ME a short summary of the feedback form responses.
// It only READS the sheet. It never changes or deletes anything.
// Sheet tab: "Form Responses 1". Column C (the 3rd column) holds the 1-5 rating.
function sendFeedbackSummary() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Form Responses 1');
  const rows = sheet.getDataRange().getValues();
  const answers = rows.slice(1); // skip the header row
  if (answers.length === 0) return; // nothing to report yet

  let total = 0;
  let low = 0;
  for (const row of answers) {
    const rating = Number(row[2]); // column C: 0 = A, 1 = B, 2 = C
    total += rating;
    if (rating <= 2) low++;
  }
  const average = (total / answers.length).toFixed(1);

  const body =
    'Responses so far: ' + answers.length + '\\n' +
    'Average rating: ' + average + ' out of 5\\n' +
    'Low ratings (1 or 2): ' + low + '\\n\\n' +
    'Read the comments in the sheet: ' + ss.getUrl();

  const me = Session.getActiveUser().getEmail(); // your own address
  MailApp.sendEmail(me, 'Feedback summary: ' + answers.length + ' responses', body); // ONE email, after the loop
}
`;

/** Lesson 4: the Apps Script that emails you a DRAFT of the weekly report from the Dashboard tab (read-only). */
export const WEEKLY_REPORT_GS = `// Emails ME a draft of the weekly report, built from the Dashboard tab.
// It only READS cells. I check the draft, then I forward it myself.
function sendWeeklyReportDraft() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dash = ss.getSheetByName('Dashboard');
  const read = (cell) => dash.getRange(cell).getDisplayValue(); // the value exactly as shown on screen

  const week = read('A2');      // e.g. "Week of 19 Oct 2026"
  const sales = read('B3');     // delivered sales
  const orders = read('B4');    // delivered orders
  const cancelled = read('B5');
  const pending = read('B6');
  const credit = read('B7');    // credit still to collect
  const lastWeek = read('B8');

  if (sales === '' || week === '') return; // the dashboard is empty: send nothing

  const body =
    week + '\\n\\n' +
    'Delivered sales: ' + sales + ' (last week: ' + lastWeek + ')\\n' +
    'Delivered orders: ' + orders + '\\n' +
    'Cancelled: ' + cancelled + ' | Pending: ' + pending + '\\n' +
    'Credit to collect: ' + credit + '\\n\\n' +
    'CHECK BEFORE FORWARDING: week date, totals vs the Check column, comments.\\n' +
    ss.getUrl();

  MailApp.sendEmail(Session.getActiveUser().getEmail(), 'DRAFT weekly report: ' + week, body);
}
`;
