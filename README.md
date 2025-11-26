# Pujiverse

This is the official repository for the Pujiverse personal website/hub.

## 🚀 How to Save & Deploy to GitHub

Since you have added the GitHub Actions workflow (`.github/workflows/deploy.yml`), you just need to push your code to GitHub, and it will automatically build and publish your site.

### Step 1: Initialize Git (if not done)
Open your terminal (Command Prompt or Terminal) in this project folder and run:
```bash
git init
```

### Step 2: Add All Files
This stages your changes (including the new configuration files).
```bash
git add .
```

### Step 3: Commit Changes
Save the snapshot of your code.
```bash
git commit -m "Update site configuration and add deployment workflow"
```

### Step 4: Link to GitHub (if not done)
*Replace the URL below with your actual GitHub repository URL.*
```bash
git branch -M main
git remote add origin https://github.com/pujiverse/Pujiverse.git
```

### Step 5: Push to GitHub
This uploads your code and **triggers the automatic deployment**.
```bash
git push -u origin main
```

---

## 🛠 Local Development

To run this project locally on your machine:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start the Dev Server**:
    ```bash
    npm run dev
    ```

## 📂 Project Structure

*   `src/`: Contains the React source code.
*   `vite.config.ts`: Configuration for the build tool (Vite).
*   `.github/workflows/deploy.yml`: The automation script that publishes to GitHub Pages.
*   `public/`: Static assets (robots.txt, ads.txt).

## 🌍 Socials & Contact

*   **YouTube**: [Pujiverse Tech](https://youtube.com/@PujiverseTech)
*   **Email**: techwithpujith@gmail.com
