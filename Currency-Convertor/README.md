# Quantum Currency Converter 🌐⚛️

![Quantum Converter Demo](demo.gif) *Replace with actual demo GIF*

## 📌 Overview
Quantum Converter is a cutting-edge currency conversion application featuring a futuristic glassmorphism UI with real-time exchange rates. This React-based tool combines beautiful animations with practical financial functionality, offering users an immersive experience for currency conversion.

## ✨ Features
- **Real-time Exchange Rates**: Fetches live currency data from reliable API sources
- **Quantum Design**: Stunning glassmorphism UI with floating particle animations
- **Intuitive Conversion**: Instant calculations with smooth animations
- **Currency Swap**: One-click reversal of conversion direction
- **Responsive Layout**: Perfectly adapts to all device sizes
- **Smart Loading States**: Elegant loading animations during data fetch

## 🛠️ Technologies Used
- **Frontend**: React.js + Vite
- **Styling**: Tailwind CSS
- **Animations**: CSS Keyframes
- **API**: [currency-api](https://github.com/fawazahmed0/currency-api)
- **Build Tool**: Vite

## 🚀 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/quantum-converter.git
   ```
2. Navigate to project directory:
   ```bash
   cd quantum-converter
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

## 🌍 API Configuration
The app uses the free currency-api by default. For production use, consider:
1. Creating a `.env` file:
   ```env
   VITE_API_KEY=your_api_key_here
   VITE_API_BASE=https://api.currencyapi.com/v3
   ```
2. Modify the `useCurrencyInfo` hook to use your preferred API

## 🎨 Design System
- **Color Palette**: Cyan-Blue gradient with glass transparency effects
- **Typography**: Modern sans-serif with gradient text accents
- **Spacing**: 8px baseline grid
- **Animations**: Micro-interactions on all user actions

## 📂 Project Structure
```
quantum-converter/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   ├── hooks/            # Custom hooks
│   ├── assets/           # Images, icons
│   ├── App.jsx           # Main application
│   └── main.jsx          # Entry point
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ✉️ Contact
For questions or feedback, please contact:
- **Email**: mughalahsan718@gmail.com


---

**Happy Converting!** 💰➡️💲