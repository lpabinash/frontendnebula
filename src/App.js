
import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import "./App.css";
import Layout from './Components/Layout/Layout';


function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )
  return (
    <Suspense fallback={loading}>
    <Routes>
      <Route path="*" name="Home" element={<Layout />} />
    </Routes>
  </Suspense>
  )
}

export default App