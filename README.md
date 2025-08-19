# Reewild – Foodprint AI

## Overview
Reewild is a prototype application that estimates the **carbon footprint of food dishes**.  
It provides two main ways to calculate approximate carbon impact:  
1. **Dish Name → Ingredients → Carbon Score** (via LLM)  
2. **Image Upload → Ingredients Detection → Carbon Score** (via Vision Model + LLM)

This is a **mock prototype** meant to showcase usage of AI/LLM tools, not a production-ready tool.

## Tech Stack
- **Backend:** Node.js + Express + TypeScript  
- **Frontend:** React (TypeScript)  
- **AI Models:** OpenAI GPT & Vision (for dish/ingredient parsing & mock carbon scoring)  

## Features
- Accepts dish name, extracts ingredients using an LLM, and assigns a mock carbon score.  
- Accepts a food image, identifies contents with a Vision model, then estimates carbon impact.  
- Strongly typed backend with TypeScript.  
- Mock scoring system (no database, no external APIs).  

## Project Structure
