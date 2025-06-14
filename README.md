<div align="center">
  <img height="400" src="https://github.com/shahbaz-kamal/quiz-digitizer-client/blob/main/src/assets/github_banner.png"  />
</div>

###

<h1 align="left">📲 Quiz Digitizer - Frontend Interface 🎯</h1>

###

<p align="left">Quiz Digitizer - Frontend Interface is a responsive React application that allows users to upload worksheet PDFs and visualize the AI-powered quiz output in real time. It connects to the backend API to handle file submissions, displays digitized questions with options and diagrams, and manages loading states using React Query. The interface is designed to be simple, clean, and user-friendly—making it easy for educators or admins to transform traditional exams into structured, interactive formats in just a few clicks.</p>

###

## 🔗 Backened Githup repo 
<p align="left">https://github.com/shahbaz-kamal/quiz-digitizer-server.git</p>

<!-- ###
<!-- ## 👨‍💼 Admin Info
###
<p align="left">Admin Email: shahbaz@kamal.com</p>
<p align="left">Admin Password: 123456Aa</p> -->



## ✨ Features:

###

1. **📄 PDF Upload Handling**

   - Accepts PDF files via a POST endpoint and processes them page-by-page.

2. **🖼️ PDF to High-Resolution Image Conversion**

   - Converts each page to high-DPI JPEG images using ```pdf-poppler```.


3. **🧠 Text Extraction with OCR**

   - Uses ```Tesseract.js``` to extract printed content from each page.
   

4. **🤖 AI-Powered Quiz Structuring (Gemini 1.5 Flash)**

   - Classifies question types (MCQ, SAQ, Activities, etc.)
   - Extracts instructions, options, and correct answers
   -Detects diagram positions and bounding boxes intelligently


5. **✂️ Diagram Cropping with Sharp**

   - Crops diagrams using coordinates provided by Gemini or fallback heuristics (e.g., top-right, center).

6. **☁️ Image Hosting via ImgBB**

   - Uploads cropped diagrams and stores accessible image URLs inside the final quiz JSON.

7. **🧹 Automatic Cleanup**

   - Deletes old images, PDFs, and database entries before each new run to keep the workspace clean.

8. **🧾 Structured JSON Output**

   - Outputs clean JSON format for frontend use, including metadata, questions, options, answers, and diagram info.

9. **🛠️ RESTful API (Express.js)**

   - Easy integration with frontend using ```/digitalize/process-pdf``` POST route.re feedback.

10. **📦 MongoDB Integratio**
    - Persists processed quiz data for retrieval and reuse.


###

## 🛠 Technology Used

###

 <div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
</div>






###
###

## 💥 Dependencies:



###
<p align="left">"@tailwindcss/vite": "^4.1.8",<br>    "@tanstack/react-query": "^5.80.7",<br>    "axios": "^1.9.0",<br>    "react": "^19.1.0",<br>    "react-dom": "^19.1.0",<br>    "react-icons": "^5.5.0",<br>    "react-router": "^7.6.2",<br>    "react-syntax-highlighter": "^15.6.1",<br>    "tailwindcss": "^4.1.8"</p>

###


## 🔧 Installation Guidline:

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Front End</span>
  <img src="https://cdn-icons-png.flaticon.com/128/1055/1055666.png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/quiz-digitizer-client.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Run the following command and open the website locally on port 5173:

```bash
npm run dev
```

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Backend </span>
  <img src="https://img.icons8.com/?size=50&id=2778&format=png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>

###

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/quiz-digitizer-server.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Create a MongoDB user by keeping username and password collected & create a .env file in the root directory and put the following code with corresponding info's and api keys:

```bash
DB_USER=***************************
DB_PASS=***************************
GEMINI_API_KEY=********************
IMG_BB_API_KEY=********************
```
5. Run the following command and open the website locally on port 5000:

```bash
npm start
```

###





