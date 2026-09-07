# 🏥 ORGASCAN – AI-Based Smart Disease Detection

<p align="center">
  <b>An AI-powered healthcare platform for intelligent disease detection and medical assistance.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/AI-Artificial%20Intelligence-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Deep%20Learning-TensorFlow-orange?style=for-the-badge&logo=tensorflow&logoColor=white"/>
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Blockchain-Ethereum-purple?style=for-the-badge&logo=ethereum&logoColor=white"/>
</p>

---

## 📌 About The Project

**ORGASCAN** is an AI-based smart healthcare platform designed to detect diseases from images of external body organs such as the **skin and eyes**.

The system combines **Artificial Intelligence, Deep Learning, Computer Vision, Web Development, Database Management, and Blockchain technology** to provide an integrated healthcare solution.

Users can upload medical images for AI-based disease prediction and receive additional healthcare-related information through the platform.

The system is designed as an academic project to demonstrate how AI and modern technologies can be integrated into healthcare applications.

---

## 🎯 Objectives

- 🔍 Detect possible diseases from medical images using Deep Learning
- 🤖 Provide AI-based disease prediction
- 🖼️ Process and analyze medical images
- 💊 Provide treatment-related information
- 🏥 Recommend nearby hospitals
- 💬 Provide AI-powered medical assistance through a chatbot
- 🔐 Store diagnosis-related information securely using Blockchain
- 🌐 Provide an easy-to-use web interface

---

## ✨ Key Features

### 🧠 AI-Based Disease Detection

The system analyzes uploaded images of external body organs and uses Deep Learning techniques to identify possible diseases.

### 🖼️ Medical Image Processing

Images are processed using computer vision and image-processing techniques before being passed to the AI model.

### 🔬 Disease Prediction

The trained Deep Learning model analyzes the input image and generates a predicted disease category.

### 💊 Treatment Information

The platform provides relevant information related to the predicted disease to help users understand the condition.

### 🏥 Nearby Hospital Recommendations

Users can find nearby hospitals for further medical consultation and treatment.

### 🔐 Blockchain-Based Diagnosis Storage

Blockchain technology is used to provide secure and tamper-resistant storage for diagnosis-related information.

### 💬 AI Medical Chatbot

An AI-powered chatbot provides users with additional healthcare-related information and assistance.

### 🌐 Web-Based Healthcare Platform

The system provides a web interface through which users can access the various healthcare features.

Markdown

## 📸 Screenshots

### 🏠 Dashboard

<p align="center">
  <img src="screenshots/dashboard.png" width="900"/>
</p>

---

### 🔍 Disease Detection

<p align="center">
  <img src="screenshots/disease-detection.png" width="900"/>
</p>

---

### 📋 Detection Results

<p align="center">
  <img src="screenshots/detection-result.png" width="900"/>
</p>

---

### 🔐 Blockchain Verification

<p align="center">
  <img src="screenshots/blockchain-verification.png" width="900"/>
</p>

---

### 💬 AI Medical Chatbot

<p align="center">
  <img src="screenshots/chatbot.png" width="900"/>
</p>

---

# 🏗️ System Architecture

```text
                         ┌─────────────────────┐
                         │        USER         │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   React Frontend    │
                         │    Web Interface    │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Node.js Backend   │
                         │    Express APIs     │
                         └──────┬───────┬──────┘
                                │       │
                    ┌───────────┘       └────────────┐
                    ▼                                ▼
          ┌──────────────────┐              ┌──────────────────┐
          │ AI / Deep        │              │     MongoDB      │
          │ Learning Model   │              │     Database     │
          └────────┬─────────┘              └──────────────────┘
                   │
                   ▼
          ┌──────────────────┐
          │ Disease          │
          │ Prediction       │
          └────────┬─────────┘
                   │
                   ▼
          ┌──────────────────┐
          │ Ethereum         │
          │ Blockchain       │
          └──────────────────┘
```
🔄 System Workflow
```
        Upload Medical Image
                │
                ▼
        Image Preprocessing
                │
                ▼
       Deep Learning Model
                │
                ▼
        Disease Prediction
                │
        ┌───────┼──────────┐
        │       │          │
        ▼       ▼          ▼
   Treatment  Hospital   AI Chatbot
   Information Recommendation Assistance
        │       │          │
        └───────┴──────────┘
                │
                ▼
       Blockchain Storage
```
🧠 Artificial Intelligence

