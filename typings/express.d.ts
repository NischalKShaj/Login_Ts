import express from "express";

declare module 'express-session' {
    interface Session {
      user?: String;
    }
  }