# Kitabash Academy website

A one-page website where learners post what they want to learn (coding, engineering subjects, school academics, English, money skills, AI for professionals or anything else) along with their contact details. Each request comes to you so you can contact the learner personally.

It is a plain static site (HTML, CSS and JavaScript, with no build step), so GitHub Pages can host it for free.

## How requests reach you

GitHub Pages can't store form data, so the site sends each request one of two ways:

1. **By email through [Web3Forms](https://web3forms.com)** (recommended, free for 250 requests a month). Each request arrives in your inbox with all the details and a reference number like `KA-261127-AB12`. If the learner gave an email address, you can reply straight to them.
2. **By WhatsApp.** If you add your WhatsApp number, the site shows WhatsApp buttons. If Web3Forms isn't set up yet, submitting the form opens WhatsApp with the request already written out, ready for the learner to send to you.

## Setup (about 10 minutes, all in the browser)

### 1. Get your Web3Forms key
1. Go to https://web3forms.com, type the email address where you want to receive requests and click **Create Access Key**.
2. Copy the key they email you. It is safe to put in a public website.

### 2. Edit `academy/config.js`
On GitHub, open `academy/config.js`, click the pencil icon and fill in:

```js
web3formsKey: "your-key-here",
whatsappNumber: "919876543210",   // country code + number, digits only
contactEmail: "hello@yourdomain.com",
contactPhone: "+91 98765 43210",
```

Click **Commit changes**.

### 3. Turn on GitHub Pages
1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. The workflow `.github/workflows/academy-pages.yml` publishes the `academy/` folder every time something in it changes on `main`. To publish right away, open **Actions → Kitabash Academy website → Run workflow**.
4. The address appears in **Settings → Pages**, for example `https://<your-username>.github.io/<repo>/`.

> GitHub Pages is free for **public** repositories. For a **private** repository you need a paid GitHub plan (Pro, Team or Enterprise). If you'd rather not pay, put the `academy/` folder in its own public repository: nothing in it is secret.

### 4. Use your own domain (optional)
In **Settings → Pages → Custom domain**, enter something like `academy.kitabash.com`, then add the DNS record GitHub shows you at your domain provider.

### 5. Test it
Open the site, submit a test request and check that it arrives in your email.

## Changing the content
- **Subjects and areas:** edit the `CATEGORIES` list at the top of `assets/app.js`. The subject cards and the form drop-downs both read from this list.
- **Text, FAQ and form questions:** `index.html`.
- **Colours and fonts:** the variables at the top of `assets/styles.css` (they match the main Kitabash site).

## Preview on your computer
Open `academy/index.html` in a browser. Everything works except sending email, which needs the Web3Forms key and an internet connection.