ORGASCAN uses Deep Learning and Computer Vision techniques for image-based disease detection.
```

Medical Image
      │
      ▼
Image Preprocessing
      │
      ▼
Feature Extraction
      │
      ▼
Deep Learning Model
      │
      ▼
Disease Classification
      │
      ▼
Prediction Result

```
🔐 Blockchain Integration

ORGASCAN incorporates Ethereum Blockchain technology for secure diagnosis-related data storage.
```

Disease Prediction
        │
        ▼
Diagnosis Information
        │
        ▼
Smart Contract
        │
        ▼
Ethereum Blockchain

```
Blockchain technology helps provide data integrity and makes stored records more resistant to unauthorized modification.
```
```
💬 AI Medical Chatbot

The platform includes an AI-powered chatbot designed to provide additional healthcare-related information.

The chatbot can assist users with:

General healthcare questions
Information about predicted conditions
Basic health-related guidance
Additional information about diseases

⚠️ The chatbot is intended only for informational purposes and should not be considered a replacement for professional medical advice.

🛠️ Technologies Used
Frontend
React.js
Vite
HTML
CSS
JavaScript
Backend
Node.js
Express.js
REST APIs
Artificial Intelligence
Python
TensorFlow
Deep Learning
OpenCV
Image Processing
Database
MongoDB
Blockchain
Ethereum
Solidity
Smart Contracts

📂 Project Structure
```
ORGASCAN/
│
├── Backend/
│   ├── blockchain/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md

```
⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/Aiswarya-RS/ORGASCAN.git

Navigate into the project:

cd ORGASCAN
2. Backend Setup

Navigate to the backend directory:

cd Backend

Install the required dependencies:

npm install

Start the backend server:

npm start
3. Frontend Setup

Open a new terminal.

Navigate to the frontend directory:

cd ORGASCAN/frontend

Install the dependencies:

npm install

Start the development server:

npm run dev

Open the local URL provided by Vite in your browser.

🔄 Application Flow

```

┌───────────────────────┐
│       User            │
│ Uploads Medical Image │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│ Image Processing      │
│ & Preprocessing       │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│ Deep Learning Model   │
│ Image Classification  │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│ Disease Prediction    │
└───────────┬───────────┘
            │
     ┌──────┼───────┐
     │      │       │
     ▼      ▼       ▼
 Treatment Hospital Chatbot
 Information Recommendation
     │      │       │
     └──────┼───────┘
            │
            ▼
┌───────────────────────┐
│ Secure Diagnosis      │
│ Storage               │
│ Blockchain            │
└───────────────────────┘

```
🚀 Future Enhancements

📱 Develop a dedicated Android/iOS application
🧠 Improve disease classification accuracy
🔬 Support additional diseases and organs
☁️ Deploy the platform using cloud infrastructure
🔐 Enhance healthcare data security
📊 Add patient health history and analytics
🌍 Add multilingual healthcare assistance
👨‍⚕️ Enable doctor-patient interaction
📈 Add AI-based disease progression analysis

👩‍💻 Author
Aiswarya R S

Computer Science Engineering Student | Java Developer | AI Enthusiast

Connect With Me
<p align="center"> <a href="https://github.com/Aiswarya-RS"> <img src="https://img.shields.io/badge/GitHub-Aiswarya--RS-black?style=for-the-badge&logo=github"/> </a> <a href="https://www.linkedin.com/in/aiswarya-r-s-a65a19374/"> <img src="https://img.shields.io/badge/LinkedIn-Aiswarya%20R%20S-blue?style=for-the-badge&logo=linkedin"/> </a> <a href="mailto:aiswaryaram025@gmail.com"> <img src="https://img.shields.io/badge/Gmail-Contact-red?style=for-the-badge&logo=gmail"/> </a> </p>
⭐ Project Repository
<p align="center"> <a href="https://github.com/Aiswarya-RS/ORGASCAN"> <img src="https://img.shields.io/badge/View%20Project-GitHub-black?style=for-the-badge&logo=github"/> </a> </p>
⚠️ Disclaimer

ORGASCAN is an academic project developed for educational and research purposes.

The disease predictions, treatment information, chatbot responses, and other healthcare information provided by this application should not be considered a medical diagnosis or professional medical advice.

Users should consult qualified healthcare professionals for proper medical evaluation, diagnosis, and treatment.

<p align="center"> ⭐ If you find this project interesting, consider giving it a star! </p> ```
One important thing ❤️


