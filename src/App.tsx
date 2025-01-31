import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './configs/routes';
import React, { useState, useEffect } from 'react';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index + 1}
            path={route.path}
            element={<route.layout><route.component /></route.layout>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}